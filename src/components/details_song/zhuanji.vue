<template>
  <transition name="slide">
    <div class="zhuanji">
      <ul>
        <li v-if="search_song_net" v-for="value in search_song_net">
         <div>
           <img :src="value.albumPic" /><span>{{value.albumName}}</span>
         </div>
         <div>
           <span>{{value.singerName}}</span>
         </div>
         <div>
           <span>{{value.publicTime}}</span>
         </div>
       </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  import $ from "jquery";
  export default {
    name: 'danqu',
    data(){
      return {
        "search_song_net":[],
      }
    },
    mounted:function(){
      this.method();
      this.getData();

    },
    watch: {
      '$route' (to, from) {
        this.method();
        this.getData();
      }
    },
    updated:function(){

    },
    methods:{
      method(){
        $(document).ready(function(){
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        })
      },
      getData(){
        let that=this;
        let	name=this.$route.params.SONGNAME
        $.ajax({
          type:"get",
          dataType:"json",
          data:{
            ct:24,
            qqmusic_ver:1298,
            remoteplace:'txt.yqq.album',
            searchid:75509296080037949,
            aggr:0,
            catZhida:1,
            lossless:0,
            sem:10,
            t:8,
            p:1,
            n:30,
            w:name,
            g_tk:5381,
            loginUin:0,
            hostUin:0,
            format:'json',
            inCharset:'utf8',
            outCharset:'utf-8',
            notice:0,
            platform:'yqq',
            needNewCode:0
          },
          url:"apis/soso/fcgi-bin/client_search_cp",
          success:function(data){
            that.search_song_net=data.data.album.list
            console.log(that.search_song_net)
          }
        });

      }

    }
  }
</script>

<style lang="scss">
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
  }
  .zhuanji{
    width: 6.9rem;
    height: auto;
    overflow: hidden;
    ul{
      width: 6.9rem;
      height: auto;
      overflow: hidden;
      li{
        border-bottom: 0.01rem solid #f9f9f9;
        padding: 0.1rem 0;
        position: relative;
        display: flex;
        div{
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size:0.24rem;
          color: #666;
          text-align: left;
          line-height: 1rem;
          img{
            width: 1rem;
            height: 1rem;
            margin-right: 0.2rem;
            border-radius: 4%;
          }
        }
      }
    }
  }
</style>
