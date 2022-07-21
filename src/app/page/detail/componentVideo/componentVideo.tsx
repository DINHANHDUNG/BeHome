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
    <div style={{ maxWidth: "60%", margin: "0 auto" }}>
      

      {props.link ? (
        <iframe
          width="100%"
          height="589"
          src={"https://www.youtube.com/embed/" + linkVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        "Chưa có video"
      )}

      
    </div>
  );
}

export default ComponentVideo;
