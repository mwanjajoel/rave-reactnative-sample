/* eslint-disable react/no-string-refs */
import React, {Component} from 'react';
import {View} from 'react-native';
import t from 'tcomb-form-native';

let Form = t.form.Form;

class SimpleGivingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // create a form model for giving
    let GivingModel = t.struct({
      amount: t.Number,
      currency: t.enums(
        {
          USD: 'USD',
          EUR: 'EUR',
          UGX: 'UGX',
          GBP: 'GBP',
          KES: 'KES',
          GHS: 'GHS',
          RWF: 'RWF',
          SLL: 'SLL',
          ZMW: 'ZMW',
          ZAR: 'ZAR',
          TZS: 'TZS',
          AUD: 'AUD',
          XOF: 'XOF',
          XAF: 'XAF',
          Others: 'Others',
        },
        'currency',
      ),
      paymentReason: t.enums(
        {
          Offertory: 'Offertory',
          Tithe: 'Tithe',
          FirstFruit: 'First Fruit',
          LoveOffering: 'Love Offering',
          Partnership: 'Partnership',
          GeneralMinistry: 'General Ministry',
          Manifests: 'Manifests',
          Diaspora: 'Diaspora',
        },
        'paymentReason',
      ),
    });

    return (
      <View>
        <Form ref="form" type={GivingModel} />
      </View>
    );
  }
}

export default SimpleGivingForm;
