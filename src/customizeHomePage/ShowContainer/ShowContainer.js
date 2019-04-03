import React, { Component } from 'react';
import FamilyRequestList, from './FamilyRequestList'
import InviteForm, from '../InviteForm'
import Instructions, from '../Instructions'


class ShowContainer extends Component {
  

  render() {
    return (
      <div >
        <FamilyRequestList />
        <InviteForm />
        <Instructions />
        
      </div>
    );
  }
}

export default ApprovedMemberContainer;