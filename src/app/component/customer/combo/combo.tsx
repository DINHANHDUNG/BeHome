import React from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../../../../features/cart/cart-slice';
import {
  currency,
  Numberformat,
  openNotification,
  success,
  useAppDispatch,
} from '../../../hooks';
import { Combo } from '../../../types/combo';
import { Product as Product2 } from '../../../types/product';
interface propsProduct {
  value: Product2 | Combo;
}
function Product(props: propsProduct) {
  console.log('props', props.value);
  const dispatch = useAppDispatch();
  return (
    <div className="product">
      <figure className="product-media">
        <Link
          to={
            props.value.category.type === 'PRODUCT'
              ? '/detailproduct/' + props.value.id
              : '/detailcombo/' + props.value.id
          }
        >
          {props.value?.images ? (
            <img
              src={
                'http://103.137.184.193:5500/images/' +
                props.value?.images?.find(
                  (x: any) => x.type === '1' || x.type === 'MAIN'
                )?.imagename
              }
              alt="Product image"
              className="product-image"
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              alt="Product image"
              className="product-image"
            />
          )}
        </Link>

        <div className="product-action">
          <Link
            onClick={() => {
              openNotification({
                message: 'Đã thêm vào giỏ hàng',
                type: 'success',
              });
              dispatch(addCart(props.value));
            }}
            to={'#'}
            className="btn-product btn-cart"
            title="Add to cart"
          >
            <span>Thêm vào giỏ hàng</span>
          </Link>
        </div>
      </figure>

      <div className="product-body">
        {/* <div className="product-cat">
          <a href="#">{props.value.name}</a>
        </div> */}
        <h3 className="product-title"style={{fontWeight: '500'}}>
          <Link
            to={
              props.value.category.type === 'PRODUCT'
                ? '/detailproduct/' + props.value.id
                : '/detailcombo/' + props.value.id
            }
          >
            {props.value.name?.toUpperCase()}
          </Link>
        </h3> 
        <div className="product-price" style={{fontWeight: '500'}}>
          {props.value.price ? currency(props.value.price) : 'Liên hệ'}
        </div>
      </div>
    </div>
  );
}

export default Product;
