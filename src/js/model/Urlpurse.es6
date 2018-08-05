export default class URLPurse{
  getIDs(url){
    const ytRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    const vmRegex = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i;
    let videoType = '';
    if (ytRegex.test(url)) {
      videoType = 'youtube'
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length == 11) {
        this.IDs = match[2];
      } else {
        this.IDs = 0;
      }
    }else if(vmRegex.test(url)){
      videoType = 'vimeo';
      const match = url.match(vmRegex);
      if (match && match[1].length == 9) {
        this.IDs = match[1];
      }
      console.log(url.match(vmRegex));
    }else{
      this.IDs = 0;
    }
    return [this.IDs,videoType];
  }

}
