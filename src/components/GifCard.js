import React from "react";

const GifCard = (props) => {
  const { image, title, link } = props;

  return (
    <div className="card mb-3 ">
      <img
        src={image}
        className="card-img-top"
        alt="{title}"
        // style={{ width: 400 + "px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} className="btn btn-primary">
          Get the gif
        </a>
      </div>
    </div>
  );
};

export default GifCard;
