import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
});

const BackButton = (props) => {
  return (
    <View style={styles.backButton}>
      <Text>
        {'<'}
      </Text>
    </View>
  )
}

const Title = (props) => {
  return (
    <View style={styles.title}>
      <Text>
        Placeholder
      </Text>
    </View>
  )
}

const RightButton = (props) => {
  return (
    <View style={styles.rightButton}>
      <Text>
        Placeholder
      </Text>
    </View>
  )
}

@inject('navState') @observer
export default class NavBar extends React.Component {
  static propTypes = {
    navProps: PropTypes.object,
    style: View.propTypes.style,
  };

  render() {
    const left = this.props.left ? this.props.left : BackButton;
    const center = this.props.center ? this.props.center : Title;
    const right = this.props.right ? this.props.right : RightButton;

    const style = {
      bottom: this.props.height - this.props.navState.config.navBarHeight,
    };

    const props = { ...this.props, navProps: this.props.navProps };

    return (
      <View style={[styles.container, style, this.props.style]}>
        <View style={styles.buttons}>
          {React.createElement(left, props)}
          {React.createElement(center, props)}
          {React.createElement(right, props)}
        </View>
      </View>
    )
  }
}
