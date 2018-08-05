
import VimoePlayer from '@vimeo/player';
export default class VMController{
  constructor(videoData){
    var options = {
        id: videoData.id,
        width: videoData.width,
        height:videoData.height,
        autoplay:videoData.isAutoPlay
    };
    const vm = new VimoePlayer(videoData.divID,options);
  }
}
