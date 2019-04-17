import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
export default class facebook extends Component {
  state={
      isLoggedIn: false,
      userID:'',
      name: '',
      email: '',
      picture: ''
  }
  passUser = () => {
    console.log(this.state.name)
  }

  responseFacebook = response => {
    //   console.log(response)
    this.setState({
        isLoggedIn:true,
        userID:response.userID,
        response: response.name,
        email:response.email,
        picture:response.picture.data.url
    })
    this.passUser()
  }
  componentClicked = () => console.log('clicked')

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent=(
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding:'20px'
                }}>
                    <img src={this.state.picture} size= "medium" alt={this.state.name}/>
                    <h2> Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        }else{
           fbContent=(<FacebookLogin
            appId="269875300587010"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
           callback={this.responseFacebook} />);  
        }
    return (
      <div>
        {fbContent}
        {}
      </div>
    )
  }
}
