import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../assets/ava.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Affrian Rachmansyah</Text>
        <Text style={styles.potition}>Full Stack Developer | Indonesia</Text>
        <View style={styles.social}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/affrianr/")
            }
          >
            <FontAwesome name="linkedin-square" size={34} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/affrianr/")}
          >
            <FontAwesome name="github-square" size={34} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.works}>
        <Text style={styles.title}>Selected Works:</Text>

        <Image
          source={require("../assets/fokuso-wrap.png")}
          style={styles.portoImage}
        />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/affrianr/FE-Fokuso")
          }
        >
          <Text style={styles.portoTitle}>Fokuso - React Native </Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/camera-store-nextjs-wrap.png")}
          style={styles.portoImage}
        />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/affrianr/my-camera-store")
          }
        >
          <Text style={styles.portoTitle}>Camera - React Native </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
    backgroundColor: "white",
  },
  body: {
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
  potition: {
    fontSize: 18,
    marginBottom: 10,
  },
  social: {
    flexDirection: "row",
    gap: 20,
  },
  works: {
    flex: 1,
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  porto: {
    // height: 500,
  },
  portoImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 2,
  },
  portoTitle: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
  },
});
