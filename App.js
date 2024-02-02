import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import SearchForm from "./src/components/SearchForm";
import { LinearGradient } from "expo-linear-gradient";
import data from "./data.json";
import FlighOptionItem from "./src/components/FlighOptionItem";
import { useState } from "react";
import StoryView from "./src/components/Story/StoryView";
import stories from "./src/components/Story/data";
import StoryHeader from "./src/components/Story/StoryHeader";
const option1 = data[1];
export default function App() {
  const [items, setItems] = useState([]);

  const onSearch = (data) => {
    console.log(data);

    setItems(data);
  };
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const handleStoryPress = (story) => {
    setSelectedStory(story);
    setIsViewerVisible(true);
  };
  const closeViewer = () => {
    setIsViewerVisible(false);
    setSelectedStory(null);
  };
  return (
    <LinearGradient style={styles.container} colors={["white", "#F2BE22"]}>
      <SafeAreaView>
        <StoryHeader stories={stories} onStoryPress={handleStoryPress} />
        <StoryView
          story={selectedStory}
          visible={isViewerVisible}
          onClose={closeViewer}
        />
        <SearchForm onSearch={onSearch} />
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
