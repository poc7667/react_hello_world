import React from 'react';

class Footer extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            name: "John Smith"
        };
    }

    render(){
        return <div onClick={()=>{
            const name = (this.state.name === 'John Smith'? 'A' : 'B');
            this.setState({name: name});
        }}> From {this.state.name} </div>;
    }
}

export default Footer;