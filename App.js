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
import { FlashList } from "@shopify/flash-list";


const option1 = data[1];
export default function App() {
  const [items, setItems] = useState([]);

  const onSearch = (searchData) => {
    console.log(searchData);
    const { from, to, departDate, returnDate } = searchData;

    const formatDepartedDate=departDate.toISOString().split('T')[0];
    const formatReturnDate=returnDate.toISOString().split('T')[0];

    const filterData=searchData.filter(item =>{
      const departDateMatch=item.from.departAt.split('T')[0] === formatDepartedDate;
      const returnDateMatch=item.to.arriveAt.split('T')[0] === formatReturnDate;
      const fromMatch=item.from.airportCode===from;
      const toMatch=item.to.airportCode===to;

      return departDateMatch && returnDateMatch && fromMatch && toMatch;
    })

    setItems(filterData);
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
      <ScrollView style={{flex:1}}>

        <StoryHeader stories={stories} onStoryPress={handleStoryPress} />
        <StoryView
          story={selectedStory}
          visible={isViewerVisible}
          onClose={closeViewer}
        />
        <SearchForm onSearch={onSearch} />
        <FlashList 
          data={data}
          renderItem={({ item }) => <FlighOptionItem flight={item} />}

          estimatedItemSize={200}
        />
              </ScrollView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

});
