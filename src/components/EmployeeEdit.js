import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeEdit;