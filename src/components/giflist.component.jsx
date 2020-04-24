import React, {Component} from 'react'

class GifList extends Component {
    render() {
        const { ids } = this.props.ids;
        return (
            <div className="gif-list">
            
                ids.map(id => 
                <img src={`https://media2.giphy.com/media/${id}/200w.webp`} alt="Gif from Giphy" className="gif" />
                
            )}
            </div>
        );
        }
}

export default GifList