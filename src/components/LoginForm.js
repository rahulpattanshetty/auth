import React, { Component } from 'react';
import axios from 'axios';
import { Text } from 'react-native'

import { Card, CardSection, Button, Input, Spinner } from './common';
// import gql from 'graphql-tag';
// import { Query } from "react-apollo";
// import makeApolloClient from '../apollo'

// const vehicleQuery = gql`query{ vehicles{id name}}`

const query = {
  login: `mutation login($user: AuthInput!){
    login(user: $user){
      jwt
      user { fullName }
    }
  }`
}



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      loading: false
    };
  }
  
  onButtonPress(){
    this.setState({errors: "", loading: true})
    axios.post("http://192.168.43.77:3000/api/v1/graphql",{
      query: query.login,
      variables: {
        "user":{
          "email": this.state.email,
          "password": this.state.password
        }
      }
    })
      .then(res => {
        this.setState({loading: false})
        
        if (res.data.errors) {
          return this.setState({errors: res.data.errors[0].message})
        }
        const {jwt, user} = res.data.data.login
        this.props.callbackFromParent({jwt, user});
        // console.warn(res.data)
        this.setState({
          email: "",
          password: "",
          errors: ""
        })
      })
      .catch(err =>{

         this.setState({errors: "Authentication Failed",loading: false})
        }
      )
  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render() {
    // console.log(this.props)
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="Enter Email"
            secureTextEntry={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
          
        <CardSection>  
          <Input
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.errors}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
