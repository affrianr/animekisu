import { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import axios from "../config/instance";
import SearchCard from "../components/SearchCard";

export default function Search({ navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchSearch = async () => {
    try {
      const { data } = await axios({
        url: `/anime?q=${search}&genres_exclude=12,49`,
        method: "GET",
      });
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [search]);

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="search" size={30} color="black" />
          <TextInput
            style={styles.field}
            placeholder="Search"
            onSubmitEditing={(value) => setSearch(value.nativeEvent.text)}
          />
        </View>
        <View style={[styles.anime, { flex: 3, marginTop: 5 }]}>
          <View style={{ width: "auto" }}>
            {!data.length ? null : (
              <View>
                <FlatList
                  //   showsVerticalScrollIndicator={true}
                  horizontal={false}
                  numColumns={3}
                  data={data}
                  columnWrapperStyle={{
                    gap: 5,
                  }}
                  renderItem={({ item, index }) => (
                    <SearchCard
                      key={index}
                      anime={item}
                      navigation={navigation}
                    />
                  )}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  header: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  field: {
    backgroundColor: "#F9F9F9",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    height: 54,
    flex: 1,
  },
  anime: {
    alignContent: "center",
    marginLeft: 5,
  },
});
