import React, { Component } from 'react';
import './App.css';
import GifList from './components/giflist.component'
import {DebounceInput} from 'react-debounce-input';

import giphy from 'giphy-api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ids: [],
      selectedUrl: 'https://media2.giphy.com/media/tOWyML1WPzKjm/200w.webp',
    } 
  }

  onGifSelect = (id) => {
    this.setState({ selectedUrl: id.target.src });
  }

  onChange = (e) => {
    giphy('KI1wl2DyhOo41x2tscGMTti9cT1HeaeB').search({
      q: e.target.value,
      rating: 'g',
      limit: 10
    })
    .then(res => {
      this.setState({ ids: res.data.map(gif => gif.id)
      });
      console.log(this.state.ids);
    });
  }

  render() {
    return(

// Make the selected search work
// 1. Make an on click function on the gi component
// 2. Make another state that have the selected gif
// 3. This click changes the state of the selected one

      <div className="app">
        <div className="left-scene">
        <DebounceInput
          className="form-search"
          minLength={3}
          debounceTimeout={300}
          onChange={this.onChange} />
          <div className="selected-gif">
            <img src={this.state.selectedUrl} alt="Gif from Giphy" className="gif" />
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
