import { Button, Card, Col, Pagination, Popconfirm, Row, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  getAllPromotionAdmin,
  postDeletePromotionAdmin,
} from '../../../../features/Admin/promotion';
import { promotionAdminStore } from '../../../../use-selector';
import ModalPromotion from '../../../component/customer/modal/Promotion/modal-promotion';
import { getParsedDate, useAppDispatch, useAppSelector } from '../../../hooks';

function Promotion() {
  const dispatch = useAppDispatch();
  const promotion = useAppSelector(promotionAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({
    id: 0,
  } as any);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(
      getAllPromotionAdmin({
        page: page,
        noitem: pageSize,
      })
    );
  }, []);

  // table code start
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      render: (text: any, row: any, index: any) => index + 1,
    },

    {
      title: 'Tên KM',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },

    {
      title: 'Ngày tạo',
      dataIndex: 'created_date',
      key: 'created_date',
      render: (created_date: any) => (
        <div style={{ whiteSpace: 'nowrap' }}>
          {moment(created_date).utc().format('DD-MM-YYYY').toString()}
        </div>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.Created).isBefore(moment(b.Created))) {
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
        <div style={{ whiteSpace: 'nowrap' }}>
          {moment(updated_date).utc().format('DD-MM-YYYY').toString()}
        </div>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.Created).isBefore(moment(b.Created))) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: 'Show',
      dataIndex: 'show',
      key: 'show',
      render: (show: any) => <>{show ? 'Hiện' : 'Ẩn'}</>,
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

  return (
    <div className="tabled" style={{ marginBottom: '20px' }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý khuyến mại"
            extra={
              <>
                <Button
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    setValue({
                      id: 0,
                    });
                    setVisible(true);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Xóa danh mục sẽ xóa hết sản phẩm trong danh mục đó, bạn có chắc muốn xóa không？"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(postDeletePromotionAdmin({ id: selectedID })).then(
                      () =>
                        dispatch(
                          getAllPromotionAdmin({
                            page: page,
                            noitem: pageSize,
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
                dataSource={promotion.listpromotion.filter(
                  (item: any) => item.id !== 0
                )}
                pagination={false}
                className="ant-border-space"
                rowSelection={{
                  ...rowSelection,
                }}
                rowKey="id"
                onRow={(record: any, rowIndex) => {
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
            onChange={(page, pageSizeNew) => {
              console.log(page, pageSizeNew);
              setPage(page);
              dispatch(
                getAllPromotionAdmin({
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
            total={promotion.total}
          />
        </Col>
      </Row> */}
      {visible && (
        <ModalPromotion
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

export default Promotion;
