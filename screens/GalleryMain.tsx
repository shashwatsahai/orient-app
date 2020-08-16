import React, { useRef, useState, useEffect, Component } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import GalleryImages from "./GalleryImages";
import {
  Card,
  CardItem,
  Body,
  Container,
  Header,
  Content,
  Accordion,
} from "native-base";

const ALTIS = [
  {
    title: "ALTIS-Aldrop",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    image: require("../assets/displayAssets/Altis/ALTIS-Aldrop.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/displayAssets/Altis/ALTIS-CabinetHandle.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    image: require("../assets/displayAssets/Altis/ALTIS-CabinetHandle.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    image: require("../assets/displayAssets/Altis/ALTIS-CabinetHandle.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/displayAssets/Altis/ALTIS-CabinetHandle.jpg"),
  },
];
const ELITE = [
  {
    title: "ALTIS-Aldrop",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    image: require("../assets/displayAssets/Elite/ELITE-Latch.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/displayAssets/Elite/ELITE-DoorHandles.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    image: require("../assets/displayAssets/Elite/ELITE-CabinetHandle.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    image: require("../assets/displayAssets/Elite/ELITE-Concealed.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/displayAssets/Elite/ELITE-Aldrop19mm.jpg"),
  },
  {
    title: "ALTIS-CabinetHandle",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/displayAssets/Elite/ELITE-Aldrop16mm.jpg"),
  },
];

const GalleryMain = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <GalleryImages Name={"Elite"} ENTRIES={ELITE}></GalleryImages>

        <GalleryImages Name={"Altis"} ENTRIES={ALTIS}></GalleryImages>
      </Content>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     fontSize: 15,
//     textAlign: "center",
//   },
//   view: {
//     height: "100vh",
//   },
// });

export default GalleryMain;
