import React, { Component } from 'react';
import { Feather as Icon } from "@expo/vector-icons";
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image,  Dimensions} from 'react-native';
import Compare, { Before, After, Dragger } from './Comparison';
import SwipeCards from './SwipeCard';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
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

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Aubergine', backgroundColor: 'purple'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
        {text: 'Umm...', backgroundColor: 'cyan'},
        {text: 'orange', backgroundColor: 'orange'},
      ]
    };
  }


  swipeCardRef = React.createRef();

  handleNopeClick = () => {
    this.swipeCardRef.current._forceLeftSwipe()
  }

  handleYesClick = () => {
    this.swipeCardRef.current._forceRightSwipe()
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>Tummy Tuck</Text>
          <Text style={styles.cardsLeft}>47 / 50</Text>
        </View>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          ref={this.swipeCardRef}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          dragY={false}
          yupView={
            <TouchableOpacity style={styles.circle}>
              <Icon name="check" size={32} color="#ec5288" />
            </TouchableOpacity>
          }
          noView={
            <TouchableOpacity style={styles.circle}>
              <Icon name="x" size={32} color="#ec5288" />
            </TouchableOpacity>
          }
          yupStyle={{padding: 0, borderWidth: 0, borderRadius: 0, borderColor: 'white', top: 50, right: 20, borderRadius: 100}}
          nopeStyle={{padding: 0, borderWidth: 0, borderRadius: 0, borderColor: 'white', top: 50, left: 20, borderRadius: 100}}
        />
        <View style={styles.footer}>
           <TouchableOpacity onPress={this.handleNopeClick}>
             <Icon name="x" size={32} color="#ec5288" />
           </TouchableOpacity>
           <TouchableOpacity onPress={this.handleYesClick}>
             <Icon name="check" size={32} color="#6ee3b4" />
           </TouchableOpacity>
         </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    color: '#384143',
    fontWeight: '700'
  },
  cardsLeft: {
    color: '#d18648',
    fontSize: 22,
    fontWeight: '700'
  },
  footer: {
    position: 'absolute',
    width: deviceWidth,
    bottom: -(deviceHeight * 0.78),
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
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
  noMoreCardsText: {
    fontSize: 22,
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
})
