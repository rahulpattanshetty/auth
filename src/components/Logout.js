import React, { Component } from 'react';
import {Card,CardSection, Button } from "./common";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button>
            Logout
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Logout;
