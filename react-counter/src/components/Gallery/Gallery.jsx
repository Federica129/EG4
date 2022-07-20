import "./index.css";
import photo from "../../assets/linksphoto";

const Gallery = () => {
  return (
    <div className="box">
      <div className="gallery">
        {photo.map((photo) => (
          <img src={photo.link} alt="ok" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
