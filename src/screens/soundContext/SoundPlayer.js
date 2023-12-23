import React, { useEffect } from 'react';
import Sound from 'react-native-sound';
const SoundPlayer = ({ soundPath, isSoundOn, mode }) => {
  let sound = null;
  useEffect(() => {

    if (isSoundOn==true) {
      sound=null;
      sound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        
        sound.setCurrentTime(2.5);
        sound.setVolume(0.5);
        console.log( 'isSoundOn', isSoundOn);
        sound.getCurrentTime((seconds) => console.log('at ' + seconds));
        sound.setNumberOfLoops(-1); // Loop vô hạn
        sound.play();
        // sound.setNumberOfLoops(-1); // Loop vô hạn

      });
    }
    return () => {
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, [soundPath, isSoundOn, mode]);

};

export default SoundPlayer;