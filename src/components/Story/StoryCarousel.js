import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StoryCarousel = ({ length, currentIndex }) => {
        return (
            <View style={styles.indicatorContainer}>
            {Array.from({ length }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentIndex ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
        );
      };



export default StoryCarousel

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 40,  
        left: 0,
        right: 0,
      },
      indicator: {
        width: 25,  
        height: 5, 
        borderRadius: 2.5,  
        backgroundColor: 'grey',
        marginHorizontal: 2,
      },
      activeIndicator: {
        backgroundColor: 'white',
      },

})