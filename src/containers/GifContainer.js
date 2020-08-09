import React from "react";
import GifCard from "../components/GifCard";

const GifContainer = (props) => {
  const { gifs } = props;

  return (
    <div className="row">
      <div className="card-columns">
        {gifs.map((gif, index) => {
          return (
            <GifCard
              key={index}
              image={gif.images.downsized_medium.url}
              title={gif.title}
              link={gif.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GifContainer;
