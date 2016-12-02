import React, { Component } from 'react';
import RA from './RA'
import VaricoseVeins from './VaricoseVeins'
class Home extends Component{
    render(){
        return(
            <div className="container-fluid padding">
            <div>
                <RA />
            </div>
            <div>
                <VaricoseVeins />
            </div>

           </div>
      )
    }
}

export default Home;