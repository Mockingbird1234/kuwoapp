<template>
	<div id="lit_album" class="lit_album">
		<div class="album_all_top" :style="{background:'url('+top_info.pic_v12+')'}">
			<div class="album_top_wrap">
				<div class="album_top">
					<a v-on:click="go_back">
						<img src="static/image/album/album_top_1.png"/>
					</a>
					<span>
						<img src="static/image/album/album_top_2.png"/>
					</span>
				</div>
				<div class="album_center">
					<div class="left">
						<img :src="top_info.pic_v12"/>
					</div>
					<div class="right">
						<p>{{top_info.ListName}}</p>
						<span :title="top_info.info">
							<img :src="top_info.MacDetailPicUrl"/>
							{{top_info.info}}
						</span>
					</div>
				</div>
				<div class="album_foot">
					<span>
						{{date}}
					</span>
					<span>
						收藏
					</span>
				</div>
			</div>
		</div>

		<div class="single_song">
			<ul class="all_top">
				<li class="active_li">
					单曲{{song_num}}
				</li>
				<li>
					评论{{comment_num}}
				</li>
			</ul>
			<ul class="all_songs">
				<!--<li>
					<ul class="lit_ul">
						<li>
							<img src="static/image/album/ul_top_1.png"/>
							全部播放
						</li>
						<li>
							<img src="static/image/album/ul_top_2.png"/>
							全部下载
						</li>
						<li>
							<img src="static/image/album/ul_top_3.png"/>
							多选
						</li>
					</ul>
				</li>-->
				<li v-for="(value,index) in song_list_net">
          <div class="img_left">
              <img v-lazy="'https://y.gtimg.cn/music/photo_new/T002R90x90M000'+value.data.albummid+'.jpg?max_age=2592000'"/>
          </div>
					<div class="all_songs_left left" v-on:click="play_song(value.data.strMediaMid,index,song_list_net)">
						<p>{{value.data.songname}}</p>
            <span v-for="val in value.data.singer">{{val.name}}</span>
					</div>
					<div class="all_songs_right right" v-on:click="show_more(value)">
					  <img src="static/image/album/all_songs_right_1.png"/>
					</div>

				</li>
			</ul>

			<ul class="ul_commend">
				<li>
					<p>114条评论</p>
					<p>最新评论(114)</p>
				</li>
				<li v-for="(value,key) in album_all_comment">
					<div class="ul_commend_l left">
						<img :src="value[0]"/>
					</div>
					<div class="ul_commend_c left">
						<p>{{key}}</p>
						<span>{{value[1]}}</span>
						<p>{{value[2]}}</p>
					</div>
					<div class="ul_commend_r left">
						<img src="static/image/album/album_good_1.png"/>
					</div>
				</li>
			</ul>

		</div>
	 	<div class="album_wrap">

	 	</div>

	 	<div class="album_more">
	 		<div class="swiper-container swiper-container_album">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<div class="sing_div" v-for="(value,key) in album_all">
			        		<img :src="value[0]"/>
			        		<p>{{key}}</p>
			        	</div>

			        </div>
			          <div class="swiper-slide">
			        	<div class="sing_div" v-for="(value,key) in album_all_a">
			        		<img :src="value[0]"/>
			        		<p>{{key}}</p>
			        	</div>
			        </div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
	 		<p class="close">取消</p>
	 	</div>

	</div>
</template>

<script>
  import Vue from 'vue'
	import $ from "jquery"
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css"
  import VueLazyLoad from 'vue-lazyload'
  import {play_music} from "@/assets/play_pause_music"
  Vue.use(VueLazyLoad,{
    loading:'static/image/kuwo.jpg',
  })
export default {
  name: 'album',
    data(){
    	return{
    	"all_songs":{
			"a":["有多少人为你流过泪","莫大人-莫莫日记 2017合辑"],
			"b":["在租的房子里结婚丢人么","莫大人-莫莫日记"],
			"c":["他是不是真的爱你","莫莫日记 2015合辑"],
			"d":["有多少人为你流过泪","莫大人-莫莫日记 2017合辑"],
			"e":["在租的房子里结婚丢人么","莫大人-莫莫日记"],
			"f":["他是不是真的爱你","莫莫日记 2015合辑"],
			"g":["有多少人为你流过泪","莫大人-莫莫日记 2017合辑"],
			"h":["在租的房子里结婚丢人么","莫大人-莫莫日记"],
			"i":["他是不是真的爱你","莫莫日记 2015合辑"],
			"j":["有多少人为你流过泪","莫大人-莫莫日记 2017合辑"],
			"k":["在租的房子里结婚丢人么","莫大人-莫莫日记"],
			"l":["他是不是真的爱你","莫莫日记 2015合辑"],
			"m":["有多少人为你流过泪","莫大人-莫莫日记 2017合辑"],
			"n":["在租的房子里结婚丢人么","莫大人-莫莫日记"],
			"o":["他是不是真的爱你","莫莫日记 2015合辑"],
		},
		"album_all":{
			"下一曲播放":["static/image/album/album_more_1.png","#"],
			"添加到":["static/image/album/album_more_2.png","#"],
			"喜欢":["static/image/album/album_more_3.png","#"],
			"下载":["static/image/album/album_more_4.png","#"],
			"分享":["static/image/album/album_more_5.png","#"],
			"设置彩铃":["static/image/album/album_more_6.png","#"],
			"相似推荐":["static/image/album/album_more_7.png","#"],
			"评论":["static/image/album/album_more_8.png","#"],


		},
		"album_all_a":{
			"查看歌手":["static/image/album/album_more_9.png","#"],
			"歌手信息":["static/image/album/album_more_10.png","#"],
			"相似专辑":["static/image/album/album_more_11.png","#"],
		},
		"album_all_comment":{
			"三开开":["static/image/album/album_comment_1.png","10.54","发个图开开哈哈哈哈哈"],
			"却有力量":["static/image/album/album_comment_1.png","10.50","发个图开开哈哈哈哈哈"],
			"YYwFF":["static/image/album/album_comment_1.png","19.54","发个图开开哈哈哈哈哈"],
			"三开开1":["static/image/album/album_comment_1.png","10.54","发个图开开哈哈哈哈哈"],
			"却有力量2":["static/image/album/album_comment_1.png","10.50","发个图开开哈哈哈哈哈"],
			"YYwFF3":["static/image/album/album_comment_1.png","19.54","发个图开开哈哈哈哈哈"],
			"三开开4":["static/image/album/album_comment_1.png","10.54","发个图开开哈哈哈哈哈"],
			"却有力量5":["static/image/album/album_comment_1.png","10.50","发个图开开哈哈哈哈哈"],
			"YYwFF6":["static/image/album/album_comment_1.png","19.54","发个图开开哈哈哈哈哈"],
		},
        "song_list_net":[],
        "song_num":'0',
        "comment_num":"0",
        "top_info":[],
        "date":""
    	}
    },
  mounted:function(){
    this.method();
  },
  methods:{
  	method(){
      var that=this;
  		$(document).ready(function(){
  			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        var mySwiper_album = new Swiper('.swiper-container_album', {
          direction: 'horizontal',
          pagination : '.swiper-pagination',
          resistanceRatio : 0,

        })
  			//获取url的id
        var type_id=that.$route.params.id;

        //获取qq音乐的banner
        $.ajax({
          type:"get",
          dataType:"json",
          async:false,
          url:"apis/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1482479435&uin=1768385508&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+type_id+"&_=1505813129422",
          success:function(data){
              that.song_list_net=data.songlist;
              that.song_num=data.cur_song_num;
              that.comment_num=data.comment_num;
              that.top_info=data.topinfo;
              that.date=data.date;
              $(".album_all_top").css("background-url",that.top_info.pic_v12)
              allsong=data.songlist;
          }
        });



  			$(".album_more").css("display","none");

  			$(".all_top li").click(function(){
  				$(".all_top li").each(function(){
  					$(this).removeClass("active_li");
  				})
  				$(this).addClass("active_li");
  				var num=$(this).index();
  				switch(num){
  					case 0:
	  					$(".all_songs").css("display","block");
  						$(".ul_commend").css("display","none");
	  				break;
  					case 1:
  						$(".all_songs").css("display","none");
  						$(".ul_commend").css("display","block")
  					break;
  					default:
  					alert("操作有误")
  					break;
  				}
  			})

  			/*$(".all_songs_right").each(function(){
  				$(this).click(function(){
  					$(".album_wrap").fadeIn();
  					//$(".album_more").css("display","block");
  					$(".album_more").slideDown("slow");
  				})
  			})*/

  			$(".close").click(function(){
  				$(".album_wrap").fadeOut();
  				$(".album_more").slideUp("slow");
  			})

  			$(".album_wrap").click(function(){
  				$(".album_wrap").fadeOut();
  				$(".album_more").slideUp("slow");
  			})
  		})
  	},
    show_more(val){
      $(".album_wrap").fadeIn();
      //$(".album_more").css("display","block");
      $(".album_more").slideDown("slow");
    },
    play_song(v,i,a){
      //http://isure.stream.qqmusic.qq.com/203877579.m4a
      play_music(v,i,a);
      songindex=i;
    },
    go_back(){
      this.$router.push({
        path:"/rank"
      })
    }
  }
 }

</script>

<style lang="scss">
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
	#lit_album{
		width: 7.5rem;
		height: auto;

	}
	.album_all_top{
		width: 7.5rem;
		height: 4.3rem;
		background:url(../../../static/image/Hello/one.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
		.album_top_wrap{
			width: 7.5rem;
			height: 4.3rem;
			background: rgba(70,72,76,0.8);
			.album_top{
				height: 1.06rem;
				width: 6.9rem;
				margin: 0 0.3rem;
				a{
					width: 0.4rem;
					height: 1.06rem;
					line-height: 1.06rem;
					display: block;
					float: left;
					img{
						width: 0.3rem;
						height: 0.4rem;
					}
				}
				span{
					display:block;
					float: right;
					width: 0.4rem;
					height: 1.06rem;
					line-height: 1.06rem;
					float: right;
					img{
						width: 0.4rem;
						height: 0.3rem;
					}
				}
			}
		}
	}

	.album_center{
		width: 6.9rem;
		height: 2.25rem;
		padding: 0  0.3rem;
		.left{
			width: 1.78rem;
			height: 2.25rem;
			margin-right: 0.32rem;
			line-height:2.25rem;
			img{
				width: 1.76rem;
				height: 1.76rem;
				vertical-align: middle;
			}
		}
		.right{
			width: 4.8rem;
			height: 1.65rem;
			padding-top: 0.6rem;

			p{
				height: 0.5rem;
				line-height: 0.5rem;
				font-size: 0.3rem;
				color: #FFFFFF;
				font-weight: bold;
			}
			span{
				display: block;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
				font-size: 0.24rem;
				color: #8d8f92;
				margin-top: 0.1rem;
				img{
					width: 0.54rem;
					height: 0.54rem;
					border-radius: 50%;
					overflow: hidden;
					vertical-align: middle;
				}
			}
		}
	}
	.album_foot{
		width: 6.9rem;
		padding: 0 0.3rem;
		height: 1rem;
		line-height: 0.7rem;
		font-size: 0.16rem;
		color: #a6a6ab;
		span:nth-child(1){
			text-align: left;
		}
		span:nth-child(2){

			display: block;
			float: right;
			margin-top: 0.05rem;
			border: 0.02rem solid #b7babf;
			padding: 0 0.26rem;
			font-size: 0.24rem;
			color: #FFFFFF;
		}
	}

	.single_song{
		width: 6.9rem;
		height: auto;
		overflow: auto;
		padding:0 0.3rem ;
		border-bottom: 0.01rem solid #f8f8f8;
		position: relative;
		padding-top: 0.84rem;
		.all_top{
			position: absolute;
			left: 0;
			top: 0;
			width: 6.9rem;
			height: 0.84rem;
			li{
				width: 3.4rem;
				height: 0.84rem;
				float: left;
				margin-right: 0.05rem;
				line-height: 0.84rem;
				text-align: center;
				color: #585858;
				font-size: 0.28rem;
			}
			.active_li{
				color: #22a1f0;
				border-bottom: 0.06rem solid #22a1f0;
			}
		}

		.ul_commend{
			padding-bottom: 1rem;
			display: none;
			width: 6.9rem;
			height: auto;
			li:nth-child(1){
				margin-top: 0.4rem;
				height: auto;
				width: 6.9rem;
				p:nth-child(1){
					font-size: 0.32rem;
					color: #000000;
					font-weight: bold;
				}
				p:nth-child(2){
					font-size: 0.22rem;
					color: #686868;
					line-height: 0.6rem;
				}
			}
			li{
				width: 6.9rem;
				height: auto;
				overflow: hidden;
				padding: 0.2rem 0 0 0;
				.ul_commend_l{
					width: 0.85rem;
					margin-right:0.32rem;
					img{
						width: 0.85rem;
						height: 0.85rem;
						border-radius: 50%;
						overflow: hidden;
						display: block;
					}
				}
				.ul_commend_c{
					width: 5.26rem;
					p:nth-child(1){
						color: #6a6a6a;
						height: 0.52rem;
						line-height: 0.52rem;
						font-size: 0.3rem;

					}
					span{
						display: block;
						color: #6A6A6A;
						font-size: 0.22rem;
					}
					p:nth-child(3){
						color: #000000;
						height: 0.52rem;
						line-height: 0.52rem;
						font-size: 0.3rem;
					}
				}
				.ul_commend_r{
					width: 0.4rem;
					height: 0.7rem;
					line-height: 0.7rem;
					img{
						width: 0.27rem;
						height: 0.27rem;
					}
				}
			}
		}


		.all_songs{
			padding-bottom: 1rem;
			width: 6.9rem;
			height: auto;
			li:nth-child(1){
				line-height: 0.94rem;
				.lit_ul{
					width: 6.9rem;
					height: 0.84rem;
					li{
						width: 1.78rem;
						height: 0.84rem;
						float: left;
						line-height: 0.84rem;
						color: #575755;
						font-size: 0.28rem;
						border-bottom: none;
						img{
							width: 0.28rem;
							height: 0.32rem;
							margin-right: 0.1rem;
						}
					}
					li:last-child{
						width: 1.4rem;
						float: right;
						img{
							width: 0.28rem;
							height: 0.26rem;
						}
					}
				}
			}
			li{
				width: 6.9rem;
				height: 1.32rem;
				border-bottom: 0.01rem solid #f8f8f8;
        .img_left{
          width:1.1rem;
          height:1.3rem;
          margin-right: 0.1rem;
          float: left;
          img{
            float: left;
            margin-top: 0.1rem;
            width:1.1rem;
            height:1.1rem;
          }
        }
				.all_songs_left{
					width: 4.2rem;
					height: 1.32rem;

					p{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
						color: #060503;
						font-size: 0.32rem;
						line-height: 0.6rem;
						margin-top: 0.1rem;

					}
					span{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
						display: inline-block;
            float:left;
            margin-left: .1rem;
						color: skyblue;
						font-size: 0.22rem;
					}
				}
				.all_songs_right{
					width: 0.5rem;
					height: 1.32rem;
					line-height: 1.32rem;
					img{
						width: 0.43rem;
						height: 0.14rem;
					}
				}
			}
		}
	}


.album_wrap{
	display: none;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: rgba(102,102,102,0.8);
}

.album_more{

	width: 7.5rem;
	height: 5.4rem;
	background:#e5e5e5;
	position: fixed;
	left: 0;
	bottom: 0rem;
	z-index: 200;
	.close{
		width: 7.5rem;
		height: 1.06rem;
		border-top: 0.01rem solid #dddddd;
		line-height: 1.06rem;
		text-align: center;
		font-size: 0.32rem;
		color: #000000;
	}
	.swiper-container_album{
		width: 7.5rem;
		height: 4.3rem;
		background: darkgoldenrod;
		overflow: auto;
		.swiper-wrapper{
			width: 7.5rem;
			height: 4.3rem;
			.swiper-slide{
				width: 6.9rem;
				padding: 0 0.3rem;
				height: 4.3rem;
				background: #e5e5e5;
				.sing_div{
					width: 1.7rem;
					height: 2rem;
					float: left;
					img{
						display: block;
						width: 0.64rem;
						height: 0.64rem;
						margin: 0.3rem auto 0;
					}
					p{
						width: 1.6rem;
						height: 0.4rem;
						line-height: 0.6rem;
						color: #777777;
						font-size: 0.3rem;
						text-align: center;
					}
				}
			}
		}
	}
}


</style>
