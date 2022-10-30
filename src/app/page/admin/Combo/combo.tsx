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
} from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  getAllCategoryComboAdmin,
  getAllCategoryProductAdmin,
} from '../../../../features/Admin/categoryAdnim';
import {
  getAllComboAdmin,
  getComboSearchAdmin,
  hiddenComboByIdAdmin,
  postDeleteComboAdmin,
  showComboByIdAdmin,
} from '../../../../features/Admin/comboAdnim';
import {
  accountAdminStore,
  categoryAdminStore,
  comboAdminStore,
} from '../../../../use-selector';
import ModalCombo from '../../../component/customer/modal/Combo/modal-combo';
import {
  currency,
  getParsedDate,
  openNotification,
  useAppDispatch,
  useAppSelector,
} from '../../../hooks';
import { Product } from '../../../types/product';

function Combo() {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const categorys = useAppSelector(categoryAdminStore);
  const combos = useAppSelector(comboAdminStore);
  const acc = useAppSelector(accountAdminStore);
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({} as any);
  const [valueInputSelect, setValueInputSelect] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [arrImgDelete, setArrImgDelete] = useState([] as any);

  useEffect(() => {
    dispatch(getAllCategoryComboAdmin());
    setValueInputSelect(0);

    dispatch(
      getAllComboAdmin({
        id_category: 0,
        page: page,
        sort: 0,
        noitem: pageSize,
      })
    );
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      render: (text: any, row: any, index: any) => index + 1,
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      render: (text: any, row: any, index: any) => row.category.name,
      sorter: (a: any, b: any) =>
        a.category.name.localeCompare(b.category.name),
    },

    {
      title: 'Tên combo',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },

    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price: any) => <>{currency(price)}</>,
      sorter: (a: any, b: any) => Number(a.price) - Number(b.price),
    },

    {
      title: 'Ngày tạo',
      dataIndex: 'created_date',
      key: 'created_date',
      render: (created_date: any) => (
        <>{moment(created_date).utc().format('DD-MM-YYYY').toString()}</>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updated_date',
      key: 'updated_date',
      render: (updated_date: any) => (
        <>{moment(updated_date).utc().format('DD-MM-YYYY').toString()}</>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.updated_date).isBefore(moment(b.updated_date))) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: 'Quản lý trang chủ',
      dataIndex: 'show',
      key: 'show',
      render: (text: any, row: any, index: any) => (
        <Space size="middle">
          {!row.homepage ? (
            <Button
            style={{color: '#0a9f15'}}
              onClick={() => {
                // setVisible2(true);
                
                dispatch(showComboByIdAdmin({ id: row.id })).then(() => {
                  if (visibleSearch) {
                    dispatch(
                      getComboSearchAdmin({
                        id_category: 0,
                        comboKey: valueSearch ? valueSearch : '',
                        minprice: null,
                        maxprice: null,
                        page: page,
                        noitem: pageSize,
                        sort: 0,
                      })
                    );
                  } else {
                    dispatch(
                      getAllComboAdmin({
                        id_category: valueInputSelect,
                        sort: 0,
                        page: page,
                        noitem: pageSize,
                      })
                    );
                  }
                });
              }}
            >
              Hiện trên trang chủ
            </Button>
          ) : (
            <Button
            style={{color: 'red'}}
              onClick={() => {
                // setVisible2(true);
                dispatch(hiddenComboByIdAdmin({ id: row.id })).then(() => {
                  if (visibleSearch) {
                    dispatch(
                      getComboSearchAdmin({
                        id_category: 0,
                        comboKey: valueSearch ? valueSearch : '',
                        minprice: null,
                        maxprice: null,
                        page: page,
                        noitem: pageSize,
                        sort: 0,
                      })
                    );
                  } else {
                    dispatch(
                      getAllComboAdmin({
                        id_category: valueInputSelect,
                        sort: 0,
                        page: page,
                        noitem: pageSize,
                      })
                    );
                  }
                });
              }}
            >
              Ẩn khỏi trang chủ
            </Button>
          )}
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
        'selectedRows: ',
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
      getAllComboAdmin({
        id_category: value,
        page: 1,
        sort: 0,
        noitem: pageSize,
      })
    );
  }

  function onSearch(val: any) {
    console.log('search:', val.target.value);
    setValueSearch(val.target.value);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(
        getComboSearchAdmin({
          id_category: 0,
          comboKey: valueSearch ? valueSearch : '',
          minprice: null,
          maxprice: null,
          page: page,
          noitem: pageSize,
        })
      );
    }
  };

  // showComboByIdAdmin
  // hiddenComboByIdAdmin

  return (
    <div className="tabled" style={{ marginBottom: '20px' }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý combo"
            extra={
              <>
                <Button
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    setVisibleSearch(!visibleSearch);
                  }}
                >
                  Tìm kiếm
                </Button>
                <Select
                  showSearch
                  placeholder="Chọn danh mục"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  style={{ minWidth: '120px', marginRight: '10px' }}
                  value={valueInputSelect}
                  filterOption={(input, option: any) =>
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={0} key={0}>
                    Tất cả danh mục
                  </Option>
                  {categorys?.listcategoryCombo?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>

                <Button
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    setVisible(true);
                    setValue({} as Product);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Bạn có chắc muốn xóa sản phẩm?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() => {
                    if (selectedID.length < 1) {
                      openNotification({
                        message: 'Chưa chọn sản phẩm',
                        type: 'error',
                      });
                    } else {
                      dispatch(postDeleteComboAdmin({ id: selectedID })).then(
                        () => {
                          dispatch(
                            getAllComboAdmin({
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
                  <Button>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
            <Row gutter={[24, 0]}>
              <Col xl={24}>
                {visibleSearch && (
                  <Row gutter={[24, 24]}>
                    <Col md={10} xs={20} style={{ margin: '20px' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <Input
                          placeholder="Tìm kiếm"
                          onChange={onSearch}
                          style={{ width: '100%', marginRight: '10px' }}
                          size="small"
                          onKeyDown={handleKeyDown}
                        />
                        <Button
                          size="large"
                          onClick={() => {
                            dispatch(
                              getComboSearchAdmin({
                                id_category: 0,
                                comboKey: valueSearch ? valueSearch : '',
                                minprice: null,
                                maxprice: null,
                                page: page,
                                noitem: pageSize,
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
                    dataSource={combos.listCombo}
                    pagination={false}
                    className="ant-border-space"
                    rowSelection={{
                      ...rowSelection,
                    }}
                    rowKey="id"
                    onRow={(record, rowIndex) => {
                      return {
                        onDoubleClick: (event) => {
                          setVisible(true);
                        }, // double click row
                        onMouseEnter: (event) => {
                          setValue(record);
                        }, // mouse enter row
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
                    marginTop: '10px',
                    float: 'right',
                    marginBottom: '10px',
                  }}
                  onChange={(page, pageSizeNew) => {
                    console.log(page, pageSizeNew);
                    setPage(page);
                    dispatch(
                      getAllComboAdmin({
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
                  total={combos.total}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {visible && (
        <ModalCombo
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          valueInputSelect={valueInputSelect}
          page={page}
          pageSize={pageSize}
          comboKey={valueSearch}
          visibleSearch={visibleSearch}
        />
      )}
    </div>
  );
}

export default Combo;
