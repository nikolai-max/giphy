import React, { Component } from 'react';
import './App.css';
import GifList from './components/giflist.component'

import giphy from 'giphy-api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ids: []
    } 
  }


  componentDidMount() {
    giphy('KI1wl2DyhOo41x2tscGMTti9cT1HeaeB').search({
      q: 'pokemon',
      rating: 'g',
      limit: 10
    })
    .then(res => {
      console.log(res);
      this.setState({ ids: res.data });
      console.log(this.state);
    });
  }

  render() {
    const { ids } = this.state;
    return(
      <div className="app">
        <div className="left-scene">
          <input className="form-search" />
          <div className="selected-gif">
            THE SELECTED GIF HERE
          </div>
        </div>

        <div className="right-scene">
          <GifList ids={ids} />
        </div>
      </div>
    )
  }
}

export default App;
