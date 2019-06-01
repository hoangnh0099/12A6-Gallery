import React, { Component } from 'react';
import './Image.css';

// Component

class Image extends Component {
  render() {
    return (
      <div className="Image">
        <img src="https://picsum.photos/200/300?random=1" alt="" />
      </div>
    );
  }
}

export default Image;
