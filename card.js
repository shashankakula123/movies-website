import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"shashank",
                       loader:true,
                     }
    }
    render() { 

        let {name,loader}=this.state
        return (
<div>
           
          <h1>{name}</h1>

            {/* <button onClick={
                this.setState({loader:false}) }>click me</button> */}
        
</div>
          );
    }
}
 
export default Card;