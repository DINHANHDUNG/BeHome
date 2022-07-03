import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React, { useState } from "react";
import "./styleComment.css";
import { Input } from "antd";
import ModalFormComment from "../modal/modalFormCommnet/modalFormCommnet";
import { openNotificationWithIcon } from "../../../hooks";
interface propsSingleComment {
  reply?: boolean;
}
const { TextArea } = Input;
function SingleComment(props: propsSingleComment) {
  const [reply, setReply] = useState(false);
  const [valueReply, setValueReply] = useState("");
  console.log(valueReply);
  const [visibleRepLyComment, setVisibleRepLyComment] = useState(false);
  return (
    <div className="single-comment">
      <div className="single-comment-info">
        {/* <Avatar icon={<UserOutlined />} className="mr-3" />{" "} */}
        <Avatar
          style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          className="mr-3"
        >
          U
        </Avatar>
        <span style={{ fontWeight: 500 }}>Đinh Anh Dũng</span>
      </div>
      <div className="single-comment-content">Đây là test cái bình luận</div>
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
                openNotificationWithIcon("error", "Vui lòng nhập bình luận");
              }
            }}
          >
            Gửi bình luận
          </Button>
        </div>
      ) : null}

      <hr
        style={{
          marginTop: "10px",
          marginRight: "0px",
          marginBottom: "10px",
          marginLeft: "0px",
        }}
      />

      <ModalFormComment
        visible={visibleRepLyComment}
        value={{ id: 0, replycomment: valueReply }}
        toggle={() => setVisibleRepLyComment(!visibleRepLyComment)}
      />
    </div>
  );
}

export default SingleComment;
