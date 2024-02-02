import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const StoryHeader = ({stories, onStoryPress}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
    {stories.map((story, index) => (
      <TouchableOpacity key={story.id} onPress={() => onStoryPress(story)}>
        <View style={styles.storyWrapper}>
          <LinearGradient colors={["white", "#F2BE22"]} style={styles.gradientBorder}>
            <Image source={story.profile} style={styles.avatar} />
          </LinearGradient>
          <Text style={styles.username}>{story.username}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
  )
}

export default StoryHeader

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
      },
      storyWrapper: {
        alignItems: 'center',
        marginRight: 15,
      },
      avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 3,
        borderColor: 'white',
      },
      username: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        padding:5,
        color: "dimgray",
        fontFamily: "Courier New",        fontWeight:'bold'
      },
      gradientBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 38,
        borderWidth: 2,
        borderColor: 'transparent',
        
      },
})