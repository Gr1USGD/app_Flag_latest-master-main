var Sound = require('react-native-sound');

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var sound = new Sound('sound_background.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

  // Play the sound with an onEnd callback
  sound.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
});

// Reduce the volume by half
sound.setVolume(0.5);

// Position the sound to the full right in a stereo field
sound.setPan(1);

// Loop indefinitely until stop() is called
sound.setNumberOfLoops(-1);

// Get properties of the player instance
console.log('volume: ' + sound.getVolume());
console.log('pan: ' + sound.getPan());
console.log('loops: ' + sound.getNumberOfLoops());

// Seek to a specific point in seconds
sound.setCurrentTime(2.5);

// Get the current playback point in seconds
sound.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
sound.pause();

// Stop the sound and rewind to the beginning
sound.stop(() => {
  // Note: If you want to play a sound after stopping and rewinding it,
  // it is important to call play() in a callback.
  sound.play();
});

// Release the audio player resource
sound.release();
















































// import { View, Text } from 'react-native';
// import React from 'react';
// import Sound from 'react-native-sound';



// const SoundDemo = () => {
//   const playSound=()=> {
//     var sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         // loaded successfully
//         console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
      
//         // Play the sound with an onEnd callback
//         sound.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//         });
//       });
//   };

  

//   return (
//     <View style = {{flex: 1, justifyContent:'center', alignItems:'center'}} >
//       <Text style={{padding:20, borderWidth:5, backgroundColor:'orange', color:'white'}} onPress={playSound}>Play Sound</Text>
//     </View>
//   );
// }