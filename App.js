import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import SearchForm from "./src/components/SearchForm";
import { LinearGradient } from "expo-linear-gradient";
import dummyData from "./data.json";
import FlighOptionItem from "./src/components/FlighOptionItem";
import { useState } from "react";

export default function App() {

  const [items,setItems]=useState([])

const onSearch=(data)=>{
  console.log(data)

  setItems(dummyData)

}
console.log(items)

  return (
    <LinearGradient style={styles.container} colors={["white", "#F2BE22"]}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        <FlatList
          data={items}
          renderItem={({ item }) => <FlighOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
