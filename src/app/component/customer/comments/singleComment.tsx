import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import React, { useState } from 'react';
import './styleComment.css';
import { Input } from 'antd';
import ModalFormComment from '../modal/modalFormCommnet/modalFormCommnet';
import { openNotificationWithIcon, useAppDispatch } from '../../../hooks';
import { Comment, Reply } from '../../../types/comment';
import { postAddReplyAdmin } from '../../../../features/Admin/commentAdnim';
import logo1 from '../../../assets/images/logo/avtzalo.png';

interface propsSingleComment {
  reply?: boolean;
  value: Comment | Reply;
  toggleDone: () => void;
}
const { TextArea } = Input;
function SingleComment(props: propsSingleComment) {
  const dispatch = useAppDispatch();
  const [reply, setReply] = useState(false);
  const [valueReply, setValueReply] = useState('');
  console.log(valueReply, props.value);
  const [visibleRepLyComment, setVisibleRepLyComment] = useState(false);
  return (
    <div className="single-comment">
      <div className="single-comment-info">
        {/* <Avatar icon={<UserOutlined />} className="mr-3" />{" "} */}
        {props.value.namecustomer.length > 0 ? (
          <Avatar
            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            className="mr-3"
          >
            {props.value.namecustomer.charAt(0)}
          </Avatar>
        ) : (
          <Avatar style={{ color: '#f56a00' }} className="mr-3" src={logo1}>
            {/* {props.value.namecustomer.charAt(0)} */}
          </Avatar>
        )}

        <span style={{ fontWeight: 500 }}>
          {props.value.namecustomer ? props.value.namecustomer : 'BeHome Store'}
        </span>
      </div>
      <div className="single-comment-content">{props.value?.contents}</div>
      {props.reply ? (
        <div className="single-comment-reply" onClick={() => setReply(!reply)}>
          Trả lời
        </div>
      ) : null}

      {reply ? (
        <div className="single-comment-content-form">
          <TextArea
            value={valueReply}
            onChange={(e) => setValueReply(e.target.value)}
            className="mt-1"
            rows={4}
          />
          <Button
            className="mt-2"
            onClick={() => {
              if (valueReply.length > 0) {
                setVisibleRepLyComment(!visibleRepLyComment);
              } else {
                openNotificationWithIcon('error', 'Vui lòng nhập bình luận');
              }
            }}
          >
            Gửi bình luận
          </Button>
        </div>
      ) : null}

      <hr
        style={{
          marginTop: '10px',
          marginRight: '0px',
          marginBottom: '10px',
          marginLeft: '0px',
        }}
      />

      <ModalFormComment
        visible={visibleRepLyComment}
        toggle={() => setVisibleRepLyComment(!visibleRepLyComment)}
        toggleValue={(value) => {
          console.log(value, valueReply, props.value.id);
          // postAddReplyAdmin
          dispatch(
            postAddReplyAdmin({
              ...value,
              id_comment: props.value.id,
              contents: valueReply,
            })
          ).then(() => {
            props.toggleDone();
            setValueReply('');
          });
          setReply(!reply);
        }}
      />
    </div>
  );
}

export default SingleComment;
