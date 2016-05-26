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
              <View style={styles.logo_l3} />
              <View style={styles.logo_l4} />
              <View style={styles.logo_u1} />
              <View style={styles.logo_u2} />
            </View>
          </View>
          <View style={styles.logo_txt_container}>
            <Text style={styles.logo_txt}>
              找你
            </Text>
          </View>
      </View>
    );
  }
}

const baseColor = 'rgb(255, 199, 91)';
const logoSize = 120;
const logoRadius = 8;
const lineSize = 12;
const logoInsideSize = logoSize - 2 * lineSize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo_l1: {
    width: logoSize,
    height: logoSize,
    backgroundColor: 'white',
    borderRadius: logoRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_l2: {
    width: logoInsideSize,
    height: logoInsideSize,
    backgroundColor: baseColor,
  },
  logo_l3: {
    backgroundColor: baseColor,
    // backgroundColor: 'black',
    width: lineSize,
    height: logoSize * 0.2,
    right: - lineSize,
    top: logoInsideSize * 0.5 - logoSize * 0.1,
    position: 'absolute'
  },
  logo_l4: {
    backgroundColor: 'white',
    // backgroundColor: 'black',
    width: lineSize * 2,
    height: lineSize,
    position: 'absolute',
    right: - lineSize,
    top: logoInsideSize * 0.5,
    // left: logoSize - 2 * lineSize,
    // top: logoInsideSize * 0.5 - logoSize * 0.125
  },
  logo_u1: {
    backgroundColor: 'white',
    width: logoInsideSize - 2 * lineSize,
    height: logoInsideSize - 2 * lineSize,
    position: 'absolute',
    left: lineSize,
    top: lineSize,
    borderBottomLeftRadius: logoRadius,
    borderBottomRightRadius: logoRadius
  },
  logo_u2: {
    backgroundColor: baseColor,
    // backgroundColor: 'black',
    // opacity: 0.5,
    width: logoInsideSize - 4 * lineSize,
    height: logoInsideSize - 3 * lineSize,
    position: 'absolute',
    left: 2 * lineSize,
    top: lineSize,
    borderBottomLeftRadius: logoRadius,
    borderBottomRightRadius: logoRadius
  },
  logo_txt_container: {
    marginTop: lineSize,
    width: logoSize,
  },
  logo_txt: {
    color: 'white',
    fontSize: logoSize * 0.2,
    fontWeight: 'bold',
    position: 'absolute',
    width: logoSize,
    textAlign: 'center',
  }
});

export default LaunchScreen;
