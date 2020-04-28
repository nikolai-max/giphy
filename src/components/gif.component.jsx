import React, {Component} from 'react'

class Gif extends Component {
    handleClick = () => {
        const { id, onClick } = this.props
        
        onClick(id)
    }

    render() {
        const { id } = this.props
        const url = `https://media.giphy.com/media/${id}/giphy.gif`
        return (
            <img src={url} alt="Gif from Giphy" className="gif" onClick={this.handleClick} />
        );
    }
}

export default Gif