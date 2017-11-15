<template>
	<div id="Song">
		<div class="song_top">
		  	<ul class="song_top_ul">
		  		<li>
		  			<a href="">
		  				<img src="static/image/My/login.png"/>
		  			</a>
		  		</li>
		  		<li>
		  			<a href="">
		  				<p>登陆</p>
		  			<span>唱出最酷的自我</span>
		  			</a>
		  			
		  		</li>
		  		<li>
		  			<a href="">
		  				<img src=""/>
		  				点歌
		  			</a>
		  		</li>
		  	</ul>
		  </div>
	
		<div class="swiper-container swiper-container_song">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(value, key) in song_top">
			        	<a :href="value[1]">
			        		<img :src="value[0]"/>
			        	</a>
			        </div>
		    </div>
		</div>
		<div class="song_friend">
			<ul class="song_friend_ul">
				<li v-for="(value,key) in song_friend">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<p>{{key}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="hot_work">
			<h2>热门作品<span>看榜单&gt;</span></h2>
			<ul>
				<li v-for="(value,key) in hot_work">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<p>{{key}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="song_sing">
			<h2>唱将榜<span>全部&gt;</span></h2>
			<ul>
				<li v-for="(value,key) in song_sing">
					<a :href="value[1]">
						<div class="song_sing_l">
							<img :src="value[0]"/>
						</div>
						<div class="song_sing_c">
							<p>{{key}}</p>
							<span>{{value[2]}}</span>
						</div>
						<div class="song_sing_r">
							<img src="static/image/Song/song_sing_1.jpg"/>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="song_sing">
			<h2>新秀榜<span>全部&gt;</span></h2>
			<ul>
				<li v-for="(value,key) in new_star">
					<a :href="value[1]">
						<div class="song_sing_l">
							<img :src="value[0]"/>
						</div>
						<div class="song_sing_c">
							<p>{{key}}</p>
							<span>{{value[2]}}</span>
						</div>
						<div class="song_sing_r">
							<img src="static/image/Song/new_star_1.jpg"/>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="hot_work vulgar_tycoon">
			<h2>土豪榜<span>去围观&gt;</span></h2>
			<ul>
				<li v-for="(value,key) in vulgar_tycoon">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<p>{{key}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="song_sing song_works">
			<h2>作品精选集<span>全部&gt;</span></h2>
			<ul>
				<li v-for="(value,key) in new_star">
					<a :href="value[1]">
						<div class="song_sing_l">
							<img :src="value[0]"/>
						</div>
						<div class="song_sing_c">
							<p>{{key}}</p>
							<span>{{value[2]}}</span>
						</div>
						<div class="song_sing_r">
							<img src="static/image/Song/new_star_1.jpg"/>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="song_match">
			<h2>比赛<span>全部&gt;</span></h2>
			<div class="swiper-container swiper-container_match">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="(value, key) in song_top">
				        	<a :href="value[1]">
				        		<img :src="value[0]"/>
				        	</a>
				        </div>
				     
			    </div>
			       <div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="song_foot">
			<p>意见建议请联系官方QQ:1768385508</p>
			<p>自荐作品请发邮箱:1768385508@qq.com</p>
			<p>点击可复制</p>
		</div>
	</div>
</template>

<script>
	export default{
  name: 'Song',
  data(){
  	return {
		"song_top":{
			"a":["static/image/Song/song_top_1.jpg","#"],
			"b":["static/image/Song/song_top_1.jpg","#"],
			"c":["static/image/Song/song_top_1.jpg","#"],
		},
		"song_friend":{
			"好友动态":["static/image/Song/song_friend_1.png","#"],
			"K歌比赛":["static/image/Song/song_friend_2.png","#"],
			"伐木累":["static/image/Song/song_friend_3.png","#"],
		},
		"hot_work":{
			"刚好遇见你":["static/image/Song/hot_work_1.jpg","#"],
			"花一样的姑娘":["static/image/Song/hot_work_2.jpg","#"],
			"光年之外":["static/image/Song/hot_work_3.jpg","#"],
		},
		"song_sing":{
			"聆听":["static/image/Song/song_sing_2.png","#","爱情三十六计"],
			"因为爱&":["static/image/Song/song_sing_3.png","#","刚好遇见你"],
			"花心丫头":["static/image/Song/song_sing_4.png","#","思美人兮"],
		},
		"new_star":{
			"小桔灯Vm":["static/image/Song/song_sing_2.png","#","一首简单的歌"],
			"萌萌鹿&":["static/image/Song/song_sing_3.png","#","刚好遇见你"],
			"思念是美丽的孤独":["static/image/Song/song_sing_4.png","#","永远放在心底"],
		},
		"vulgar_tycoon":{
			"飞虎":["static/image/Song/hot_work_1.jpg","#"],
			"蔡少":["static/image/Song/hot_work_2.jpg","#"],
			"流年":["static/image/Song/hot_work_3.jpg","#"],
		},
  	}
  },
  mounted:function(){
       
  }
  }
</script>

<style lang="scss">

	@mixin font-big{
		font-size: 0.32rem;
		font-weight: bold;
		color: #000000;
	}
	@mixin font-small{
		font-size: 0.24rem;
		color: #797979;
	}
	
	@mixin padding-section{
		width: 6.9rem;
		padding: 0 0.3rem;
	}
	@mixin gradient{
		 background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		  background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		  background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		  background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}
	#Song{
		width: 7.5rem;
		height: auto;
		background: #FFFFFF;
	}
	.song_top{
		width: 6.9rem;
		padding: 0 0.3rem;
		height: 1.88rem;
		.song_top_ul{
			width: 6.9rem;
			height: 1.88rem;
			li{
				float: left;
			}
			li:nth-child(1){
				width: 0.9rem;
				height: 1.88rem;
				line-height: 1.88rem;
				a{
					@include font-big;
					display: block;
					width: 0.9rem;
					height: 1.88rem;
					line-height: 1.88rem;
				}
				img{
					width: 0.9rem;
					height: 0.9rem;
					border-radius: 50%;
					overflow: hidden;				
					
				}
			}
			li:nth-child(2){
				width: 4.22rem;
				height: 1.88rem;
				margin-left: 0.3rem;
				a{
					@include font-big;
					display: block;
					p{
						@include font-big;
						height: 0.5rem;
						margin-top: 0.56rem;
					}
					span{
						@include font-small;
					}
				}
			}
			li:nth-child(3){
				width: 1.48rem;
				height: 1.88rem;
				a{
					display: block;
					width: 1.48rem;
					height: 0.54rem;
					background: #1d9fed;
					color: #FFFFFF;
					font-size: 0.26rem;
					line-height: 0.54rem;
					text-align: center;
					margin-top: 0.66rem;
				}
			}
		}
		
	}
	
	
	.swiper-container_song{
		width: 7.5rem;
		height: 2.08rem;
		.swiper-slide{
			width: 7.2rem;
			margin-right: 0.3rem;
			a{
				width: 7.2rem;
				height: 2.06rem;
				display: block;
				img{
					@extend a;
				}
			}
		}
	}
	
	.song_friend{
		@include padding-section;
		height: 1.82rem;
		padding-bottom:0.5rem;
		
		ul{
			width: 6.9rem;
			height: 1.82rem;
			li{
				width: 1.92rem;
				height: 1.8rem;
				margin: 0 0.16rem;
				float: left;
				a{
					width: 1.92rem;
					height: 1.8rem;
					display: block;
					text-align: center;
					img{
						width: 0.76rem;
						height: 0.76rem;
						border-radius: 50%;
						overflow: hidden;
						display: inline-block;
					}
					p{
						@include font-big;
						line-height: 0.7rem;
						height: 0.7rem;
					}
				}
			}
		}
	}
	
	
	.hot_work{
		@include padding-section;
		@include gradient;
		height: auto;
		h2{
			@include font-big;
			width: 6.9rem;
			height: 1.3rem;
			line-height: 1.3rem;
			text-align: center;
			span{
				@include font-small;
				display: inline-block;
				float: right;
				
			}
		}
		ul{
			width: 6.9rem;
			height: 3.1rem;
			li{
				width:2.24rem;
				height: 3.1rem;
				float: left;
				margin: 0 0.03rem;
				a{
					width: 2.24rem;
					height: 3.1rem;
					display: block;
					img{
						display: inline-block;
						width: 2.22rem;
						height: 2.22rem;
						
					}
					p{
						@include font-big;
						width: 2.22rem;
						height: 0.86rem;
						line-height: 0.86rem;
						text-align: left;
					}
				}
			}
		}
		
	}
	.song_sing{
		@include padding-section;
		@include gradient;
		height: auto;
		h2{
			@include font-big;
			width: 6.9rem;
			height: 1.3rem;
			line-height: 1.3rem;
			text-align: center;
			span{
				@include font-small;
				display: inline-block;
				float: right;
				
			}
		}
		ul{
			width: 6.9rem;
			height: 4rem;
			li{
				width: 6.9rem;
				height: 1.28rem;
				a{
					width: 6.9rem;
					height: 1.28rem;
					display: block;
					div{
						float: left;
					}
					.song_sing_l{
						height: 1.28rem;
						width: 0.86rem;
						margin-right: 0.22rem;
						img{
							display: block;
							margin-top: 0.1rem;
							width: 0.86rem;
							height: 0.86rem;
							border-radius: 50%;
							overflow: hidden;
						}
					}
					.song_sing_c{
						height: 1.28rem;
						width: 4.88rem;
						p{
							@include font-big;
							height: 0.6rem;
							line-height: 0.6rem;
							
						}
						span{
							@include font-small;
							display: block;
						}
					}
					.song_sing_r{
						height: 1.28rem;
						width: 0.94rem;
						img{
							width: 0.94rem;
							height: 0.24rem;
							vertical-align: middle;
						}
					}
				}
			
			}
		}
	}
	
	.vulgar_tycoon{
		
		img{
			width: 1.26rem!important;
			height: 1.26rem!important;
			margin: 0 auto!important;
			display: block!important;
			border-radius: 50%;
			overflow: hidden;
		}
		p{
			text-align: center!important;
		}
	}
	.song_match{
		@include padding-section;
		@include gradient;
		height: auto;
		h2{
			@include font-big;
			width: 6.9rem;
			height: 1.3rem;
			line-height: 1.3rem;
			text-align: center;
			span{
				@include font-small;
				display: inline-block;
				float: right;
				
			}
		}
	}
	
	.song_foot{
		width: 7.5rem;
		height: 1.56rem;
		margin-top: 0.4rem;
		background: #f9f9f9;
		text-align: center;
		padding-top: 0.24rem;
		margin-bottom: 1.4rem;
		p{
			width: 7.5rem;
			height: 0.43rem;
			line-height: 0.43rem;
			color:#777777;
			font-size: 0.3rem;
			text-align: center;
		}
	}
	
</style>