import VideoCard from "../components/VideoCard";
import styles from "../styles/courseVideo.module.css";

const CourseVideo = (props) => {
  const comments = [{ text: "Hello This is a comment", author: "User123" }];
  const videos = [{ description: "This is another video" }];

  return (
    <div className={styles.courseVideo}>
      <div className={styles.container}>
        <div className={styles.video}>
          <iframe
            title="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9xwazD5SyVg"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className={styles.commentSection}>
          <h2>Comments</h2>
          {comments.map((comment) => {
            return (
              <div className={styles.comment}>
                <span>{comment.author}</span>
                <p>{comment.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.playlist}>
        {videos.map((video) => {
          return (
            <VideoCard>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAALVBMVEX09PTMzMz4+PjJycnT09Pc3Nzg4ODr6+vl5eXu7u7x8fHQ0NDZ2dnW1tbo6Oj6GjOpAAABdUlEQVR4nO3YW46EIBBAUQVbBGz3v9xBHJ8hysdQOMk9G+ibEpSmaQAAAAAAAAAAAADg31D5JHLs55urt8Vr1KR1m0vrqfSIbPyZTG3rXeGeIfxInyukT4V7et12uc9Ada0eitbE+aw9j1miPcpOxt0nSfZYP2+g+18T7LFt3PW6v5uQXI/6/r6E9N1+FuzZ3onDaUDqlCfX47ae/hRgTg+w+nyMPq0owZ4xsX6UuSxxwf3l/LK/DuNRdmncgyTfP66bv5fTMWf7qq9Bsu/nxtiwsLccsx9D1iDh79fRsnYuQfV6jtOJQR9Vpce4ZM48oQo9YQnH89/5Ye0Tkj7/mPCN93bb6Jcg6fksG1z7xiZq5Hu2NeOTOdI9qTVTsyf9kKr1PE1HuucxR7bHPf9npudVPc9k99ezquefJImeeL+RS6BnCkt1/OQZBe5/nH/X/Vg4ZWTnhCBb/IpVuX7MNZS/X41Jr7p/BgAAAAAAAAAAAIC/8QMddxQTiqvyCwAAAABJRU5ErkJggg=="
                alt="abc"
              ></img>
              <div>{video.description}</div>
            </VideoCard>
          );
        })}
      </div>
    </div>
  );
};

export default CourseVideo;
