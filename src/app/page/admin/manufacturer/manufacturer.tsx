import {
  Button,
  Card,
  Col,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Typography,
} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  getAllManufacturerAdmin,
  postDeleteManufacturerAdmin,
} from '../../../../features/Admin/manufacturerAdnim';
import { manufacturerAdminStore } from '../../../../use-selector';
import ModalManufacturer from '../../../component/customer/modal/modalManufacturer/modal-Manufacturer';
import { getParsedDate, useAppDispatch, useAppSelector } from '../../../hooks';

function Manufacturer() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const manufacturer = useAppSelector(manufacturerAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [dataTable, setDataTable] = useState([] as any);
  const [value, setValue] = useState({ id: 0, name: '' });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    dispatch(
      getAllManufacturerAdmin({
        id_category: 0,
        page: page,
        noitem: pageSize,
      })
    );
  }, []);

  useEffect(() => {
    const data = [] as any;
    manufacturer.listManufacturer?.map((val) => {
      data.push({
        id: val.manufacturer?.id,
        name: val.manufacturer?.name,
      });
    });

    setDataTable(data);
  }, [manufacturer.listManufacturer]);
  //  {count: 10, {id: 10, name:" abc"}}
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
      title: 'Tên hãng sản xuất',
      dataIndex: 'name',
      key: 'name',
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
            title="Quản lý hãng sản xuất"
            extra={
              <>
                <Button
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    setValue({ id: 0, name: '' });
                    setVisible(true);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Bạn có chắc muốn xóa không？"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(
                      postDeleteManufacturerAdmin({ id: selectedID })
                    ).then(() =>
                      dispatch(
                        getAllManufacturerAdmin({
                          id_category: 0,
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
                dataSource={dataTable}
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

      <Row gutter={[24, 24]}>
        <Col xl={24}>
          <Pagination
            style={{
              marginTop: '10px',
              float: 'right',
              marginBottom: '10px',
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
            total={manufacturer.total}
          />
        </Col>
      </Row>
      {visible && (
        <ModalManufacturer
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

export default Manufacturer;
