import React, {Component} from 'react'
import Gif from './gif.component'

class GifList extends Component {
    handleClick = (id) => {
        const { onSelect } = this.props;
        onSelect(id);
      }

    render() {
        const ids = this.props.ids;
        return (
            <div className="gif-list">
            {ids.map(id => {
                return <Gif key={id} id={id} onClick={this.handleClick} />
              })}
            </div>
        );
        }
}

export default GifList