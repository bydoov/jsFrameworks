import React from "react";

const Beer = ({image_url,abv,name,description}) => (
<div className="beer">
    <img src={image_url}  />
    <div className="beer-info"> 
    <h1>{name}</h1>
    <span>{abv}</span>
    </div>

    <div className="beer-desc"> 
    <h2>Description</h2>
    <span>{description}</span>
    </div>
</div>
);

export default Beer;