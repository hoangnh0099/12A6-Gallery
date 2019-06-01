import React, { Component } from 'react';
import './Image.css';

// Component

class Image extends Component {
  render() {
    return (
      <div className="Image" onClick={this.props.showImage}>
        <img src="https://picsum.photos/200/300?random=1" alt="" style={this.props.style} />
      </div>
    );
  }
}

export default Image;
