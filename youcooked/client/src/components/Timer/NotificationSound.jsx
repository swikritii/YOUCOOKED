import { useCallback } from 'react';

const NotificationSound = () => {
  const playSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create a bell-like sound using oscillator
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set frequency to high bell tone
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      // Set envelope: attack quickly, decay over 0.5 seconds
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
      
      // Add a second harmonic for richer sound
      const oscillator2 = audioContext.createOscillator();
      const gainNode2 = audioContext.createGain();
      
      oscillator2.connect(gainNode2);
      gainNode2.connect(audioContext.destination);
      
      oscillator2.frequency.value = 1200; // Higher frequency
      oscillator2.type = 'sine';
      
      gainNode2.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator2.start(audioContext.currentTime);
      oscillator2.stop(audioContext.currentTime + 0.5);
      
    } catch (error) {
      console.error('Error playing notification sound:', error);
    }
  }, []);

  return { playSound };
};

export default NotificationSound;
