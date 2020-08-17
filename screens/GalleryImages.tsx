import React, { Component } from "react";
import { Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Right,
} from "native-base";
import { AntDesign } from '@expo/vector-icons'; 

export default class GalleryImages extends Component {
  render() {
    const cards = this.props.ENTRIES;
    return (
      <Container style={styles.container}>
        <Header
          style={{ elevation: 20, backgroundColor: "rgba(169, 204, 227,0.7)" }}
        >
          <Text style={styles.title}>{this.props.Name}</Text>
        </Header>
        <DeckSwiper
          dataSource={cards}
          ref={(c) => (this._deckSwiper = c)}
          renderItem={(item) => (
            <Card style={{ elevation: 50 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text
                      note
                      style={{ fontFamily: "sketch-rockwell", fontSize: 30 }}
                    >
                      {item.title.split('-').[1]}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={{ height: 400 }}>
                <ImageBackground
                  source={require("../assets/bgspace.jpg")}
                  style={styles.backgroundImage}
                >
                  <Image
                    style={{
                      height: 350,
                      flex: 1,
                      maxWidth: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    source={item.image}
                  />
                </ImageBackground>
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: "#ED4A6A" }} />
                <AntDesign name="shoppingcart" size={24} color="black"  style={styles.shoppingcart}/>
                <Text
                  style={{
                    elevation: 20,
                    fontFamily: "sketch-rockwell",
                    fontSize: 10,
                  }}
                ></Text>
                
              </CardItem>
            </Card>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            left: 0,
            right: 0,
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              borderBottomRightRadius: 20,
              height: "125%",
              elevation: 0,
              backgroundColor: "rgba(169, 204, 227,0.7)",
            }}
            iconLeft
            onPress={() => this._deckSwiper._root.swipeLeft()}
          >
            <Icon name="arrow-back" />
            <Text
              style={{
                elevation: 20,
                fontFamily: "sketch-rockwell",
                fontSize: 10,
              }}
            >
              Swipe Left
            </Text>
          </Button>
          <Button
            style={{
              elevation: 0,
              borderBottomLeftRadius: 20,
              height: "125%",
              backgroundColor: "rgba(169, 204, 227,0.7)",
            }}
            iconRight
            onPress={() => this._deckSwiper._root.swipeRight()}
          >
            <Text
              style={{
                elevation: 20,
                fontFamily: "sketch-rockwell",
                fontSize: 10,
              }}
            >
              Swipe Right
            </Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  shoppingcart:{
    right: 10,
    position:"absolute",
    fontSize:30,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    zIndex: 1,
  },
  title: {
    padding: 10,
    color: "white",
    fontFamily: "sketch-rockwell",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    fontFamily: "sketch-rockwell",
    width: "80%",
  },
});
