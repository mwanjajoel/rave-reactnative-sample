/* eslint-disable react/no-string-refs */
import React, {Component} from 'react';
import {View, Alert, TouchableOpacity, Text, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import Giving from './Giving';

let Form = t.form.Form;

class SimpleGivingForm extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  // function for submitting the form details
  submitForm() {
    var value = this.refs.givingForm.getValue();
    if (value) {
      // send the values to the flutterwave screen as props
      // Alert.alert(value);
      <Giving />;
    } else {
      Alert.alert('Please fix the errors');
    }
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
          loveOfferingSeedOfFaith: 'Love Offering(Seed of Faith)',
          loveOfferingThanksGiving: 'Love Offering(ThanksGiving)',
          PartnershipGeneral: 'Partnership(General)',
          PartnershipPPM: 'Partnership(PPM(Building))',
          GeneralMinistryRadio: 'General Ministry(Radio)',
          GeneralMinistryTV: 'General Ministry(TV)',
          GeneralMinistryPrisons: 'General Ministry(Prisons)',
          GeneralMinistryAnniversary: 'General Ministry(Anniversary)',
          GeneralMinistryCrossOver: 'General Ministry(CrossOver)',
          GeneralMinistryMissions: 'General Ministry(Missions)',
          Manifests: 'Manifests',
          Diaspora: 'Diaspora',
        },
        'paymentReason',
      ),
    });

    var options = {
      fields: {
        paymentReason: {
          isCollapsed: true,
        },
      },
    };

    return (
      <View>
        <Form ref="givingForm" type={GivingModel} options={options} />
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default SimpleGivingForm;
