import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function Card({ anime }) {
  return (
    <>
      <View
        style={{
          height: 180,
          backgroundColor: "white",
          // marginLeft: 3,
          marginTop: 3,
          borderRadius: 15,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
        }}
      >
        <Image
          source={{ uri: anime?.images.jpg.image_url }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 15,
          }}
        />
        <View style={styles.item}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    height: Dimensions.get("window").width / 2.5,
    width: Dimensions.get("window").height / 5.5,
    borderRadius: 30,
    // paddingRight: 8,
  },
});
