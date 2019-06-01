import React, { Component } from 'react';
import './App.css';
import song from './modals/TamBietNhe.mp3';
 
// Component
import Header from './components/Header/Header';
import Image from './components/Image/Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMute: false,
      play: true,
    }
    this.audio = new Audio(song);
    this.audio.autoplay = true;
  }

  showImage = () => {
    alert("Hello");
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
    return (
      <div className="App">
        <Header />

        <div className="image-area">
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
          <Image />
        </div>
        
        <a className="back-to-top" href="#"><i className="fas fa-chevron-up"></i></a>
        <button onClick={this.togglePlay} className="button-stop">{this.state.isMute ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>}</button>

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
