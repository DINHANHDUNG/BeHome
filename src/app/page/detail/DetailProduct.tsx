import { Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getComboByIdAdmin } from '../../../features/Admin/comboAdnim';
import { postAddCommentByIdAdmin } from '../../../features/Admin/commentAdnim';
import { getProductByIdAdmin } from '../../../features/Admin/productAdnim';
import { addCart } from '../../../features/cart/cart-slice';
import { productAdminStore } from '../../../use-selector';
import BoxComboProduct from '../../component/customer/box-combo-product/box-combo-product';
import BoxPromotion from '../../component/customer/box-promotion/box-promotion';
import SlickCarousel from '../../component/customer/carousel/slideSlick/slickCarouselFirm';
import Comment from '../../component/customer/comment/comment';
import ReplyComment from '../../component/customer/comments/replyComment';
import SingleComment from '../../component/customer/comments/singleComment';
import ModalFormComment from '../../component/customer/modal/modalFormCommnet/modalFormCommnet';
import ModalNextIMG from '../../component/customer/modal/modalNextImg/modalNextIMG';
import {
  currency,
  Numberformat,
  openNotification,
  openNotificationWithIcon,
  useAppDispatch,
  useAppSelector,
} from '../../hooks';
import ComponentInfoDetail from './componentInfoDetail/componentInfoDetail';
import ComponentVideo from './componentVideo/componentVideo';

function DetailProduct() {
  const { ID } = useParams();
  const history = useNavigate();
  const dispatch = useAppDispatch();
  console.log(ID);
  const products = useAppSelector(productAdminStore);
  const [selectProperti, setSelectProperti] = useState(
    null as {
      id: number;
      id_product: number;
      nameproperties: string;
      price: number;
    } | null,
  );

  console.log('products->>>', products);

  useEffect(() => {
    setIMG(products?.listproduct[0]?.images);

    if (products?.listproduct[0]?.images?.length > 0) {
      setDisplayIMG(
        products.listproduct[0].images?.find(
          (x: any) => x.type === '1' || x.type === 'MAIN',
        ),
      );
    }
    // if (products?.listproduct[0]?.productpropertiess?.length > 0) {
    //   setSelectProperti(products.listproduct[0].productpropertiess[0]);
    // }
  }, [products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(getProductByIdAdmin({ id: Number(ID) }));
  }, []);
  const [img, setIMG] = useState([] as any);
  const [dispayIMG, setDisplayIMG] = useState(
    img?.length > 0 ? img[0] : ({} as any),
  );
  const [visible, setVisible] = useState(false);
  const [visibleRepLyComment, setVisibleRepLyComment] = useState(false);
  const [valueComment, setValueComment] = useState('');
  const [showFullSpecifications, setShowFullSpecifications] = useState(false);
  const onChangeShowFull = () => {
    setShowFullSpecifications(!showFullSpecifications);
  };
  return (
    <div className="container-fluid">
      {products?.listproduct[0]?.id ? (
        <div className="product-details-top mb-2 mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="product-gallery">
                <figure className="product-main-image">
                  <img
                    id="product-zoom"
                    src={
                      'http://103.137.184.193:5500/images/' +
                      dispayIMG?.imagename
                    }
                    alt="product image"
                    style={{ height: '400px', objectFit: 'contain' }}
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
                            'http://103.137.184.193:5500/images/' +
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

            <div className="col-md-6">
              <div className="product-details">
                <h1 className="product-title" style={{ fontWeight: '500' }}>
                  {products?.listproduct[0]?.name}
                </h1>

                <div
                  className="product-price"
                  style={{ justifyContent: 'left', fontWeight: '500' }}
                >
                  <span>
                    {selectProperti !== null
                      ? selectProperti?.price !== null
                        ? currency(selectProperti?.price)
                        : 'Liên hệ'
                      : products?.listproduct[0].productpropertiess.length > 0
                      ? sortPrice(products?.listproduct[0].productpropertiess)
                      : products?.listproduct[0]?.price
                      ? currency(products?.listproduct[0]?.price)
                      : 'Liên hệ'}
                  </span>
                  &nbsp;
                  {/* <del style={{ fontSize: "13px", opacity: "0.4" }}>
                    {Numberformat(3000000000)} VNĐ
                  </del>{" "} */}
                </div>

                <div className="container-product-properties mt-2 mb-2">
                  {products.listproduct[0]?.productpropertiess?.map((value) => {
                    return (
                      <div
                        className="product-properties-action "
                        key={value?.id}
                        onClick={() => setSelectProperti(value)}
                      >
                        <a
                          className="btn-properties"
                          style={
                            selectProperti?.id === value.id
                              ? { borderColor: '#258cae', color: '#258cae' }
                              : {}
                          }
                        >
                          <span
                            style={{
                              color:
                                selectProperti?.id === value.id
                                  ? '#258cae'
                                  : '',
                            }}
                          >
                            {value?.nameproperties}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                <div className="product-content mb-3">
                  {/* {products?.listproduct[0]?.productdetails
                    ?.slice(0, 5)
                    .map((val: any) => (
                      <p>
                        ✔ {val?.title}: {val?.specifications}
                      </p>
                    ))} */}

                  {showFullSpecifications
                    ? products?.listproduct[0]?.productdetails?.map(
                        (val: any) => (
                          <p>
                            ✔ {val?.title}: {val?.specifications}
                          </p>
                        ),
                      )
                    : products?.listproduct[0]?.productdetails
                        ?.slice(0, 5)
                        .map((val: any) => (
                          <p>
                            ✔ {val?.title}: {val?.specifications}
                          </p>
                        ))}

                  {products?.listproduct[0]?.productdetails.length > 5 ? (
                    !showFullSpecifications ? (
                      <p
                        onClick={onChangeShowFull}
                        className="HideShowSpecifications"
                      >
                        Xem đầy đủ <i className="fa-solid fa-caret-down"></i>
                      </p>
                    ) : (
                      <p
                        onClick={onChangeShowFull}
                        className="HideShowSpecifications"
                      >
                        Thu gọn{' '}
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                      </p>
                    )
                  ) : null}

                  {/* <p> ✔ RAM: 64GB</p>
                  <p> ✔ Ổ cứng: 1TB SSD</p>
                  <p> ✔ VGA: Nvidia RTX 3080 8G</p>
                  <p> ✔ Màn hình: 16.0 inch WQXGA 165Hz 100%sRGB</p>
                  <p> ✔ HĐH: Win 10</p> */}
                </div>

                <BoxPromotion value={products?.listproduct[0]?.promotion} />

                {/* <BoxComboProduct /> */}

                <div
                  className="product-details-action mt-3"
                  onClick={() => {
                    if (products?.listproduct[0]?.productdetails.length > 0 && selectProperti === null) {
                      return openNotification({
                        message: 'Vui lòng chọn thuộc tính',
                        type: 'warning',
                      });
                    }
                    dispatch(
                      addCart({
                        ...products?.listproduct[0],
                        id_productproperties: selectProperti?.id,
                      }),
                    );
                    history('/cart');
                  }}
                >
                  <a className="btn-product btn-cart">
                    <span>Mua ngay</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ComponentInfoDetail
            productdetails={products?.listproduct[0]?.productdetails}
            describe={products?.listproduct[0]?.describe}
          />
          <div className="row">
            <div className="col-md-12">
              <h4>Video</h4>
              <hr
                style={{
                  marginTop: '10px',
                  marginRight: '0px',
                  marginBottom: '10px',
                  marginLeft: '0px',
                }}
              />
              <div
                style={{
                  width: '100%',
                  // display: "flex",
                  // justifyContent: "center",
                }}
              >
                <ComponentVideo link={products.listproduct[0]?.linkvideo} />
              </div>

              <hr
                style={{
                  marginTop: '10px',
                  marginRight: '0px',
                  marginBottom: '10px',
                  marginLeft: '0px',
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4>Bình luận</h4>
              <hr
                style={{
                  marginTop: '10px',
                  marginRight: '0px',
                  marginBottom: '10px',
                  marginLeft: '0px',
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
                      'error',
                      'Vui lòng nhập bình luận',
                    );
                  }
                }}
              >
                Gửi bình luận
              </Button>
              <div className="col-md-6">
                {products?.listproduct[0]?.comments?.map((val: any) => (
                  <>
                    <SingleComment
                      reply={true}
                      value={val}
                      toggleDone={() =>
                        dispatch(getProductByIdAdmin({ id: Number(ID) }))
                      }
                    />
                    {/* Reply */}
                    {val.replys.map((rep: any) => (
                      <div style={{ marginLeft: '45px' }}>
                        <SingleComment
                          reply={false}
                          value={rep}
                          // eslint-disable-next-line @typescript-eslint/no-empty-function
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
        'Sản phẩm không tồn tại'
      )}

      <ModalNextIMG
        visible={visible}
        listImg={img}
        imgDisplay={dispayIMG}
        toggle={() => setVisible(!visible)}
      />

      <ModalFormComment
        visible={visibleRepLyComment}
        toggleValue={(value) =>
          dispatch(
            postAddCommentByIdAdmin({
              ...value,
              id_product: Number(ID),
              id_combo: null,
              contents: valueComment,
            }),
          ).then(() => {
            dispatch(getProductByIdAdmin({ id: Number(ID) }));
            setValueComment('');
          })
        }
        // value={{ id: 0, replycomment: valueComment }}
        toggle={() => setVisibleRepLyComment(!visibleRepLyComment)}
      />
    </div>
  );
}

export default DetailProduct;

export function sortPrice(arr: any) {
  let array = [] as any;
  array = arr?.slice()?.sort((a: any, b: any) => {
    return Number(a.price) - Number(b.price);
  });
  if (array.length > 1) {
    if (array[0].price === array[array.length - 1].price) {
      return currency(array[0].price);
    }
    return (
      <div className='currency-product'>
        {currency(array[0].price)} -{' '}
        {currency(array[array.length - 1].price)}
      </div>
    );
  }
  if (array.length === 1) {
    return array[0].price ? currency(array[0].price) : 'Liên hệ';
  }
  return 'Liên hệ';
}
