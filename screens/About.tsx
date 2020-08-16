import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  CardItem,
  Card,
  Left,
  Thumbnail,
} from "native-base";
export default class About extends Component {
  render() {
    return (
      <Card
        style={{
          elevation: 50,
          marginTop: 50,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 20,
        }}
      >
        <Form>
          <CardItem style={styles.card}>
            <Item floatingLabel>
              <Input
                style={{ fontFamily: "sketch-rockwell" }}
                placeholder="Name"
              />
            </Item>
          </CardItem>
          <CardItem style={styles.card}>
            <Item floatingLabel>
              <Input
                style={{ fontFamily: "sketch-rockwell" }}
                placeholder="About"
              />
            </Item>
          </CardItem>
          <CardItem style={styles.card}>
            <Item floatingLabel>
              <Input
                style={{ fontFamily: "sketch-rockwell" }}
                placeholder="Name"
              />
            </Item>
          </CardItem>
        </Form>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    fontFamily: "sketch-rockwell",
  },
});
