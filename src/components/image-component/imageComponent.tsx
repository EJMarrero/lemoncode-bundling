import React from "react"

const classes = require('./ImageComponentStyles');
const lemoncodeLogo = require('../../assets/images/lemoncode.png');

export const ImageComponent = (() => {
  return (
    <div> 
      <img className={classes.customDimenssions}
        src={lemoncodeLogo.default}>
      </img>
    </div>
  );
})