import React, { useState, useEffect } from 'react';
import { Modal, View, Image, TouchableOpacity, Text,StyleSheet } from 'react-native';
import StoryCarousel from './StoryCarousel';


const StoryViewer = ({ story, visible, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    setCurrentStoryIndex(0);
  }, [story]);

  if (!story) {
    return null;
  }

  const currentStoryItem = story.stories[currentStoryIndex];

  const goToNextStory = () => {
    if (currentStoryIndex < story.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      onClose();
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const renderStoryContent = () => {
    switch (currentStoryItem.type) {
        case 'image':
          return <Image source={{ uri: currentStoryItem.url }} style={styles.media} />;
        default:
          return null;
      }
  };

  return (
    <Modal visible={visible} transparent={false} onRequestClose={onClose}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>

        <Text style={styles.closeButtonText}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.storyContent} onPress={goToNextStory}>
      {renderStoryContent()}
      </TouchableOpacity>
      <StoryCarousel length={story.stories.length} currentIndex={currentStoryIndex} />
      {currentStoryIndex > 0 && (
          <TouchableOpacity style={styles.previousButton} onPress={goToPreviousStory}>
          <Text style={styles.navButtonText}>{'<'}</Text>
        </TouchableOpacity>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    flexDirection:'row',

  },
  closeButtonText: {
    fontSize: 20,
    color: 'white',
  },
  storyContent: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'blue'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  previousButton: {
    position: 'absolute',
    left: 20,
    top: '50%',
    zIndex: 1,
  },
  navButtonText: {
    fontSize: 30,
    color: 'white',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  webview: {
    width: '100%',
    height: '100%',
  },

});


export default StoryViewer;