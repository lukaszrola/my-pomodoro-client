import React from "react";

const cardImage = props => {
  return <img class="card-img-top" src={props.src} alt={props.alt} />;
};

export default cardImage;
