import React, { Component } from 'react';
import './App.css';
import song from './modals/TamBietNhe.mp3';
import data from './modals/data.json';

// Component
import Header from './components/Header/Header';
import Image from './components/Image/Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMute: false,
      play: true,
      isOpen: false
    }
    this.audio = new Audio(song);
    this.audio.autoplay = true;
    this.audio.loop = true;
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

  render() {

    let imageRender = (
      data.image.map((image, index) => {
        return (
          <div key={index}>
            <Image source={image.source} />
          </div>
        )
      })
    )

    return (
      <div className="App">
        <Header />

        <div className="image-area">
          {imageRender}
        </div>

        <a className="back-to-top" href="#"><i className="fas fa-chevron-up"></i></a>
        <button onClick={this.togglePlay} className="button-stop">{this.state.isMute ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}</button>

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
