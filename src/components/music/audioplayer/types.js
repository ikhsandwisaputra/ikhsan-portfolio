/* === Playlist & Track === */
const Playlist = [];

const Track = {
  audioSrc: '',
  metadata: {
    artist: '',
    title: '',
    coverArtSrc: '',
  },
};

/* === Controls === */
const Controls = {
  setPlaybackPosition: (position) => {
    // implementation
  },
  toggleShuffle: () => {
    // implementation
  },
  toggleRepeat: () => {
    // implementation
  },
  togglePlayPause: () => {
    // implementation
  },
  playNextTrack: () => {
    // implementation
  },
  playPreviousTrack: () => {
    // implementation
  },
  cleanup: () => {
    // implementation
  },
};

/* === Playerstate === */
const PlayerState = {
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  currentTrackMetadata: {
    artist: '',
    title: '',
    coverArtSrc: '',
  },
  playbackState: 'PAUSED',
  repeat: false,
  shuffle: false,
};

const PlaybackState = 'PLAYING';

const InitialPlayerState = {
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  currentTrackMetadata: null,
  playbackState: 'PAUSED',
  repeat: false,
  shuffle: false,
};
