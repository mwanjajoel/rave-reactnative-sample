/* eslint-disable no-sparse-arrays */
import React from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default class App extends React.Component {
  emailInput = null;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Giving</Text>
        <Formik
          initialValues={{
            amount: '',
            email: '',
            currency: [
              'USD',
              'EUR',
              'UGX',
              'GBP',
              'KES',
              'GHS',
              'RWF',
              'SLL',
              'ZMW',
              'ZAR',
              'TZS',
              'AUD',
              'XOF',
              'XAF',
              'Others',
            ],
            paymentReason: [
              'Offertory',
              'Tithe',
              'First Fruit',
              'Love Offering',
              'Partnership',
              'General Ministry',
              'Manifests',
              'Diaspora',
            ],
            loveOfferingReasons: ['Seed of Faith', 'Thanks Giving'],
            partnershipOptions: ['General', 'PPM (Building)'],
            generalOptions: [
              'Radio Ministry',
              'TV Ministry',
              'Prisons Ministry',
              'Anniversary',
              'Cross Over',
              'Missions',
            ],
          }}
          validationSchema={Yup.object({
            amount: Yup.number().required('Required'),
            generalOptions: Yup.string().oneOf([
              'Radio Ministry',
              'TV Ministry',
              'Prisons Ministry',
              'Anniversary',
              'Cross Over',
              'Missions',
            ]),
          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
              Alert.alert(JSON.stringify(values));
              // Important: Make sure to setSubmitting to false so our loading indicator
              // goes away.
              formikActions.setSubmitting(false);
            }, 500);
          }}>
          {props => (
            <View>
              <TextInput
                onChangeText={props.handleChange('amount')}
                onBlur={props.handleBlur('amount')}
                value={props.values.amount}
                autoFocus
                placeholder="Amount"
                style={styles.input}
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                  // this.emailInput.focus();
                }}
              />

              

              <ErrorMessage name="invalid" />
              <Button
                onPress={props.handleSubmit}
                color="green"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={{marginTop: 16}}>
                Continue
              </Button>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
