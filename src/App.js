import React, { Component } from 'react';
import './App.css';
import song from './modals/TamBietNhe.mp3';
 
// Component
import Header from './components/Header/Header';
import Image from './components/Image/Image';

const modalImageStyle = {
  position: "fixed",
  width: "100%",
  height: "100vh",
  background: "rgb(0, 0, 0, 0.75)",
  top: "0px",
  bottom: "0px",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const imageStyle = {
  width: "150%"
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      isMute: false,
      play: true,
      isOpen: false
    }
    this.audio = new Audio(song);
    // this.audio.autoplay = true;
  }

  showImage = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  togglePlay = () => {
    this.setState({ 
      isMute: !this.state.isMute 
    }, () => {
      if (this.state.isMute) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    });
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let modalImage = (
      <div style={modalImageStyle}>
        <Image style={imageStyle} />
        <button onClick={this.onClose} className="close-button">Close</button>
      </div>
    )

    if (!this.state.isOpen) {
      modalImage = null;
    }

    console.log(modalImage);

    return (
      <div className="App">
        <Header />

        <div className="image-area">
          <Image showImage={this.showImage} />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
        
        <a className="back-to-top" href="#"><i className="fas fa-chevron-up"></i></a>
        <button onClick={this.togglePlay} className="button-stop">{this.state.isMute ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}</button>

        {modalImage}

        <footer>
          <p>Món quà kỷ niệm anh em</p>
          <div className="copyright">
            <p>Copyright &copy; 2019 Nguyễn Huy Hoàng</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
