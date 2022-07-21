import { useState } from "react";
import ImageCard from "../ImageCard";
import galleryMock from "../../assets/galleryMock";
import Modal from "../Modal";
import "./index.css";

const Gallery = ({ visibility }) => {
  console.log("visibility", visibility);
  const [isModalVisibile, setModalVisibility] = useState(false);
  let [value, setValue] = useState();
  return (
    <div className="Gallery">
      {visibility ? (
        <>
          <h2 className="Gallery__header">Gallery</h2>
          <div className="Gallery__content">
            {galleryMock.map((image) => (
              <ImageCard
                key={image.id}
                data={image}
                onClickDiPippo={() => {
                  setModalVisibility(true);
                  setValue(image.url);
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <h2>Nascosto!!!</h2>
      )}
      <Modal
        pippo={value}
        onHandleClick={() => setModalVisibility(false)}
        visib={isModalVisibile}
      />
    </div>
  );
};

export default Gallery;
