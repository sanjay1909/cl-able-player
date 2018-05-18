import ableplayer from 'ableplayer';
import ttml2webvtt from './ttml2webvtt';

const AblePlayer = window.AblePlayer;

AblePlayer.prototype.ttml2webvtt = ttml2webvtt;

export {
  AblePlayer as default
};