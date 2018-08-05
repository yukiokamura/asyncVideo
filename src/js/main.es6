import YTController from './videoAPI/YTController.es6';
import VMController from './videoAPI/VMController.es6';
import URLPurse from './model/Urlpurse.es6';

class AsyncVideo {
  constructor(calssName = 'video-async'){
    this.isYoutube = false;
    this.target =  document.getElementsByClassName( "video-async" );
    this.videoData = [];
    const urlPurse = new URLPurse();

    for (const item of this.target){
      const [ids,videoType] = urlPurse.getIDs(this.get_dataURL(item,'videoUrl'));
      console.log(ids,videoType);
      const allowAutoPlay = this.get_dataURL(item,'videoAllowAutoplay') || 0;
      if (!this.isYoutube && videoType == 'youtube') {
        this.isYoutube = true;
      }
      console.log(allowAutoPlay);
      const r = this.get_randomID();
      const videoData = {
        videoType : videoType,
        id:ids,
        divID:r,
        isAutoPlay : allowAutoPlay,
        width:item.clientWidth,
        height:item.clientHeight
      }
      this.setInner(item,r);
      this.videoData.push(videoData);

    }
    console.log(this.isYoutube);
    if (this.isYoutube) {
      this.embedYTTag();
    }

    //window load event
    window.onload = ()=>{
      for (const item of this.videoData) {
        if (item.videoType == 'youtube') {
          const ytController = new YTController(item);
        }else if(item.videoType == 'vimeo'){
          const vmController = new VMController(item);
        }
      }
    }


  }

  get_dataURL(element = false,key='videoUrl'){
    if (!element) return false;
    return element.dataset[key];
  }

  setInner(element = false,divID){
    if (!element) return false;

    element.insertAdjacentHTML('afterbegin',
      `<div class="video-async--inner" id="${divID}"></div>`
    );
  }

  get_randomID(){
    const l = 8;
    const c = 'abcdefghijklmnopqrstuvwxyz';
    const cl = c.length;
    let r = '';
    for(var i=0; i<l; i++){
      r += c[Math.floor(Math.random()*cl)];
    }
    return r;
  }


  embedYTTag(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

const a = new AsyncVideo();
