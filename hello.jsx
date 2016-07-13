import React from 'react';
import Name from './name.jsx';
import Footer from './footer.jsx';

class Hello extends React.Component{
    render(){
        const name = "VIDEO INPUT";
        return (<div>
                HI THERE<Name alias={name}/>
                <Footer/>
            </div>);
    }

}

export default Hello;