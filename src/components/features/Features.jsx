import React from 'react';
import "./Features.css";

export default function Features() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/654468.jpg?k=cc25f9bd4d471b24e38add37125b96197c4da3e2760459566cf867e67eb3c285&o=" alt="" />
        <div className="featuredTitles">
          <h1>Tunisia</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/977242.jpg?k=72bfe23a6d7a496e0305b94bbb28ce197f3df2d6dd28986c3760a5f1c931664c&o=" alt="" />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src="https://r-xx.bstatic.com/xdata/images/city/526x420/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o=" alt="" />
        <div className="featuredTitles">
          <h1>Amstrdam</h1>
          <h2>533 properties</h2>
        </div>
      </div>
     
    </div>
  );
}
