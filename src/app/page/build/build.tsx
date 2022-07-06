import {
  Button,
  Card,
  Col,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getAllBuildAdmin,
  postDeleteBuildAdmin,
} from "../../../features/Admin/buildAdmin";
import { buildAdminStore } from "../../../use-selector";
import ModalBuildDesign from "../../component/customer/modal/modalBuildDesign/modal-buildDesign";
import { useAppDispatch, useAppSelector } from "../../hooks";

function BuildDesign() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const buildDesign = useAppSelector(buildAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({ id: 0, name: "", builddesigns: [] });

  useEffect(() => {
    dispatch(getAllBuildAdmin());
  }, []);

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
      title: "Tên thiết kế",
      dataIndex: "name",
      key: "name",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
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
            title="Quản lý xây dựng thiết kế"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({ id: 0, name: "", builddesigns: [] });
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
                    dispatch(postDeleteBuildAdmin({ id: selectedID })).then(
                      () => dispatch(getAllBuildAdmin())
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
                dataSource={buildDesign.listBuild}
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

      {visible && (
        <ModalBuildDesign
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
        />
      )}
    </div>
  );
}

export default BuildDesign;
