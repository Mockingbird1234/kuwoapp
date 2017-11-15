<template>
  <transition name="slide">
    <div class="gedan">
      <ul>
       <!-- <li v-if="search_song_net" v-for="value in search_song_net">
          <div>
            <img :src="value.imgurl" /><span>{{value.dissname}}</span>
          </div>
          <div>
            <span>{{value.creator.name}}</span>
          </div>
          <div>
            <span>{{value.song_count}}首</span>
          </div>
        </li>-->
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
            remoteplace:'txt.yqq.playlist',
            searchid:119718545532730314,
            flag_qc:0,
            page_no:0,
            num_per_page:21,
            query:name,
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
          url:"apis/soso/fcgi-bin/client_music_search_songlist",
          success:function(data){
            console.log(data)
           // that.search_song_net=data.data.list;

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
  .gedan{
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
          img{
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }
</style>

