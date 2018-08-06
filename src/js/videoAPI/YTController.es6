export default class YTController{
  constructor(videoData){
    this.player = new YT.Player(videoData.divID,{
      videoId: videoData.id,
      playerVars:{
        autoplay:videoData.isAutoPlay
      },
      width: videoData.width,
      height:videoData.height,
    });
  }
}
