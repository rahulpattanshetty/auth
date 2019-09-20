import React, { Component } from "react";
import { View, Text } from "react-native"

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout'
import { throwServerError } from "apollo-link-http-common";
// import Vehicle from './components/Vehicle'

// import ApolloClient from "apollo-client";
// import { ApolloProvider} from 'react-apollo';
// import makeApolloClient from './apollo';
// 

// const client = makeApolloClient

class App extends Component {
  state = {
    loggedIn: false,
    fullName: ""
  }
  
  // componentDidMount(){
  //   const { token, id } = {token:"sddskdk23323232",id:"1"}
  //   const client = makeApolloClient(token);
  //   this.setState({client})
  // }

  loginCallback = (data) => {
    if (data) {
      this.setState({
        jwt: data.jwt,
        fullName: data.user.fullName,
        loggedIn: true
      })
    }
  }

  logoutCallback = () => {
    
      this.setState({loggedIn: false})
    
  }

  renderAuthPage(){
    if(this.state.loggedIn){
      return <Logout onPress={this.logoutCallback}/>
    }else{
      return <LoginForm callbackFromParent={this.loginCallback}/>
    }

  }

  render(){
    return (   
        <View>
          <Header headerText="Authentication" />
          {/* <LoginForm /> */}
          {/* <Vehicle /> */}
          {this.renderAuthPage()}
        </View>
    )
  }
}

export default App;