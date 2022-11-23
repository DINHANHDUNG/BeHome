import React from 'react';
import { CustomesCompany } from '../../types/company';
interface typeProps {
  company: CustomesCompany;
}
function Contact(props: typeProps) {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-3 mb-3">
        <h3 style={{ color: '#333333' }}>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <div className="container-fluid">
          <h3 style={{ color: '#333333' }}>
            Công ty TNHH thương mại và dịch Behome
          </h3>
          <i style={{ color: '#365f91', fontSize: '30px', fontWeight: '500' }}>
            Showroom BeHome{' '}
          </i>
          <p className="mb-2 mt-1">
            <span style={{ fontWeight: 600 }}>Địa chỉ</span>:{' '}
            {props.company.Company.address}
          </p>
          <p className="mb-2">
            <span style={{ fontWeight: 600 }}>Email</span>:{' '}
            <a
              style={{ textDecoration: 'underline', color: '#0080ed' }}
              href={'mailto:' + props.company.Company.email}
            >
              {props.company.Company.email}
            </a>
          </p>
          <p className="mb-2">
            <span style={{ fontWeight: 600 }}>Số điện thoại</span>:{' '}
            <a href={'tel:' + props.company.Company.phonenumber}>{props.company.Company.phonenumber}</a>
          </p>
          <p className="mb-2">
            <span style={{ fontWeight: 600 }}>Giờ mở cửa</span>: Giờ mở cửa
            :7h00-18h00 Từ: T2-CN
          </p>

          <h3 style={{ color: '#333333' }}>Hợp tác cùng Behome</h3>

          <p style={{fontSize: '18px'}}>
            Nếu bạn quan tâm đến các cơ hội hợp tác tại Behome, vui lòng gửi
            email cho chúng tôi:{' '}
            <a
              style={{ textDecoration: 'underline', color: 'orange', fontWeight: '400' }}
              href={'mailto:' + props.company.Company.email}
            >
              business.behome@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
