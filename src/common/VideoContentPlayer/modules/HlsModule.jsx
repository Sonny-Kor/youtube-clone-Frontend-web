import React, { useEffect, useRef, useState } from 'react';

import ReactPlayer from 'react-player';

import { qualityIdYoutube } from './CommonModule';

import classNames from 'classnames/bind';
const cx = classNames;

/**
 * 
 * @param {{className: string, videoId: string, domain: string, startTime: number, endTime: number, handlers: import('./CommonModule').VideoContentHandlers }} props 
 * @returns {JSX.Element}
 */
function HlsPlayer ({
  className = '',
  videoId = '',
  domain = '',
  startTime = 0,
  endTime,
  handlers = {
  onReady: () => {},
  onPlay: () => {},
  onPlaying: () => {},
  onPause: () => {},
  onOnline: () => {},
  onOffline: () => {}}, ...rest
}) {
  const [embed, setEmbed] = useState(null);
  const [player, setPlayer] = useState(null);

  const playerRef = useRef();

  const _onPlay = e => {
    handlers.onPlay(e);
  }
  const _onPlaying = e => {
    handlers.onPlaying(e);
  }
  const _onPause = e => {
    handlers.onPause(e);
  }
  const _onOnline = e => {
    handlers.onOnline(e);
  }
  const _onOffline = e => {
    handlers.onOffline(e);
  }

  useEffect(() => {
    const _embed = <ReactPlayer ref={playerRef} id={`streamembed_${videoId}`} className={cx('player', 'hls', className)} url={videoId} 
      width="100%"
      height="100%"
      controls={false}
      onReady={e => {setPlayer(playerRef.current.getInternalPlayer())}}
      onPlay={_onPlaying} 
      onPause={_onPause}  /*
      onEnd={func} 
      onError={func} 
      onStateChange={func} 
      onPlaybackRateChange={func} 
      onPlaybackQualityChange={func}*/
    />;
    setEmbed(_embed);
  }, [className, videoId]);

  useEffect(() => {
    if (player) {
      /** @type {HTMLVideoElement} */
      const _player = player;
      console.log(player)

      handlers.onReady({
        play: () => _player.play(),
        pause: () => _player.pause(),
        setMuted: muted => _player.muted = muted,
        getMuted: () => _player.muted,
        setVolume: val => _player.volume = val / 100,
        getVolume: () => _player.volume * 100,
        seek: timestamp => _player.currentTime = timestamp,
        getCurrentTime: () => _player.currentTime,
        getDuration: () => _player.duration || 0,
        setQuality: quality => {},
        getQuality: () => ({label: "원본 화질", value: ''}),
        getQualities: () => ([]),
      });
    }
  }, [player]);

  return embed;
};

export default HlsPlayer;