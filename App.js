import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import SearchForm from "./src/components/SearchForm";
import { LinearGradient } from "expo-linear-gradient";
import data from "./data.json";
import FlighOptionItem from "./src/components/FlighOptionItem";

const option1 = data[1];
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["white", "#F2BE22"]}>
      <SafeAreaView>
        <SearchForm />
        <FlatList
          data={data}
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
