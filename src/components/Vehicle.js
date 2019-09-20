import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Query } from "react-apollo";
import gql from "graphql-tag";


const query = gql`
  query {
    vehicles{
      id
      name
    }
  }
`;

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    console.log(this.apollo)
  }

  render() {
    return (
    <View>
          {/* <Query query={query}>
            {
              ({response,error}) => {
                console.warn(response)
              }
            }
          </Query> */}
          </View> 
    );
  }
}



export default Vehicle;
