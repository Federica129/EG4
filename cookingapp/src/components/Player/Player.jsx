import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

function Player() {
  const data = useOutletContext();
  const { youtubeUrl } = data;
  const idYT = youtubeUrl.split("?v=")[1];

  return (
    <div className={styles.Player}>
      <iframe
        width="600"
        height="350"
        src={`https://www.youtube.com/embed/${idYT}`}
        frameBorder="0"
        allowfullscreenallow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
}

export default Player;
