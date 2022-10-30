import { Image } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { CustomesCompany } from '../../types/company';
import banner from '../../assets/images/banners/bannerInfo/2.png';
interface typeProps {
  company: CustomesCompany;
}
function WarrantyPolicy(props: typeProps) {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-3 mb-3">
        {/* <h3 style={{ color: "#ed1b24" }}>CHÍNH SÁCH BẢO HÀNH</h3> */}
        <Image src={banner} />
      </div>
      <div className="row mb-3">
        <div className="container-fluid">
          {/* <p>{props.company.Company.qdtt}</p> */}
          <TextArea style={{border: 'none'}} autoSize={{minRows: 2, maxRows: 10000}} value={props.company.Company.csbh}/>
        </div>
      </div>
    </div>
  );
}

export default WarrantyPolicy;
