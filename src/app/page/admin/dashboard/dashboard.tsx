import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getAllCategoryProductAdmin } from "../../../../features/Admin/categoryAdnim";
import {
  getAllProductAdmin,
  getProductSearch2Admin,
  getProductSearchAdmin,
  hiddenProductByIdAdmin,
  postDeleteProductAdmin,
  showProductByIdAdmin,
} from "../../../../features/Admin/productAdnim";
import {
  accountAdminStore,
  categoryAdminStore,
  productAdminStore,
} from "../../../../use-selector";
import ModalProduct from "../../../component/customer/modal/Product/modal-product";
import {
  currency,
  getParsedDate,
  openNotification,
  useAppDispatch,
  useAppSelector,
} from "../../../hooks";
import { Product } from "../../../types/product";

function Dashboard() {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const products = useAppSelector(productAdminStore);
  const categorys = useAppSelector(categoryAdminStore);
  const acc = useAppSelector(accountAdminStore);
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({} as Product);
  const [valueInputSelect, setValueInputSelect] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [arrImgDelete, setArrImgDelete] = useState([] as any);
  console.log(products, categorys);

  useEffect(() => {
    dispatch(getAllCategoryProductAdmin()).then((res: any) => {});
    setValueInputSelect(0);

    dispatch(
      getAllProductAdmin({
        id_category: 0,
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
      title: "Danh m???c",
      dataIndex: "category",
      key: "category",
      render: (text: any, row: any, index: any) => row.category.name,
      sorter: (a: any, b: any) =>
        a.category.name.localeCompare(b.category.name),
    },

    {
      title: "Ph??n kh??c",
      dataIndex: "rank",
      key: "rank",
      render: (text: any, row: any, index: any) => row.rank.name,
      sorter: (a: any, b: any) => a.rank.name.localeCompare(b.rank.name),
    },

    {
      title: "H??ng",
      dataIndex: "manufacturer",
      key: "manufacturer",
      render: (text: any, row: any, index: any) => row.manufacturer.name,
      sorter: (a: any, b: any) =>
        a.manufacturer.name.localeCompare(b.manufacturer.name),
    },

    {
      title: "T??n s???n ph???m",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },

    {
      title: "Gi??",
      dataIndex: "price",
      key: "price",
      render: (price: any) => <>{price ? currency(price) : "Li??n h???"}</>,
      sorter: (a: any, b: any) => Number(a.price) - Number(b.price),
    },

    {
      title: "Ng??y t???o",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date: any) => (
        <>
          {/* {getParsedDate(created_date)} */}
          {moment(created_date).utc().format("DD-MM-YYYY").toString()}
        </>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Ng??y c???p nh???t",
      dataIndex: "updated_date",
      key: "updated_date",

      render: (updated_date: any) => (
        <>{moment(updated_date).utc().format("DD-MM-YYYY").toString()}</>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.updated_date).isBefore(moment(b.updated_date))) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: "Qu???n l?? trang ch???",
      dataIndex: "show",
      key: "show",
      render: (text: any, row: any, index: any) => (
        <Space size="middle">
          {!row.homepage ? (
            <Button
              onClick={() => {
                // setVisible2(true);
                dispatch(showProductByIdAdmin({ id: row.id })).then(() => {
                  if (visibleSearch) {
                    dispatch(
                      getProductSearchAdmin({
                        id_category: 0,
                        id_rank: 0,
                        id_manufacturer: 0,
                        productKey: valueSearch ? valueSearch : "",
                        minprice: null,
                        maxprice: null,
                        page: page,
                        noitem: pageSize,
                        sort: 0,
                      })
                    );
                  } else {
                    dispatch(
                      getAllProductAdmin({
                        id_category: valueInputSelect,
                        sort: 0,
                        page: page,
                        noitem: pageSize,
                      })
                    );
                  }
                });
              }}
              style={{color: "#0a9f15"}}
            >
              Hi???n tr??n trang ch???
            </Button>
          ) : (
            <Button
              onClick={() => {
                // setVisible2(true);
                dispatch(hiddenProductByIdAdmin({ id: row.id })).then(() => {
                  if (visibleSearch) {
                    dispatch(
                      getProductSearchAdmin({
                        id_category: 0,
                        id_rank: 0,
                        id_manufacturer: 0,
                        productKey: valueSearch ? valueSearch : "",
                        minprice: null,
                        maxprice: null,
                        page: page,
                        noitem: pageSize,
                        sort: 0,
                      })
                    );
                  } else {
                    dispatch(
                      getAllProductAdmin({
                        id_category: valueInputSelect,
                        sort: 0,
                        page: page,
                        noitem: pageSize,
                      })
                    );
                  }
                });
              }}
              style={{color: "red"}}
            >
              ???n kh???i trang ch???
            </Button>
          )}
        </Space>
      ),
    },
  ];

  // showProductByIdAdmin
  // hiddenProductByIdAdmin

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

  function onChange(value: any) {
    console.log(`selected ${value}`);
    setValueInputSelect(value);
    setPage(1);
    dispatch(
      getAllProductAdmin({
        id_category: value,
        page: 1,
        sort: 0,
        noitem: pageSize,
      })
    );
  }

  function onSearch(val: any) {
    console.log("search:", val.target.value);
    setValueSearch(val.target.value);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(
        getProductSearchAdmin({
          id_category: null,
          id_rank: null,
          id_manufacturer: null,
          productKey: valueSearch ? valueSearch : "",
          minprice: null,
          maxprice: null,
          page: page,
          noitem: pageSize,
          sort: 0,
        })
      );
    }
  };

  return (
    <div className="tabled" style={{ marginBottom: "20px" }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Qu???n l?? s???n ph???m theo danh m???c"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisibleSearch(!visibleSearch);
                  }}
                >
                  T??m ki???m
                </Button>
                <Select
                  showSearch
                  placeholder="Ch???n danh m???c"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  style={{ minWidth: "120px", marginRight: "10px" }}
                  value={valueInputSelect}
                  filterOption={(input, option: any) =>
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={0} key={0}>
                    T???t c??? danh m???c
                  </Option>
                  {categorys?.listcategoryProduct?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>

                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisible(true);
                    setValue({} as Product);
                  }}
                >
                  Th??m
                </Button>

                <Popconfirm
                  title="B???n c?? ch???c mu???n x??a s???n ph???m?"
                  okText="C??"
                  cancelText="Kh??ng"
                  onConfirm={() => {
                    if (selectedID.length < 1) {
                      openNotification({
                        message: "Ch??a ch???n s???n ph???m",
                        type: "error",
                      });
                    } else {
                      dispatch(postDeleteProductAdmin({ id: selectedID })).then(
                        () => {
                          dispatch(
                            getAllProductAdmin({
                              id_category: valueInputSelect,
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
                  <Button onClick={() => {}}>X??a</Button>
                </Popconfirm>
              </>
            }
          >
            <Row gutter={[24, 0]}>
              <Col xl={24}>
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
                          placeholder="T??m ki???m"
                          onChange={onSearch}
                          style={{ width: "100%", marginRight: "10px" }}
                          size="small"
                          onKeyDown={handleKeyDown}
                        />
                        <Button
                          size="large"
                          onClick={() => {
                            dispatch(
                              getProductSearchAdmin({
                                id_category: null,
                                id_rank: null,
                                id_manufacturer: null,
                                productKey: valueSearch ? valueSearch : "",
                                minprice: null,
                                maxprice: null,
                                page: page,
                                noitem: pageSize,
                                sort: 0,
                              })
                            );
                          }}
                        >
                          T??m
                        </Button>
                      </div>
                    </Col>
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
                      getAllProductAdmin({
                        id_category: valueInputSelect,
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
                  total={products.total}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {visible && (
        <ModalProduct
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          valueInputSelect={valueInputSelect}
          page={page}
          pageSize={pageSize}
          productkey={valueSearch}
          visibleSearch={visibleSearch}
        />
      )}
    </div>
  );
}

export default Dashboard;
