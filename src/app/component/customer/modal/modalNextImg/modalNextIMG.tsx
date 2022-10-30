import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
interface propsModalNextIMG {
  visible: boolean;
  toggle: () => void;
  listImg: Array<any>;
  imgDisplay: any;
}
function ModalNextIMG(props: propsModalNextIMG) {
  console.log(props);

  const [IMGDISPLAY, setIMGDISPLAY] = useState({} as any);

  useEffect(() => {
    setIMGDISPLAY(props.imgDisplay);
  }, [props.imgDisplay, props.listImg, props.visible]);

  function nextImg(id: any) {
    if (
      props.listImg.findIndex((value: any) => value.id === id) >=
      props.listImg.length - 1
    ) {
      setIMGDISPLAY(props.listImg[0]);
    } else {
      setIMGDISPLAY(
        props.listImg[
          props.listImg.findIndex((value: any) => value.id === id) + 1
        ]
      );
    }
  }

  function preImg(id: any) {
    if (props.listImg.findIndex((value: any) => value.id === id) <= 0) {
      setIMGDISPLAY(props.listImg[props.listImg.length - 1]);
    } else {
      setIMGDISPLAY(
        props.listImg[
          props.listImg.findIndex((value: any) => value.id === id) - 1
        ]
      );
    }
  }

  return (
    <Modal
      title={''}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      width={1000}
      footer={null}
    >
      <div
        className="row mt-3"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LeftOutlined
          style={{ marginRight: '10px', cursor: 'pointer', fontSize: '32px' }}
          onClick={() => preImg(IMGDISPLAY.id)}
        />
        {/* <p
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => preImg(IMGDISPLAY.id)}
        >
          pre
        </p> */}
        <img
          style={{ width: '800px' , maxHeight: '500px', objectFit: 'contain'}}
          src={'http://103.137.184.193:5500/images/' + IMGDISPLAY?.imagename}
          alt=""
        />
        {/* <p
          style={{ marginLeft: "10px", cursor: "pointer" }}
          onClick={() => nextImg(IMGDISPLAY.id)}
        >
          next
        </p> */}
        <RightOutlined
          style={{ marginLeft: '10px', cursor: 'pointer', fontSize: '32px' }}
          onClick={() => nextImg(IMGDISPLAY.id)}
        />
      </div>
    </Modal>
  );
}

export default ModalNextIMG;
