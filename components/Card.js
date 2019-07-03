import * as React from "react";
import {
  Image, StyleSheet, View, Text, Dimensions
} from "react-native";
import Animated from "react-native-reanimated";
import { Feather as Icon } from "@expo/vector-icons";
import Compare, { Before, After, DefaultDragger, Dragger } from './Comparison';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Card extends React.PureComponent {
  static defaultProps = {
    likeOpacity: 0,
    nopeOpacity: 0,
  };

  state = {
    scrollEnabled: true
  }

  onMoveStart() {
    this.setState({ scrollEnabled: false });
  }

  onMoveEnd() {
    this.setState({ scrollEnabled: true });
  }

  render() {
    const { profile, likeOpacity, nopeOpacity } = this.props;
    return (
      <View style={{...StyleSheet.absoluteFill}}>
        {/* <Image style={styles.image} source={profile.profile} /> */}
        <Compare
          initial={deviceWidth / 2}
          draggerWidth={50}
          height={deviceHeight - 250}
        >
          <Before>
            <Image style={styles.image} source={require('../assets/profiles/1.jpg')} />
          </Before>
          <After>
            <Image style={styles.image} source={require('../assets/profiles/2.jpg')} />
          </After>
          <Dragger>
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 24,
                bottom: 0,
                left: 24,
                backgroundColor: '#fff',
                opacity: 0.6
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: (deviceHeight - 90) / 2,
                left: 10,
                backgroundColor: '#fff',
                opacity: 0.9,
                width: 30,
                height: 30,
                marginTop: -15,
                transform: [{ rotate: '45deg' }]
              }}
            />
          </Dragger>
        </Compare>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Animated.View style={{...styles.circle, opacity: likeOpacity }}>
              <Icon name="x" size={32} color="#ec5288" />
            </Animated.View>
            <Animated.View style={{...styles.circle, opacity: nopeOpacity }}>
              <Icon name="check" size={32} color="#6ee3b4" />
            </Animated.View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.name}>{profile.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 8,
  },
  divider: {
    backgroundColor: '#ffffff'
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#6ee3b4",
  },
  likeLabel: {
    fontSize: 32,
    color: "#6ee3b4",
    fontWeight: "bold",

  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#ec5288",
  },
  nopeLabel: {
    fontSize: 32,
    color: "#ec5288",
    fontWeight: "bold",
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2
  },
});
