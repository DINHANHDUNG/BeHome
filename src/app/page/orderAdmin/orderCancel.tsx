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
  getAllOrderCancelAdmin,
  postDeleteOrderAdmin,
} from "../../../features/Admin/orderAdnim";
import { orderAdminStore } from "../../../use-selector";
import { getParsedDate, getParsedDateTime, useAppDispatch, useAppSelector } from "../../hooks";

function OrderCancel() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const order = useAppSelector(orderAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({ id: 0, name: "" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    dispatch(
      getAllOrderCancelAdmin({
        page: page,
        noitem: pageSize,
      })
    );
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
      title: "Mã đơn",
      dataIndex: "code",
      key: "code",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) => a.code.localeCompare(b.code),
    },

    {
      title: "Tên khách hàng",
      dataIndex: "namecustomer",
      key: "namecustomer",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) => a.namecustomer.localeCompare(b.namecustomer),
    },

    {
      title: "Địa chỉ",
      dataIndex: "addresscustomer",
      key: "addresscustomer",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) =>
        a.addresscustomer.localeCompare(b.addresscustomer),
    },

    {
      title: "Số điện thoại",
      dataIndex: "phonenumbercustomer",
      key: "phonenumbercustomer",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) =>
        a.phonenumbercustomer.localeCompare(b.phonenumbercustomer),
    },

    {
      title: "Email",
      dataIndex: "emailcustomer",
      key: "emailcustomer",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) =>
        a.emailcustomer.localeCompare(b.emailcustomer),
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date: any) => <>{getParsedDateTime(created_date)}</>,
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
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
            title="Quản lý đơn hàng đã hủy"
            extra={
              <>
                <Popconfirm
                  title="Bạn có chắc muốn xóa không?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(postDeleteOrderAdmin({ id: selectedID })).then(
                      () =>
                        dispatch(
                          getAllOrderCancelAdmin({
                            page: page,
                            noitem: 0,
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
                dataSource={order.listOrder}
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

      <Row gutter={[24, 24]}>
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
                getAllOrderCancelAdmin({
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
            total={order.listOrder.length}
          />
        </Col>
      </Row>
      {/* {visible && (
          <ModalManufacturer
            visible={visible}
            toggle={() => {
              setVisible(false);
            }}
            value={value}
            pageSize={pageSize}
            page={page}
          />
        )} */}
    </div>
  );
}

export default OrderCancel;
