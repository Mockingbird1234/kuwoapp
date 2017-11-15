<template>
  <transition name="slide">
	  <div class="danqu">
		<ul>
			<li v-if="search_song_net" v-for="(value,index) in search_song_net" v-on:click="play_song(value.mid,index,search_song_net)">
				<p v-html="value.title_hilight">
				</p>
				<p>
					<span v-html="value.singer[0].name"></span>-<span v-html="value.album.name"></span>
				</p>
			</li>
		</ul>
	</div>
  </transition>
</template>

<script>
import $ from "jquery";
import {play_music} from '@/assets/play_pause_music'
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
      $(".details_top_ul li").eq(0).addClass("details_top_active").siblings().removeClass("details_top_active");
      $.ajax({
        type:"get",
        dataType:"json",
        data:{
          ct:24,
          qqmusic_ver:1298,
          new_json:1,
          remoteplace:"txt.yqq.song",
          searchid:65252166870481381,
          t:0,
          aggr:1,
          cr:1,
          catZhida:1,
          lossless:0,
          flag_qc:0,
          p:1,
          n:20,
          w:name,
          g_tk:5381,
          loginUin:0,
          hostUin:0,
          format:"json",
          inCharset:"utf8",
          outCharset:"utf-8",
          notice:0,
          platform:"yqq",
          needNewCode:0,
        },
        url:"apis/soso/fcgi-bin/client_search_cp",
        success:function(data){
          that.search_song_net=data.data.song.list;
          allsong=that.search_song_net;
          console.log(allsong)
          that.$nextTick(function () {
            //$(".danqu li").eq(songindex).addClass("li_ac").siblings().removeClass("li_ac");
          })

        }
      });

  	},
    play_song(v,index,allsong){
      //创建一个音乐播放器
      play_music(v,index,allsong);
      songindex=index;
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

	.danqu{
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
        color: #535353;
        p{
					font-size: 0.24rem;
          em{
            font-style: normal;
          }
				}
				p:nth-child(1){
					font-size: 0.32rem;
					img{
						width: 0.65rem;
						height: 0.23rem;
						vertical-align: middle;
						margin-left: 0.16rem;
					}
				}
			}
      .li_ac{
        color: skyblue;
      }

		}
	}
</style>
