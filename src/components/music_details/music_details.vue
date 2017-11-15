<template>
  <transition name="slide">
    <div class="music_details">
      <div class="music_top">
          <a v-on:click="go_back">
           &lt;
          </a>
          <span v-if="singlesong.name">
            {{singlesong.name}}
        </span>
        <span v-else-if="singlesong.data">
            {{singlesong.data.songname}}
        </span>
      </div>
      <div class="music_singer">
        <span v-if="singlesong.name" v-for="val in singlesong.singer">
          {{val.name}}
        </span>
        <span v-else-if="singlesong.data" v-for="val in singlesong.data.singer">
          {{val.name}}
        </span>
      </div>
      <div class="music_ly">
        <ul>
          <li v-if="search_song_net" v-for="value in search_song_net">
            <h4>{{value.songname}}</h4>
            <p v-html="filterline(value.content)"></p>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import $ from "jquery";
  export default {
    name: 'music_details',
    data(){
      return {
          allsong:allsong,
        songindex:songindex,
        singlesong:{},
        search_song_net:[]
      }
    },
    mounted:function(){
      this.method();
      this.getData();
    },
    watch: {

    },
    updated:function(){

    },
    methods:{
      method(){
        $(document).ready(function(){
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

        })
      },
      filterline(value){
        var arr=value.split('\\n').join('<br />');
        return arr;
      },
      getData(){
        let that=this;
        let	name=this.$route.params.SONGNAME;
        let name2="";
        this.singlesong=allsong[songindex];
        if("data" in this.singlesong){
          name2=this.singlesong.data.songname
        }else if("name" in this.singlesong){
          name2=this.singlesong.name
        }
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
            w:name2,
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
            that.search_song_net=data.data.lyric.list;
          }
        });

      },
      go_back(){
        this.$router.push({
          path:"/"
        })
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
  /*reset*/
  body,html,p,h1,h2,h3,h4,h5,ul,li,dl,dt,dd,input,table,img{
    margin: 0;
    padding: 0;

  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    vertical-align: middle;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  body,html{
    width: 7.5rem;
    height: auto;
    font-family: "微软雅黑"
  }
  .music_details{
    padding-left: 0.2rem;
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
    .music_top{
      width: 7.5rem;
      height: 0.9rem;
      line-height: 0.9rem;
      color: #FFFFFF;
      font-size: 0.48rem;
      text-align:center;
      a{
        width: 0.24rem;
        height: 0.9rem;
        display: block;
        float: left;
        color: #666;
        font-size:0.8rem;
        img{
          width: 0.24rem;
          height: 0.38rem;
          display: block;
          float: left;
          margin-top: 0.28rem;
        }
      }
      span{
        color: #666;
      }

    }
    .music_singer{
      width:7.5rem;
      height: auto;
      text-align: center;
      color: #666;
      font-size:0.38rem;
    }
  }

</style>
