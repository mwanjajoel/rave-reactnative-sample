/* eslint-disable react/react-in-jsx-scope */
import Rave from 'react-native-ravepay';
import React, {Component} from 'react';

class Giving extends Component {
  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onSuccess(data) {
    console.log('success', data);
  }

  onFailure(data) {
    console.log('error', data);
  }

  onClose() {
    // navigate to the desired screen on rave close
  }

  render() {
    return (
      <Rave
        amount="500"
        country="UG"
        currency="UGX"
        paymentOption="card,mobilemoneyuganda"
        email="joel@test.com"
        firstname="Joel"
        lastname="Test"
        publickey="FLWPUBK-340f793***********-X"
        encryptionkey="ddf*********************"
        meta={[{metaname: 'color', metavalue: 'red'}]}
        onSuccess={res => this.onSuccess(res)}
        onFailure={e => this.onFailure(e)}
        onClose={e => this.onClose(e)}
      />
    );
  }
}

export default Giving;
