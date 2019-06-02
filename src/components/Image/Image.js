import React, { Component } from 'react';
import './Image.css';

// Component

class Image extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  showImage = () => {
    // alert("Chức năng sắp ra mắt");
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let modalImage = (
      <div className="modal-image">
        <img src={this.props.source} alt="" className="image-detail" />
        <button onClick={this.onClose} className="close-button">x</button>
      </div>
    )

    if (!this.state.isOpen) {
      modalImage = null;
    }

    return (
      <div className="Image" onClick={this.showImage}>
        <img src={this.props.source} alt="" />

        {modalImage}
      </div >
    );
  }
}

export default Image;
