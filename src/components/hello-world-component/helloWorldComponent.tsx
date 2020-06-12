import React from 'react';
import { ImageComponent } from '../image-component/imageComponent';

const classes = require('./HelloWorldComponentStyles');


export const HelloWorldComponent = () => {
  return (
    <div className={classes.alignCenter}>
      <h4>This app is running in
        <span className={classes.primaryColor}> {process.env.NODE_ENV} </span>
        <span>mode</span>
      </h4>
      <h1> Hello World with Webpack and React</h1>
      <div>
        <ImageComponent />
      </div>
    </div>
  )
}

