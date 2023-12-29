import { useState, useRef, useEffect } from 'react';
import { createAudioplayer } from './audioplayer';

function useAudioPlayer(playlist) {
  const [playerState, setPlayerState] = useState({
    currentTrackMetadata: null,
    currentTrackDuration: null,
    currentTrackPlaybackPosition: null,
    playbackState: 'PAUSED',
    repeat: false,
    shuffle: false,
  });

  const playerRef = useRef(null);

  useEffect(() => {
    const newPlayer = createAudioplayer(playlist, setPlayerState);
    playerRef.current = newPlayer;

    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  function setPlaybackPosition(position) {
    playerRef.current && playerRef.current.setPlaybackPosition(position);
  }

  function toggleShuffle() {
    playerRef.current && playerRef.current.toggleShuffle();
  }

  function toggleRepeat() {
    playerRef.current && playerRef.current.toggleRepeat();
  }

  function togglePlayPause() {
    playerRef.current && playerRef.current.togglePlayPause();
  }

  function playNextTrack() {
    playerRef.current && playerRef.current.playNextTrack();
  }

  function playPreviousTrack() {
    playerRef.current && playerRef.current.playPreviousTrack();
  }

  function cleanup() {
    playerRef.current && playerRef.current.cleanup();
  }

  function playSelectedTrack(index) {
    playerRef.current && playerRef.current.playTrackByIndex(index);
  }

  return {
    setPlaybackPosition,
    playerState,
    playSelectedTrack,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
  };
}

export default useAudioPlayer;
