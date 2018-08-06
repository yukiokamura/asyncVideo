# README

no jQuery


usege


```
<script src="./js/asyncVideo.js"></script>

</head>
```

以下のdivを作成します。

```
 <div class="video-async" data-video-url="yourURL" data-video-allow-autoplay=0></div>
```

DOM完成後に以下の関数を読みます。

```
window.onload = ()=>{
  asyncVideo();
}
```

クラス名を独自にしたいときは以下の様にして読み込みます。

```
window.onload = ()=>{
  asyncVideo('yourClassname');
}
```



