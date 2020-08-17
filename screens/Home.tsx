import * as React from "react";
import { StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

import {
  Title,
  Text,
  View,
  Left,
  Body,
  Button,
  Icon,
  Right,
  Card,
} from "native-base";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <Text style={styles.text}>
          {
            "With an experience in shape of skill and knowledge acquired over our presence in INDUSTRY for 25 YEARS, we have mastered the skill to develop as per the imagination of our valuable customers to deliver a complete sense of satisfaction which is why our product range have so much to choose from such as Builder's Hardware, Architectural Hardware, Interior Design Hardware, Modular Hardware Fittings, Fancy Hardware Fittings, Wardrobe Hardware Fittings, Cupboard Hardware Fittings, Drawers Hardware Fittings, Window Hardware Fittings, Door Hardware Fittings, Kitchen Hardware Fittings and all sorts of Designer Hardware Fittings. When it comes to the matter of sense for SECURITY, our diverse variety of LOCKS systems is definitely a one to match your needs as it includes Hi-Security Locks, Cylindrical Locks, Main Door Locks, Cabinet Locks, Cupboard Locks, Almirah Locks, Wardrobe Locks, Drawer Locks, Euro Profile Pin Cylinders & Ultra/Dimple Key Locks, Laser Key Locks. Our vast experience in Manufacturing & Marketing has helped to develop the product to its level of proper Specification and Perfection. Years of hard work and our attempt to achieve and deliver the satisfaction has helped us to make bring some various changes in our R&D and QUALITY Control Division, which brings us to the fact that our products are available in material types such as Brass, Zinc, Aluminum, SS & MS and can take shape in products like Aldrops, Latches, Concealed Handles, Pull Handles, Main Door Handles, Cabinet Handles, Window Handles, Door Handles, Drawer Handles, Cupboard Handles, Almirah Handles, Pullers, Knobs, Door Knockers, Door Stoppers, Tower Bolts & all sorts of Door Fittings as per our valuable CUSTOMERS’ NEED."
          }
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "sketch-rockwell",
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
    margin: 20,
    fontFamily: "sketch-rockwell",
    paddingTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
