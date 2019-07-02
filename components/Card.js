import * as React from "react";
import {
  Image, StyleSheet, View, Text
} from "react-native";
import Animated from "react-native-reanimated";
import { Feather as Icon } from "@expo/vector-icons";

export default class Card extends React.PureComponent {
  static defaultProps = {
    likeOpacity: 0,
    nopeOpacity: 0,
  };

  render() {
    const { profile, likeOpacity, nopeOpacity } = this.props;
    return (
      <View style={{...StyleSheet.absoluteFill, flexDirection: 'column'}}>
        <Image style={styles.image} source={profile.profile} />
        {/* <View style={styles.knob}>
          <Text>AA</Text>
        </View> */}
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
  knob: {
    height: 50,
    width: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    marginLeft: 40,
    justifyContent: 'center',
    // top: '50%',
    // transform: [{translateY: 50}],
    zIndex: 2000
  },
  dividerKnob: {
    height: 50,
    width: 50
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
    shadowRadius: 2,
  },
});
