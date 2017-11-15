<template>
  <transition name="slide">
    <div class="mv">
      <ul>
        <li v-if="search_song_net" v-for="value in search_song_net">
            <img :src="value.mv_pic_url" />
          <p><span>{{value.mv_name}}</span>-{{value.singer_name}}</p>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  import $ from "jquery";
  export default {
    name: 'mv',
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
            remoteplace:'txt.yqq.mv',
            searchid:132350568334679257,
            aggr:0,
            catZhida:1,
            lossless:0,
            sem:1,
            t:12,
            p:1,
            n:20,
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
            that.search_song_net=data.data.mv.list;
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
  .mv{
    width: 6.9rem;
    height: auto;
    overflow: hidden;
    ul{
      width: 6.9rem;
      height: auto;
      overflow: hidden;
      li{
        border-bottom: 0.01rem solid #f9f9f9;
        padding: 0.26rem 0;
        position: relative;
        width:3rem;
        height: 3.4rem;
        float: left;
        margin:0 0.2rem 0.2rem;
        img{
          width:3rem;
          height: 3rem;
          border-radius: 2%;
        }
        p{
          width: 3rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #999;
          font-size:0.26rem;
          span{
            color: #000;
          }
        }
      }
    }
  }
</style>
