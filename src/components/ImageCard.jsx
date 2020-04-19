import React from "react";
import { useSelector } from "react-redux";
const ImageCard = () => {
  const { images } = useSelector((state) => state);
  console.log("images", images);
  return (
    <div className="row">
      {images.map((image) => (
        <div className="col-md-3 mt-3" key={image.id}>
          <div className="card">
            <img
              src={image.url}
              alt={image.title}
              className="card-image-top img-fluid"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
