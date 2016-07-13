import React from 'react';

class Name extends React.Component{
    render(){
        let name = "Poc!!!";
        return  <h3 onClick={this.props.clickCallBack}>it's me,{name}{this.props.alias} </h3>;
    }
}

export default Name;