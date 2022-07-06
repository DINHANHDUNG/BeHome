import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Select,
  Table,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getAllCategoryProductAdmin } from "../../../../features/Admin/categoryAdnim";
import {
  getAllProductAdmin,
  getAllProductNeedUpdate,
  getProductSearchAdmin,
  postDeleteProductAdmin,
} from "../../../../features/Admin/productAdnim";
import {
  accountAdminStore,
  categoryAdminStore,
  productAdminStore,
} from "../../../../use-selector";
import ModalProduct from "../../../component/customer/modal/Product/modal-product";
import ModalProductUpdate from "../../../component/customer/modal/Product/modal-productUpdate";
import {
  currency,
  getParsedDate,
  openNotification,
  useAppDispatch,
  useAppSelector,
} from "../../../hooks";
import { Product } from "../../../types/product";

function ProductUpdateAdmin() {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const products = useAppSelector(productAdminStore);
  const acc = useAppSelector(accountAdminStore);
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({} as Product);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    dispatch(getAllCategoryProductAdmin()).then((res: any) => {});

    dispatch(
      getAllProductNeedUpdate({
        page: page,
        sort: 0,
        noitem: pageSize,
      })
    );
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (text: any, row: any, index: any) => row.category.name,
      sorter: (a: any, b: any) =>
        a.category.name.localeCompare(b.category.name),
    },

    {
      title: "Hạng",
      dataIndex: "rank",
      key: "rank",
      render: (text: any, row: any, index: any) => row.rank.name,
      sorter: (a: any, b: any) => a.rank.name.localeCompare(b.rank.name),
    },

    {
      title: "Phân khúc",
      dataIndex: "manufacturer",
      key: "manufacturer",
      render: (text: any, row: any, index: any) => row.manufacturer.name,
      sorter: (a: any, b: any) =>
        a.manufacturer.name.localeCompare(b.manufacturer.name),
    },

    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },

    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price: any) => <>{currency(price)}</>,
      sorter: (a: any, b: any) => Number(a.price) - Number(b.price),
    },

    {
      title: "Ngày tạo",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date: any) => <>{getParsedDate(created_date)}</>,
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_date",
      key: "updated_date",
      render: (updated_date: any) => <>{getParsedDate(updated_date)}</>,
      sorter: (a: any, b: any) => {
        if (moment(a.updated_date).isBefore(moment(b.updated_date))) {
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
            title="Quản lý sản phẩm cần cập nhật"
            extra={
              <>
                <Popconfirm
                  title="Bạn có chắc muốn xóa sản phẩm?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() => {
                    if (selectedID.length < 1) {
                      openNotification({
                        message: "Chưa chọn sản phẩm",
                        type: "error",
                      });
                    } else {
                      dispatch(postDeleteProductAdmin({ id: selectedID })).then(
                        () => {
                          dispatch(
                            getAllProductNeedUpdate({
                              page: page,
                              sort: 0,
                              noitem: pageSize,
                            })
                          );
                        }
                      );
                    }
                  }}
                >
                  <Button onClick={() => {}}>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
            <Row gutter={[24, 0]}>
              <Col xl={24}>
                {visibleSearch && (
                  <Row gutter={[24, 24]}>
                    <Col md={10} xs={20} style={{ margin: "20px" }}></Col>
                  </Row>
                )}
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={products.listproduct}
                    pagination={false}
                    className="ant-border-space"
                    rowSelection={{
                      ...rowSelection,
                    }}
                    rowKey="id"
                    onRow={(record, rowIndex) => {
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
                  onChange={(page, pageSizeNew) => {
                    console.log(page, pageSizeNew);
                    setPage(page);
                    dispatch(
                      getAllProductNeedUpdate({
                        page: page,
                        sort: 0,
                        noitem: pageSizeNew ? pageSizeNew : pageSize,
                      })
                    );
                    if (pageSizeNew) {
                      setPageSize(pageSizeNew);
                    }
                  }}
                  pageSize={pageSize}
                  current={page}
                  total={products.listproduct.length}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {visible && (
        <ModalProductUpdate
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          page={page}
          pageSize={pageSize}
        />
      )}
    </div>
  );
}

export default ProductUpdateAdmin;
