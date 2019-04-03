import React, { Component } from 'react';
import Home, from './Home'
import CreateAccount, from '../CreateAccount'



class ShowContainer extends Component {
  

  render() {
    return (
      <div >
        <Home />
        <CreateAccount />
        
      </div>
    );
  }
}

export default LoginPage;