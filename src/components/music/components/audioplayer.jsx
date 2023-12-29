import React from 'react';
import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import useAudioPlayer from '../audioplayer/hooks';
import playlist from '../playlist/playlist.js';
import { BsFileMusic } from 'react-icons/bs';

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playSelectedTrack, // Tambahkan fungsi baru
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress() {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  function formatTime(timeInSeconds) {
    if (timeInSeconds === null) return '';
    const numberOfMinutes = Math.floor(timeInSeconds / 60);
    const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
    const minutes = `${numberOfMinutes}`.padStart(2, '0');
    const seconds = `${numberOfSeconds}`.padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Fungsi untuk memainkan lagu berdasarkan judul
  // Fungsi untuk memainkan lagu berdasarkan judul
  const playSongByTitle = (title) => {
    const selectedTrack = playlist.find(
      (track) => track.metadata.title === title
    );
    if (selectedTrack) {
      const selectedTrackIndex = playlist.indexOf(selectedTrack);
      playSelectedTrack(selectedTrackIndex);
    }
  };

  return (
    <div className='flex flex-col items-center '>
      <SongInfo
        title={currentTrackMetadata?.title}
        artist={currentTrackMetadata?.artist}
        coverArtSrc={currentTrackMetadata?.coverArtSrc}
      />
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      <Controls
        shuffle={shuffle}
        repeat={repeat}
        onShuffleClick={toggleShuffle}
        onRepeatClick={toggleRepeat}
        onPrevClick={playPreviousTrack}
        onNextClick={playNextTrack}
        onPlayClick={togglePlayPause}
        isPlaying={playbackState === 'PLAYING'}
      />
      {/* Tampilkan daftar lagu dan tambahkan onClick untuk memainkan lagu */}
      <ul className='self-start pt-10'>
        <p className='text-ternary-dark dark:text-ternary-light text-2-lg pb-2 '>
          Most My Favorite Music So Far :
        </p>
        {playlist.map((track) => (
          <li
            key={track.metadata.title}
            className={`cursor-pointer p-1 rounded-md mb-1 flex items-center ${
              playerState.currentTrackMetadata?.title ===
                track.metadata.title && playerState.playbackState === 'PLAYING'
                ? 'bg-ternary-dark text-ternary-light dark:border-[1px] dark:border-ternary-light' // atau kelas warna merah lainnya
                : 'bg-gray-200'
            }`}
          >
            <BsFileMusic className='mr-2' />
            <span onClick={() => playSongByTitle(track.metadata.title)}>
              {track.metadata.title} - {track.metadata.artist}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
