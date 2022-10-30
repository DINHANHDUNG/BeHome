import {
  Button,
  Card,
  Col,
  Pagination,
  Popconfirm,
  Row,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';
import {
  getAllCommentAdmin,
  postAddReplyAdmin,
  postDeleteCommentAdmin,
  postDeleteReplyAdmin,
} from '../../../../features/Admin/commentAdnim';
import { commentAdminStore } from '../../../../use-selector';
import ModalReplyAdmin from '../../../component/customer/modal/Reply/modal-reply';
import { useAppDispatch, useAppSelector } from '../../../hooks';

function CommentAdmin() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const commentTrees = useAppSelector(commentAdminStore);
  console.log(commentTrees);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);

  const [visible, setVisible] = useState(false);
  const [idComment, setIDComment] = useState(0);
  const [page, setPage] = useState(1);
  const [noitem, setNoitem] = useState(10);
  const [value, setValue] = useState({
    id: 0,
    id_parent: 0,
    name: '',
  } as any);

  useEffect(() => {
    dispatch(getAllCommentAdmin({ page: page, noitem: noitem }));
  }, []);
  const columns2: TableColumnsType<any> = [
    { title: 'Replys', dataIndex: 'contents', key: 'contents' },
    {
      title: 'Tên khách',
      dataIndex: 'namecustomer',
      key: 'namecustomer',
      render: (text: any, row: any, index: any) =>
        row.namecustomer?.length > 0 ? row.namecustomer : 'ADMIN',
    },
    {
      title: 'Số điện thoại',
      key: 'phonenumbercustomer',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'addresscustomer',
      key: 'addresscustomer',
    },
    {
      title: 'hành động',
      dataIndex: 'operation',
      key: 'operation',
      render: (text: any, row: any, index: any) => (
        <Space size="middle">
          <Popconfirm
            title="Bạn có chắc muốn xóa không?"
            okText="Có"
            cancelText="Không"
            onConfirm={() =>
              dispatch(postDeleteReplyAdmin({ id: [row.id] })).then(() =>
                dispatch(getAllCommentAdmin({ page: page, noitem: noitem }))
              )
            }
          >
            <Button>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // table code start
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      render: (text: any, row: any, index: any) => index + 1,
      // render: (id: any ) => (
      //   <>
      //     {id}
      //   </>
      // )
    },
    {
      title: 'Comment',
      dataIndex: 'contents',
      key: 'contents',
    },

    {
      title: 'Sản phẩm /Combo',
      dataIndex: 'product',
      key: 'product',
      render: (text: any, row: any, index: any) =>
        row.product?.id > 0
          ? row.product?.name
          : row.combo?.id > 0
          ? row.combo?.name
          : null,
    },

    // {
    //   title: "Combo",
    //   dataIndex: "combo",
    //   key: "combo",
    //   render: (text: any, row: any, index: any) =>
    //     row.product?.id > 0 ? null : row.combo?.id > 0 ? row.combo?.name : null,
    // },

    {
      title: 'Tên khách',
      dataIndex: 'namecustomer',
      key: 'namecustomer',
      render: (text: any, row: any, index: any) =>
        row.namecustomer?.length > 0 ? row.namecustomer : 'ADMIN',
    },

    {
      title: 'Số điện thoại',
      dataIndex: 'phonenumbercustomer',
      key: 'phonenumbercustomer',
    },

    {
      title: 'Địa chỉ',
      dataIndex: 'addresscustomer',
      key: 'addresscustomer',
    },

    {
      title: 'Replys',
      dataIndex: 'replys',
      key: 'replys',
      render: (text: any, row: any, index: any) =>
        commentTrees.listComment[index]?.replys?.length > 0 ? (
          <Table
            columns={columns2}
            dataSource={commentTrees.listComment[index].replys}
            pagination={false}
          />
        ) : (
          'Chưa có bình luận'
        ),
    },

    {
      title: 'Hàng động',
      dataIndex: 'action',
      key: 'action',
      render: (text: any, row: any, index: any) => (
        <Space size="middle">
          {!row.id_comment ? (
            <Button
              onClick={() => {
                setVisible(true);

                setIDComment(row.id);
              }}
            >
              Trả lời
            </Button>
          ) : null}

          <Popconfirm
            title="Bạn có chắc muốn xóa không?"
            okText="Có"
            cancelText="Không"
            onConfirm={() =>
              dispatch(postDeleteCommentAdmin({ id: [value.id] })).then(() =>
                dispatch(getAllCommentAdmin({ page: page, noitem: noitem }))
              )
            }
          >
            <Button>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },

    // {
    //   title: "Show",
    //   dataIndex: "show",
    //   key: "show",
    //   render: (show: any) => <>{show ? "Hiện" : "Ẩn"}</>,
    // },
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
            title="Quản lý comment"
            extra={
              <>
                <Popconfirm
                  title="Bạn có chắc muốn xóa không?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(postDeleteCommentAdmin({ id: selectedID })).then(
                      () =>
                        dispatch(
                          getAllCommentAdmin({ page: page, noitem: noitem })
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
                style={{ textAlign: 'center' }}
                columns={columns}
                dataSource={commentTrees.listComment}
                pagination={false}
                className="ant-border-space"
                rowSelection={{
                  ...rowSelection,
                }}
                // expandable={{
                //   expandedRowRender,
                //   defaultExpandedRowKeys: ["0"],
                // }}
                rowKey="id"
                onRow={(record, rowIndex) => {
                  return {
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick: (event) => {}, // click row
                    onDoubleClick: (event) => {
                      //   setVisible(true);
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
                // scroll={{ y: '100%', x: "150%" }}
              />
            </div>
          </Card>
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
                getAllCommentAdmin({
                  page: page,
                  noitem: pageSizeNew ? pageSizeNew : noitem,
                })
              );
              if (pageSizeNew) {
                setNoitem(pageSizeNew);
              }
            }}
            pageSize={noitem}
            current={page}
            total={commentTrees.total}
          />
        </Col>
      </Row>
      {visible && (
        <ModalReplyAdmin
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          toggleFinish={(value) => {
            console.log('toggleFinish', value);
            dispatch(
              postAddReplyAdmin({
                id_comment: idComment,
                contents: value.contents,
              })
            ).then(() =>
              dispatch(getAllCommentAdmin({ page: page, noitem: noitem }))
            );
            setVisible(false);
          }}
        />
      )}
    </div>
  );
}

export default CommentAdmin;
