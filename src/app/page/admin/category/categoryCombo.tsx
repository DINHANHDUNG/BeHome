import {
  Button,
  Card,
  Col,
  Popconfirm,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  getAllCategoryTrees,
  postDeleteCategoryAdmin,
} from "../../../../features/Admin/categoryAdnim";
import { categoryAdminStore } from "../../../../use-selector";
import ModalCategory from "../../../component/customer/modal/Category/modal-category";
import ModalCategory2 from "../../../component/customer/modal/Category/modal-category2";
import { useAppDispatch, useAppSelector } from "../../../hooks";

function CategoryCombo() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const categorytrees = useAppSelector(categoryAdminStore);


  const [listCategory, setListCategory] = useState(
    () => categorytrees.listcategoryCombo
  );
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState({
    id: 0,
    id_parent: 0,
    name: "",
  });

  useEffect(() => {
    dispatch(getAllCategoryTrees());
  }, []);

  // table code start
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
      // render: (id: any ) => (
      //   <>
      //     {id}
      //   </>
      // )
    },

    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            onClick={() => {
              setVisible2(true);
            }}
          >
            Thêm
          </Button>

          <Popconfirm
            title="Xóa danh mục sẽ xóa hết sản phẩm trong danh mục đó, bạn có chắc muốn xóa không？"
            okText="Có"
            cancelText="Không"
            onConfirm={() =>
              dispatch(postDeleteCategoryAdmin({ id: [value.id] })).then(() =>
                dispatch(getAllCategoryTrees())
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
            title="Quản lý danh mục combo"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({
                      id: 0,
                      id_parent: 0,
                      name: "",
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
                    dispatch(postDeleteCategoryAdmin({ id: selectedID })).then(
                      () => dispatch(getAllCategoryTrees())
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
                dataSource={categorytrees.listcategoryCombo}
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
          </Card>
        </Col>
      </Row>
      {visible && (
        <ModalCategory
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={{ ...value, type: "COMBO" }}
        />
      )}

      {visible2 && (
        <ModalCategory2
          visible={visible2}
          toggle={() => {
            setVisible2(false);
          }}
          value={{ ...value, type: "COMBO" }}
        />
      )}
    </div>
  );
}

export default CategoryCombo;
