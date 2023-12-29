import trackOne from './songs/lace-it.mp3'
import trackTwo from './songs/I Wanna Be Yours.mp3';
import trackThree from './songs/hey-jude.mp3';
import trackFour from './songs/Whatever.mp3';
import trackFive from './songs/Wonderwall.mp3';
import trackSix from './songs/gods.mp3';
import trackSeven from './songs/penjaga-hati.mp3';
import trackEight from './songs/505.mp3';
import trackNine from './songs/fix-you.mp3';
import trackTen from './songs/life-goes-on.mp3';

import coverArtOne from './cover-art/1.jpg';
import coverArtTwo from './cover-art/2.png';
import coverArtThree from './cover-art/3.png';
import coverArtFour from './cover-art/4.png';
import coverArtFive from './cover-art/5.png';
import coverArtSix from './cover-art/6.png';
import coverArtSeven from './cover-art/7.png';
import coverArtEight from './cover-art/8.png';

const playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: 'Lace It',
      artist: 'Juice WRLD, Eminem, benny blanco',
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: 'I Wanna Be Yours',
      artist: 'Artict Monkeys',
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: 'Hey Jude',
      artist: 'The Beatles',
      coverArtSrc: coverArtThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: 'Whatever',
      artist: 'Oasis',
      coverArtSrc: coverArtFour,
    },
  },
  {
    audioSrc: trackFive,
    metadata: {
      title: 'Wonderwall',
      artist: 'Oasis',
      coverArtSrc: coverArtFour,
    },
  },
  {
    audioSrc: trackSix,
    metadata: {
      title: 'Gods',
      artist: 'Aespa',
      coverArtSrc: coverArtFive,
    },
  },
  {
    audioSrc: trackSeven,
    metadata: {
      title: 'Penjaga Hati',
      artist: 'Nadhif Basalamah',
      coverArtSrc: coverArtSix,
    },
  },
  {
    audioSrc: trackEight,
    metadata: {
      title: '505',
      artist: 'Artict Monkeys',
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackNine,
    metadata: {
      title: 'Fix You',
      artist: 'Coldplay',
      coverArtSrc: coverArtSeven,
    },
  },
  {
    audioSrc: trackTen,
    metadata: {
      title: 'Life Goes On',
      artist: 'BTS',
      coverArtSrc: coverArtEight,
    },
  },
];

export default playlist;
