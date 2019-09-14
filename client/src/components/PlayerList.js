import React, {Component} from "react"
import PlayerCard from "./PlayerCard"

class PlayerList extends Component {
    constructor(){
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount() {       
        fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(res => {
            this.setState( {players: res } )
            console.log(this.state.players)
        })
        .catch(err => err)
       
    }

    render() {
        return(
            <div>
                {this.state.players.map(players => {
                    return <PlayerCard key={players.id} players={players} />
                })}
            </div>
        )
    }
}

export default PlayerList