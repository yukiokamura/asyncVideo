export default class YTController{
  constructor(videoData){
    const player = new YT.Player(videoData.divID,{
      width:videoData.width,
      height:videoData.height,
      videoId: videoData.id,
      playerVars: { 'autoplay': videoData.isAutoPlay },
    })
  }
}
