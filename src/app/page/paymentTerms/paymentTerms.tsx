import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { CustomesCompany } from '../../types/company';
import banner from '../../assets/images/banners/bannerInfo/5.png';
import { Image } from 'antd';
interface typeProps {
  company: CustomesCompany;
}
function PaymentTerms(props: typeProps) {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column justify-content-center mt-3 mb-3">
        {/* <h3 style={{ color: "#ed1b24" }}>QUY ĐỊNH THANH TOÁN</h3> */}
        <Image src={banner} />
      </div>
      <div className="row mb-3">
        <div className="container-fluid">
          {/* <p>{props.company.Company.qdtt}</p> */}
          <TextArea style={{border: 'none'}} autoSize={{minRows: 2, maxRows: 10000}} value={props.company.Company.qdtt}/>
        </div>
      </div>
    </div>
  );
}

export default PaymentTerms;
