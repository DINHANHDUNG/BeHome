import React, { useEffect, useState } from "react";
interface PropsVideo {
  link: string;
}
function ComponentVideo(props: PropsVideo) {
  const [linkVideo, setLinkVideo] = useState("");
  useEffect(() => {
    getId(props.link);
  }, [props.link]);

  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    setLinkVideo(match && match[2].length === 11 ? match[2] : "");

    return match && match[2].length === 11 ? match[2] : null;
  }
  return (
    <>
      <hr
        style={{
          marginTop: "10px",
          marginRight: "0px",
          marginBottom: "10px",
          marginLeft: "0px",
        }}
      />

      {props.link ? (
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + linkVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        "Chưa có video"
      )}

      <hr
        style={{
          marginTop: "10px",
          marginRight: "0px",
          marginBottom: "10px",
          marginLeft: "0px",
        }}
      />
    </>
  );
}

export default ComponentVideo;
