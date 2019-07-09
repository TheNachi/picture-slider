
import React, {Component} from 'react'
import Compare, { Before, After, DefaultDragger, Dragger } from './Comparison';
import {StyleSheet} from 'react-native';
class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Compare
          initial={deviceWidth / 2}
          draggerWidth={50}
          height={deviceHeight * 0.7}
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
                width: 4,
                backgroundColor: '#fff',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: (deviceHeight * 0.7) / 2,
                backgroundColor: '#fff',
                width: 50,
                height: 50,
                marginTop: -15,
                borderRadius: 50
              }}
            />
          </Dragger>
        </Compare>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 8,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})
