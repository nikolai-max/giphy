import React, { Component } from 'react';
import './App.css';
import GifList from './components/giflist.component'
import Gif from './components/gif.component'
import Search from './components/search.component'

import giphy from 'giphy-api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ids: [],
      selectedId: 'tOWyML1WPzKjm',
    } 
  }

  onGifSelect = (id) => {
    this.setState({ selectedId: id });
  }

  onChange = (event) => {
    const { value } = event.target
    giphy('KI1wl2DyhOo41x2tscGMTti9cT1HeaeB').search({
      q: {value},
      rating: 'g',
      limit: 10
    })
    .then(res => {
      this.setState({ ids: res.data.map(gif => gif.id)
      });
    });
  }

  render() {
    return(
      <div className="app">
        <div className="left-scene">
        <Search onChange={this.onChange}></Search>
          <div className="selected-gif">
            <Gif id={this.state.selectedId}></Gif>
          </div>
        </div>

        <div className="right-scene">
          <GifList ids={this.state.ids} onSelect={this.onGifSelect} />
        </div>
      </div>
    )
  }
}

export default App;
