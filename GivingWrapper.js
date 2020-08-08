/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Rave} from 'rave-reactnative-wrapper';
export default function GivingWrapper() {
  const onCancel = data => {
    console.log('onCancel', data);
  };
  const onSuccess = data => {
    console.log('onSuccess', data);
  };
  const onError = data => {
    console.log('onError', data);
  };
  const GivingWeb = props => {
    return (
      <TouchableOpacity style={{}} onPress={props.onPress}>
        <View>
          <Image source={''} style={{}} />
        </View>
        <Text style={{}}>Pay Now</Text>
        <Entypo name="youtube-with-circle" color="gray" size={18} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Rave
        button={props => <GivingWeb {...props} />}
        buttonText="PAY NOW"
        raveKey="<ADD PUBLIC KEY>"
        amount={10}
        currency={'NGN'}
        customerEmail={'jimionxyz@gmail.com'}
        customerPhone={'081384xx18'}
        customer_firstname="Ayomide"
        customer_lastname="Jimxi"
        ActivityIndicatorColor="black"
        subaccounts={[
          {
            id: 'RS_81F32DC27FCE9DAD882DEECC3745AEAA',
          },
        ]}
        meta={[{metaname: 'test-name', metavalue: 'test-value'}]}
        country={'NG'}
        payment_options={'mpesa'}
        btnStyles={{
          backgroundColor: 'green',
          width: 100,
          alignContent: 'center',
        }}
        onCancel={onCancel}
        onSuccess={onSuccess}
        onError={onError}
        textStyles={{color: 'white', alignSelf: 'center'}}
        txref={Date.now()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 300,
  },
});
