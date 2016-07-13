import React from 'react';

class Footer extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            name: "John Smith"
        };
    }

    render(){
        return <div> From {this.this.state.name} </div>;
    }
}

export default Footer;