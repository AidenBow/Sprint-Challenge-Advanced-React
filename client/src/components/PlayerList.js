import React, {Component} from "react"

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
                
            </div>
        )
    }
}

export default PlayerList