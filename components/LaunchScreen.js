import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logo_l1}>
            <View style={styles.logo_l2}>
              <View style={styles.logo_u1}>
                <View style={styles.logo_u2} />
                <View style={styles.logo_u4} />
                <View style={styles.logo_u3} />
              </View>
            </View>
            <View style={styles.logo_l3} />
            <View style={styles.logo_l4} />
          </View>
      </View>
    );
  }
}

const window = Dimensions.get('window');
const w = window.width;
const baseColor = 'rgb(255, 199, 91)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo_l1: {
    width: w * .25,
    height: w * .25,
    backgroundColor: 'white',
    borderRadius: w * .02,
  },
  logo_l2: {
    width: w * .21,
    height: w * .21,
    backgroundColor: baseColor,
    margin: w * .02,
    borderRadius: w * .02,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo_l3: {
    backgroundColor: baseColor,
    width: w * .02,
    height: w * .06,
    top: - w * .15,
    left: w * .23
  },
  logo_l4: {
    backgroundColor: 'white',
    width: w * .04,
    height: w * .02,
    top: - w * .15,
    left: w * .2
  },
  logo_u1: {
    backgroundColor: 'white',
    width: w * .12,
    height: w * .15,
    borderRadius: w * .06
  },
  logo_u2: {
    backgroundColor: 'white',
    width: w * .12,
    height: w * .06
  },
  logo_u3: {
    width: w * .085,
    height: w * .085,
    // backgroundColor: 'black',
    backgroundColor: baseColor,
    // opacity: .5,
    left: w * .018,
    top: - w * .1,
    borderRadius: w * .06
  },
  logo_u4: {
    width: w * .085,
    height: w * .085,
    // backgroundColor: 'black',
    // opacity: .5,
    left: w * .018,
    top: - w * .06,
    backgroundColor: baseColor,
  }
});

export default LaunchScreen;
