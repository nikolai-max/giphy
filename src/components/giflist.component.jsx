import React, {Component} from 'react'

class GifList extends Component {
    handleClick = (key) => {
        const { onSelect } = this.props;
        onSelect(key);
    }

    render() {
        // console.log(this.props.selectedID)
        const ids = this.props.ids;
        return (
            <div className="gif-list">
            {
                ids.map(id => 
                <img key={id} src={`https://media2.giphy.com/media/${id}/200w.webp`} onClick={this.handleClick} alt="Gif from Giphy" className="gif" />
            )}}
            </div>
        );
        }
}

export default GifList