import React, {Component} from 'react'

class GifList extends Component {
    handleClick = (id) => {
        const { onSelect } = this.props;
        onSelect(id);
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