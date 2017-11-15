<template>
  <transition name="slide">
    <div class="geshou">
      <ul>
         <li v-if="search_song_net" v-for="value in search_song_net">
            <h4>{{value.songname}}</h4>
            <p v-html="filterline(value.content)"></p>
         </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  import $ from "jquery";
  export default {
    name: 'gedan',
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
    methods:{
      method(){
        $(document).ready(function(){
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        })
      },
      getData(){
        let that=this;
        let	name=this.$route.params.SONGNAME;
        $.ajax({
          type:"get",
          dataType:"json",
          data:{
            ct:24,
            qqmusic_ver:1298,
            remoteplace:'txt.yqq.lyric',
            searchid:99294532935141196,
            aggr:0,
            catZhida:1,
            lossless:0,
            sem:1,
            t:7,
            p:1,
            n:10,
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
            console.log(data)
             that.search_song_net=data.data.lyric.list;
          }
        });

      },
      filterline(value){
        var arr=value.split('\\n').join('<br />');
        return arr;
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
  .geshou{
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
        h4{
          width: 6.9rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          color: deepskyblue;
          font-size:0.4rem;
        }
        p{
          height: auto;
          font-size:0.32rem;
          padding: 0.5rem;
          line-height: 0.6rem;
        }
      }
    }
  }
</style>

