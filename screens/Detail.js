import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Pressable,
  ImageBackground,
  FlatList,
} from "react-native";
import axios from "../config/instance";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import RecommendationCard from "../components/RecommendationCard";

export default function Details({ route, navigation }) {
  const { anime } = route.params;
  const [showMore, setShowMore] = useState(false);
  const [detail, setDetail] = useState("");
  const [moreLike, setMoreLike] = useState([]);

  const fetchDetail = async () => {
    try {
      const { data } = await axios({
        url: `/anime/${anime.mal_id}`,
        method: "GET",
      });
      setDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMore = async () => {
    try {
      const { data } = await axios({
        url: `/anime/${anime.mal_id}/recommendations`,
        method: "GET",
      });
      setMoreLike(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetail();
    fetchMore();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <StatusBar />

      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable onLongPress={() => Linking.openURL(`${detail.trailer.url}`)}>
          <Image
            source={{ uri: detail?.images?.webp.large_image_url }}
            style={styles.image}
            resizeMode="cover"
          />
          <FontAwesome
            style={styles.playIcon}
            name="youtube-play"
            size={40}
            color="black"
          />
        </Pressable>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{detail?.title_english}</Text>
            <View style={styles.boxInformation}>
              <Text style={styles.boxTitleInformation}>
                {detail?.rating?.split(" ")[0]}
              </Text>
              <Text style={styles.boxTitleInformation}>
                Rank: {detail?.rank}
              </Text>
              <Text style={styles.boxTitleInformation}>
                Score: {detail?.score}
              </Text>
            </View>
            <Text style={styles.information}>{detail?.year}</Text>
            <Text style={styles.information}>Episodes: {detail?.episodes}</Text>
          </View>
          <Text style={styles.synopsis}>
            {showMore ? detail?.synopsis : detail?.synopsis?.slice(0, 100)}
          </Text>
          {detail?.synopsis?.length > 100 && (
            <TouchableOpacity onPress={handleShowMore}>
              <Text style={styles.showMore}>
                {showMore ? "Show less" : "Show more"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.moreText}>More like this</Text>
        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!moreLike.length ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="close-outline" size={40} color="black" />
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No data
                </Text>
                <Ionicons name="close-outline" size={40} color="black" />
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={moreLike}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <RecommendationCard
                      key={index}
                      anime={item.entry}
                      navigation={navigation}
                    />
                  )}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    gap: 5,
  },
  anime: {
    alignContent: "center",
    marginLeft: 10,
  },
  image: {
    // flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    height: 600,
    borderRadius: 20,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // marginBottom: 20,
    color: "#000000",
  },
  boxInformation: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // gap: 10,
  },
  boxTitleInformation: {
    fontSize: 15,
    color: "white",
    backgroundColor: "gray",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  information: {
    fontSize: 15,
    fontWeight: "normal",
    color: "gray",
  },
  showMore: {
    color: "gray",
  },
  synopsis: {
    fontSize: 14,
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "45%",
  },
  moreText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "normal",
  },
});
