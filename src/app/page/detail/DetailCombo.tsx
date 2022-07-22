import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getComboByIdAdmin } from "../../../features/Admin/comboAdnim";
import { postAddCommentByIdAdmin } from "../../../features/Admin/commentAdnim";
import { getProductByIdAdmin } from "../../../features/Admin/productAdnim";
import { addCart } from "../../../features/cart/cart-slice";
import { comboAdminStore, productAdminStore } from "../../../use-selector";
import BoxComboProduct from "../../component/customer/box-combo-product/box-combo-product";
import BoxPromotion from "../../component/customer/box-promotion/box-promotion";
import SlickCarousel from "../../component/customer/carousel/slideSlick/slickCarouselFirm";
import Comment from "../../component/customer/comment/comment";
import ReplyComment from "../../component/customer/comments/replyComment";
import SingleComment from "../../component/customer/comments/singleComment";
import ModalFormComment from "../../component/customer/modal/modalFormCommnet/modalFormCommnet";
import ModalNextIMG from "../../component/customer/modal/modalNextImg/modalNextIMG";
import {
  currency,
  Numberformat,
  openNotificationWithIcon,
  useAppDispatch,
  useAppSelector,
} from "../../hooks";
import ComponentInfoDetail from "./componentInfoDetail/componentInfoDetail";
import ComponentVideo from "./componentVideo/componentVideo";

function DetailCombo() {
  const { ID } = useParams();
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const combo = useAppSelector(comboAdminStore);

  console.log(combo);

  useEffect(() => {
    // dispatch(getProductByIdAdmin({ id: Number(ID) }));
    dispatch(getComboByIdAdmin({ id: Number(ID) }));
  }, []);

  useEffect(() => {
    setIMG(combo?.listCombo[0]?.images);
    if (combo?.listCombo[0]?.images?.length > 0) {
      setDisplayIMG(combo?.listCombo[0]?.images[0]);
    }
    var newtotal = 0;
    combo.listCombo[0]?.combo_products?.map((val) => {
      newtotal = newtotal + (val.product.price * val.amountproduct);
    });

    setTotal(newtotal);
  }, [combo]);
  const [img, setIMG] = useState([] as any);
  const [dispayIMG, setDisplayIMG] = useState(
    img?.length > 0 ? img[0] : ({} as any)
  );
  const [visible, setVisible] = useState(false);
  const [visibleRepLyComment, setVisibleRepLyComment] = useState(false);
  const [valueComment, setValueComment] = useState("");
  const [total, setTotal] = useState(0);

  return (
    <div className="container-fluid">
      {combo?.listCombo[0]?.id ? (
        <div className="product-details-top mb-2 mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="product-gallery">
                <figure className="product-main-image">
                  <img
                    id="product-zoom"
                    src={
                      "http://103.173.155.138:5500/images/" +
                      dispayIMG?.imagename
                    }
                    alt="product image"
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />

                  <a
                    id="btn-product-gallery"
                    className="btn-product-gallery"
                    onClick={() => setVisible(true)}
                  >
                    <i className="icon-arrows"></i>
                  </a>
                </figure>

                {/*thêm className active thêm viền xanh */}

                {/* <div
                  id="product-zoom-gallery"
                  className="product-image-gallery"
                > */}
                  {img?.length > 4 ? (
                    <SlickCarousel
                      value={img}
                      toggle={(value: any) => setDisplayIMG(value)}
                    />
                  ) : (
                    <div
                      id="product-zoom-gallery"
                      className="product-image-gallery"
                    >
                      {img?.map((value: any) => (
                        <a
                          key={value.id}
                          className="product-gallery-item active"
                          onClick={() => setDisplayIMG(value)}
                        >
                          <img
                            src={
                              "http://103.173.155.138:5500/images/" +
                              value?.imagename
                            }
                            alt="product side"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            {/* </div> */}

            <div className="col-md-6">
              <div className="product-details">
                <h1 className="product-title" style={{ fontWeight: "500" }}>
                  {combo.listCombo[0]?.name}
                </h1>

                <div
                  className="product-price"
                  style={{ justifyContent: "left", fontWeight: "500" }}
                >
                  <span>
                    {combo.listCombo[0]?.price
                      ? currency(combo.listCombo[0]?.price)
                      : "Liên hệ"}
                  </span>
                  &nbsp;
                  {combo.listCombo[0]?.price ? (
                    <del
                      style={{
                        fontSize: "15px",
                        opacity: "0.8",
                        color: "black",
                      }}
                      className="ml-2"
                    >
                      {currency(total)}
                    </del>
                  ) : null}
                  &nbsp;
                  {combo.listCombo[0]?.price ? (
                    <span
                      style={{
                        fontSize: "15px",
                        opacity: "0.8",
                        color: "#d30808f7",
                      }}
                      className="ml-2"
                    >
                      tiết kiệm: {currency(total - combo.listCombo[0]?.price)}
                    </span>
                  ) : null}
                </div>

                <div className="product-content mb-3">
                  <p> ✔ Mô tả: {combo.listCombo[0]?.describe}</p>
                  {/* <p> ✔ RAM: 64GB</p>
                <p> ✔ Ổ cứng: 1TB SSD</p>
                <p> ✔ VGA: Nvidia RTX 3080 8G</p>
                <p> ✔ Màn hình: 16.0 inch WQXGA 165Hz 100%sRGB</p>
                <p> ✔ HĐH: Win 10</p> */}
                </div>

                {/* <BoxPromotion /> */}

                <BoxComboProduct combo={combo.listCombo[0]} />

                <div
                  className="product-details-action mt-3"
                  onClick={() => {
                    dispatch(addCart(combo.listCombo[0]));
                    history("/cart");
                  }}
                >
                  <a className="btn-product btn-cart">
                    <span>Mua ngay</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4>Video</h4>
              <hr
                style={{
                  marginTop: "10px",
                  marginRight: "0px",
                  marginBottom: "10px",
                  marginLeft: "0px",
                }}
              />
              <div
                style={{
                  width: "100%",
                  // display: "flex",
                  // justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <ComponentVideo link={combo.listCombo[0]?.linkvideo} />
              </div>

              <hr
                style={{
                  marginTop: "10px",
                  marginRight: "0px",
                  marginBottom: "10px",
                  marginLeft: "0px",
                }}
              />
            </div>
          </div>

          {/* <ComponentInfoDetail /> */}

          <div className="row">
            <div className="col-md-12">
              <h4>Bình luận</h4>
              <hr
                style={{
                  marginTop: "10px",
                  marginRight: "0px",
                  marginBottom: "10px",
                  marginLeft: "0px",
                }}
              />
              <TextArea
                value={valueComment}
                onChange={(e) => {
                  setValueComment(e.target.value);
                }}
                className="mt-1"
                rows={4}
              />
              <Button
                className="mt-2 mb-2"
                onClick={() => {
                  if (valueComment.length > 0) {
                    setVisibleRepLyComment(!visibleRepLyComment);
                  } else {
                    openNotificationWithIcon(
                      "error",
                      "Vui lòng nhập bình luận"
                    );
                  }
                }}
              >
                Gửi bình luận
              </Button>
              <div className="col-md-6">
                {combo?.listCombo[0]?.comments?.map((val) => (
                  <>
                    <SingleComment
                      reply={true}
                      value={val}
                      toggleDone={() =>
                        dispatch(getComboByIdAdmin({ id: Number(ID) }))
                      }
                    />
                    {/* Reply */}
                    {val.replys.map((rep) => (
                      <div style={{ marginLeft: "45px" }}>
                        <SingleComment
                          reply={false}
                          value={rep}
                          toggleDone={() => {}}
                        />
                      </div>
                    ))}

                    {/* <ReplyComment /> */}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Sản phẩm không tồn tại"
      )}

      <ModalNextIMG
        visible={visible}
        listImg={img}
        imgDisplay={dispayIMG}
        toggle={() => setVisible(!visible)}
      />

      <ModalFormComment
        visible={visibleRepLyComment}
        // value={{ id: 0, replycomment: valueComment }}
        toggle={() => setVisibleRepLyComment(!visibleRepLyComment)}
        toggleValue={(val) => {
          dispatch(
            postAddCommentByIdAdmin({
              ...val,
              id_product: null,
              id_combo: Number(ID),
              contents: valueComment,
            })
          ).then(() => {
            dispatch(getComboByIdAdmin({ id: Number(ID) }));
            setValueComment("");
          });
        }}
      />
    </div>
  );
}

export default DetailCombo;
