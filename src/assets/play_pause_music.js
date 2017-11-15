//播放歌曲或者mv
import $ from 'jquery'
let audio=document.createElement("audio");



//播放音乐
//g单首歌的mid,i点击的索引，a所有的歌曲列表，b是播放下一首还是上一首,c来自哪个播放列表
function play_music(g,i,a,b) {
  if(b=='p'){
    i--;
    if(i<0){
      i=0;
    }
  }else if(b=='n'){
    i++;
    if(i>(a.length-1)){
      i=a.length-1;
    }
  }
  songindex=i;
  //$(".danqu li").eq(songindex).addClass("li_ac").siblings().removeClass("li_ac");
  let v=null;
  if(a[i].mid){
    v=a[i].mid;
  }else{
    v=a[i].data.strMediaMid;
  }
  //let v=a[i].mid;
   $.ajax({
      type:"get",
      dataType:"json",
      data:{
        g_tk:"5381",
        // jsonpCallback:MusicJsonCallback24179609442410954,
        loginUin:0,
        hostUin:0,
        format:"json",
        inCharset:"utf8",
        outCharset:"utf-8",
        notice:0,
        platform:"yqq",
        needNewCode:0,
        cid:"205361747",
        //callback:"MusicJsonCallback24179609442410954",
        uin:"0",
        songmid:v,
        filename:"C400"+v+".m4a",
        guid:"4301137404"
      },
      async:false,
      url:"apis/base/fcgi-bin/fcg_music_express_mobile3.fcg",
      success:function(data){
        var vkey=data.data.items[0].vkey;
        audio.src="http://dl.stream.qqmusic.qq.com/C400"+v+".m4a?vkey="+vkey+"&guid=4301137404&uin=0&fromtag=66";
        audio.volume = 0.5;
        audio.play();
        $("#foot img").eq(2).attr("src","static/image/footer_6.png");
        if(a[i]&&a[i].name){
          let src='https://y.gtimg.cn/music/photo_new/T002R90x90M000'+a[i].album.mid+'.jpg?max_age=2592000';
          $("#foot li").eq(1).html(a[i].name);
          $("#foot img").eq(0).attr("src",src);
        }else{
          $("#foot li").eq(1).html(a[i].data.songname);
          let src='https://y.gtimg.cn/music/photo_new/T002R90x90M000'+a[i].data.albummid+'.jpg?max_age=2592000';
          $("#foot img").eq(0).attr("src",src);
        }

      }
    });

}
//暂停音乐
function pause_music(g,i,a) {
  if(audio.paused){
    if(!audio.src){
      play_music(g,i,a)
    }else{
      audio.play()
      $("#foot img").eq(2).attr("src","static/image/footer_6.png")
    }
  }else{
    audio.pause();
    $("#foot img").eq(2).attr("src","static/image/footer_2.png")
  }
}

//展示详细内容
/*function show_detail(i,a){

}*/
export {play_music,pause_music}
