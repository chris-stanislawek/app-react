import React from "react";

const Search = (props) => {
  const { getGif } = props;

  const handlerEvent = (event) => {
    console.log("event:", event.target.value);
    getGif(event.target.value);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search a gif"
          aria-label="Search a gif"
          aria-describedby="button-addon2"
          onChange={handlerEvent}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search Gifs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
