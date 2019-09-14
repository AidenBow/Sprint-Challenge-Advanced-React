import React, {Component} from "react"

class PlayerCard extends Component {

    render() {
        return (
            <div>
                <p>{this.props.players.name}</p>
            </div>
        )
    }
}

export default PlayerCard