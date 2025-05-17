import { Howl } from 'howler';

// Local Netflix tudum sound
import tudum from '@/assets/tudum.mp3';

export const netflixSound = new Howl({
  src: [tudum],
  volume: 0.7,
  preload: true,
});

// Helper function to play sound with error handling
export const playSound = (sound: Howl): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      sound.once('end', () => {
        resolve();
      });
      sound.once('loaderror', (id, err) => {
        console.error('Error loading sound:', err);
        reject(err);
      });
      sound.play();
    } catch (error) {
      console.error('Error playing sound:', error);
      reject(error);
    }
  });
};
