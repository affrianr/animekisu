import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import axios from "../config/instance";
import { useEffect, useLayoutEffect, useState } from "react";

import Card from "../components/Card";

export default function Home({ navigation }) {
  const [showing, setShowing] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [action, setAction] = useState([]);
  const [awardWinning, setAwardWinning] = useState([]);

  const fetchSeason = async () => {
    try {
      const { data } = await axios({
        url: "/seasons/now",
        method: "GET",
      });
      setShowing(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecommendation = async () => {
    try {
      const { data } = await axios({
        url: "/recommendations/anime",
        method: "GET",
      });
      setRecommendation(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopAnime = async () => {
    try {
      const { data } = await axios({
        url: "/top/anime",
        method: "GET",
      });
      setTopAnime(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAction = async () => {
    try {
      const { data } = await axios({
        url: "anime?genres=1&order_by=popularity",
        method: "GET",
      });
      setAction(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAwardWinning = async () => {
    try {
      const { data } = await axios({
        url: "anime?genres=46&order_by=rank",
        method: "GET",
      });
      setAwardWinning(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSeason();
      fetchRecommendation();
      fetchTopAnime();
      fetchAction();
      fetchAwardWinning();
    }, 300);
  }, []);

  return (
    <>
      <StatusBar />
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
      >
        <Text style={styles.title}>Now Showing</Text>
        <View style={[styles.anime]}>
          <View style={{ width: "100%", height: "auto" }}>
            {!showing.length ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No Data
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={showing}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <Card key={index} anime={item} navigation={navigation} />
                  )}
                />
              </View>
            )}
          </View>
        </View>

        <Text style={styles.title}>Recommendations</Text>

        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!recommendation.length ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No data
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={recommendation}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <Card
                      key={index}
                      anime={item.entry[0]}
                      navigation={navigation}
                    />
                  )}
                />
              </View>
            )}
          </View>
        </View>

        <Text style={styles.title}>Top Show</Text>

        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!topAnime.length ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No data
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={topAnime}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <Card key={index} anime={item} navigation={navigation} />
                  )}
                />
              </View>
            )}
          </View>
        </View>

        <Text style={styles.title}>Action </Text>

        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!action.length ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No data
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={action}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <Card key={index} anime={item} navigation={navigation} />
                  )}
                />
              </View>
            )}
          </View>
        </View>

        <Text style={styles.title}>Award Winning </Text>

        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!awardWinning.length ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 25,
                  }}
                >
                  No data
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 200,
                }}
              >
                <FlatList
                  horizontal={true}
                  data={awardWinning}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 14,
                      }}
                    />
                  )}
                  renderItem={({ item, index }) => (
                    <Card key={index} anime={item} navigation={navigation} />
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
const screenSize = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingHorizontal: 10,
    gap: 5,
    paddingTop: 10,
  },
  anime: {
    alignContent: "center",
    // paddingBottom: 60,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "lightslategrey",
    // marginTop: 18,
  },
});
