import React from 'react';
import Name from './name.jsx';
import Footer from './footer.jsx';


class Hello extends React.Component{
    constructor(){
        super();
        this.state = {
            alias: 'Standford'
        }
        this.clickCallBack = this.clickCallBack.bind(this);
    }
    clickCallBack(){
        this.setState({
            alias: "YOYOYO"
        })
    }
    render(){
        const name = "VIDEO INPUT";
        return (<div>
                HI THERE<Name alias={this.state.alias} 
                clickCallBack={this.clickCallBack}/>
                <Footer/>
                <Footer/>
                <Footer/>
            </div>);
    }

}

export default Hello;