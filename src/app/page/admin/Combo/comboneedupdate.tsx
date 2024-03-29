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
} from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  getAllCategoryComboAdmin,
  getAllCategoryProductAdmin,
} from '../../../../features/Admin/categoryAdnim';
import {
  getAllComboAdmin,
  getAllComboNeedUpdateAdmin,
  getComboSearchAdmin,
  postDeleteComboAdmin,
} from '../../../../features/Admin/comboAdnim';
import {
  accountAdminStore,
  categoryAdminStore,
  comboAdminStore,
} from '../../../../use-selector';
import ModalCombo from '../../../component/customer/modal/Combo/modal-combo';
import ModalComboUpdate from '../../../component/customer/modal/Combo/modal-comboUpdate';
import {
  currency,
  getParsedDate,
  openNotification,
  useAppDispatch,
  useAppSelector,
} from '../../../hooks';
import { Product } from '../../../types/product';

function ComboNeedUpdate() {
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
    dispatch(
      getAllComboNeedUpdateAdmin({ page: page, sort: 0, noitem: pageSize })
    );
    setValueInputSelect(0);

    // dispatch(
    //   getAllComboAdmin({
    //     id_category: 0,
    //     page: page,
    //     sort: 0,
    //     noitem: pageSize,
    //   })
    // );
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
    // dispatch(
    //   getAllComboAdmin({
    //     id_category: value,
    //     page: 1,
    //     sort: 0,
    //     noitem: pageSize,
    //   })
    // );
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

  return (
    <div className="tabled" style={{ marginBottom: '20px' }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý combo cần cập nhật"
            extra={
              <>
                {/* <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisibleSearch(!visibleSearch);
                  }}
                >
                  Tìm kiếm
                </Button> */}
                {/* <Select
                  showSearch
                  placeholder="Chọn danh mục"
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
                    Tất cả danh mục
                  </Option>
                  {categorys?.listcategoryCombo?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select> */}

                {/* <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisible(true);
                    setValue({} as Product);
                  }}
                >
                  Thêm
                </Button> */}

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
                            getAllComboNeedUpdateAdmin({
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
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onClick: (event) => {}, // click row
                        onDoubleClick: (event) => {
                          setVisible(true);
                        }, // double click row
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onContextMenu: (event) => {}, // right button click row
                        onMouseEnter: (event) => {
                          // console.log(record);
                          setValue(record);
                        }, // mouse enter row
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onMouseLeave: (event) => {}, // mouse leave row
                      };
                    }}
                  />
                </div>
              </Col>
            </Row>

            {combos.total > 0 ? (
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
                        getAllComboNeedUpdateAdmin({
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
            ) : null}
          </Card>
        </Col>
      </Row>

      {visible && (
        <ModalComboUpdate
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

export default ComboNeedUpdate;
