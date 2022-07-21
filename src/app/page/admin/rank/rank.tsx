import {
  Button,
  Card,
  Col, Popconfirm,
  Row,
  Table,
  Typography
} from "antd";
import { useEffect, useState } from "react";
import {
  getAllRankAdmin,
  postDeleteRankAdmin
} from "../../../../features/Admin/rankAdnim";
import { rankAdminStore } from "../../../../use-selector";
import ModalRank from "../../../component/customer/modal/modalRank/modal-Rank";
import { useAppDispatch, useAppSelector } from "../../../hooks";

function Rank() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const rank = useAppSelector(rankAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [dataTable, setDataTable] = useState([] as any);
  const [value, setValue] = useState({
    count: 0,
    rank: { id: 0, name: "" },
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    dispatch(
      getAllRankAdmin({
        id_category: 0,
      })
    );
  }, []);

  useEffect(() => {
    const data = [] as any;
    rank.listRank?.map((val) => {
      data.push({
        id: val.rank?.id,
        name: val.rank?.name,
      });
    });

    setDataTable(data);
  }, [rank.listRank]);

  //  {count: 10, {id: 10, name:" abc"}}
  // table code start
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
    },

    {
      title: "Phân khúc",
      dataIndex: "name",
      key: "name",
      // render: (text: any, row: any, index: any) => row.rank?.name,
      sorter: (a: any, b: any) => a.rank.name.localeCompare(b.rank.name),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    selected,
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedID(selectedRowKeys);
      setSelected(selectedRows);
    },
  };

  return (
    <div className="tabled" style={{ marginBottom: "20px" }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý phân khúc"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({
                      count: 0,
                      rank: { id: 0, name: "" },
                    });
                    setVisible(true);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Bạn có chắc muốn xóa không?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(postDeleteRankAdmin({ id: selectedID })).then(() =>
                      dispatch(
                        getAllRankAdmin({
                          id_category: 0,
                        })
                      )
                    )
                  }
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={dataTable}
                pagination={false}
                className="ant-border-space"
                rowSelection={{
                  ...rowSelection,
                }}
                rowKey="id"
                onRow={(record: any, rowIndex) => {
                  return {
                    onClick: (event) => {}, // click row
                    onDoubleClick: (event) => {
                      setVisible(true);
                    }, // double click row
                    onContextMenu: (event) => {}, // right button click row
                    onMouseEnter: (event) => {
                      // console.log(record);
                      setValue(record);
                    }, // mouse enter row
                    onMouseLeave: (event) => {}, // mouse leave row
                  };
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>

      {/* <Row gutter={[24, 24]}>
        <Col xl={24}>
          <Pagination
            style={{
              marginTop: "10px",
              float: "right",
              marginBottom: "10px",
            }}
            onChange={(page: any, pageSizeNew: any) => {
              console.log(page, pageSizeNew);
              setPage(page);
              dispatch(
                getAllManufacturerAdmin({
                  id_category: 0,
                  page: page,
                  noitem: pageSizeNew ? pageSizeNew : pageSize,
                })
              );
              if (pageSizeNew) {
                setPageSize(pageSizeNew);
              }
            }}
            pageSize={pageSize}
            current={page}
            total={rank.total}
          />
        </Col>
      </Row> */}
      {visible && (
        <ModalRank
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          pageSize={pageSize}
          page={page}
        />
      )}
    </div>
  );
}

export default Rank;
