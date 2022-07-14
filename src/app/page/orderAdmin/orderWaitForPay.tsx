import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getAllOrderWaitForPayAdmin,
  getSearchOrderAdmin,
  OrderCanceledADmin,
  OrderCompletedADmin,
  postDeleteOrderAdmin,
} from "../../../features/Admin/orderAdnim";
import { orderAdminStore } from "../../../use-selector";
import ModalDetailoOderDdmin from "../../component/customer/modal/order/modal-detailorder-admin";
import {
  getParsedDate,
  getParsedDateTime,
  useAppDispatch,
  useAppSelector,
} from "../../hooks";
import { Order } from "../../types/order";
import { Product } from "../../types/product";

function OrderWaitForPay() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const order = useAppSelector(orderAdminStore);

  console.log(order);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({} as Order);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [valueSearch, setValueSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    dispatch(
      getAllOrderWaitForPayAdmin({
        page: page,
        noitem: pageSize,
      })
    );
  }, []);

  function onSearch(val: any) {
    console.log("search:", val.target.value);
    setValueSearch(val.target.value);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(
        getSearchOrderAdmin({
          orderkey: valueSearch ? valueSearch : "",
          type: "CHỜ THANH TOÁN",
        })
      );
    }
  };

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
      title: "Tổng tiền",
      dataIndex: "totalmoney",
      key: "totalmoney",
      // render: (text: any, row: any, index: any) => row.manufacturer?.name,
      sorter: (a: any, b: any) => a.totalmoney.localeCompare(b.totalmoney),
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
      render: (created_date: any) => (
        <>{moment(created_date).utc().format("DD-MM-YYYY").toString()}</>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (text: any, row: any, index: any) => (
        <Space size="middle">
          <Button
            onClick={() => {
              dispatch(OrderCompletedADmin({ id: row.id })).then(() =>
                dispatch(
                  getAllOrderWaitForPayAdmin({
                    page: page,
                    noitem: pageSize,
                  })
                )
              );
            }}
          >
            Hoàn thành
          </Button>
          <Button
            onClick={() => {
              dispatch(OrderCanceledADmin({ id: row.id })).then(() =>
                dispatch(
                  getAllOrderWaitForPayAdmin({
                    page: page,
                    noitem: pageSize,
                  })
                )
              );
            }}
          >
            Hủy
          </Button>
        </Space>
      ),
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
            title="Quản lý đơn hàng chờ thanh toán"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisibleSearch(!visibleSearch);
                  }}
                >
                  Tìm kiếm
                </Button>
                <Popconfirm
                  title="Bạn có chắc muốn xóa không?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(postDeleteOrderAdmin({ id: selectedID })).then(
                      () =>
                        dispatch(
                          getAllOrderWaitForPayAdmin({
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
            {visibleSearch && (
              <Row gutter={[24, 24]}>
                <Col md={10} xs={20} style={{ margin: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Input
                      placeholder="Tìm kiếm"
                      onChange={onSearch}
                      style={{ width: "100%", marginRight: "10px" }}
                      size="small"
                      onKeyDown={handleKeyDown}
                    />
                    <Button
                      size="large"
                      onClick={() => {
                        dispatch(
                          getSearchOrderAdmin({
                            orderkey: valueSearch ? valueSearch : "",
                            type: "CHỜ THANH TOÁN",
                          })
                        );
                      }}
                    >
                      Tìm
                    </Button>
                  </div>
                </Col>
              </Row>
            )}
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
                getAllOrderWaitForPayAdmin({
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
            total={order.total}
          />
        </Col>
      </Row>
      {visible && (
        <ModalDetailoOderDdmin
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

export default OrderWaitForPay;
