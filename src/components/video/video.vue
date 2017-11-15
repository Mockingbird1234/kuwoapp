<template>
  <transition name="slide">
	  <div id="video_wrap">
		<div class="video_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				视频
			</span>
		</div>

		<dl class="hot_recommend">
			<dt>
				热门推荐
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_reco">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{value[2]}}</p>
				</a>
			</dd>
		</dl>

		<dl class="mv">
			<dt>
				MV
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_mv">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{key}}</p>
				</a>
			</dd>
		</dl>

		<dl class="hot_recommend kichiku">
			<dt>
				鬼畜
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_reco">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{value[2]}}</p>
				</a>
			</dd>
		</dl>
		<dl class="hot_recommend kichiku">
			<dt>
				二次元
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_reco">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{value[2]}}</p>
				</a>
			</dd>
		</dl>
		<dl class="hot_recommend kichiku">
			<dt>
				搞笑
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_reco">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{value[2]}}</p>
				</a>
			</dd>
		</dl>
		<dl class="hot_recommend kichiku">
			<dt>
				舞蹈
				<span>更多&gt;</span>
			</dt>
			<dd v-for="(value,key) in video_reco">
				<a :href="value[1]">
					<img :src="value[0]"/>
					<p>{{value[2]}}</p>
				</a>
			</dd>
		</dl>


		<ul class="video_foot">
			<li>
				发送到桌面
			</li>
			<li>
				分享
			</li>
		</ul>


		<div id="foot">
	 			<ul class="foot_ul">
	        		<li>
	        			<img src="static/image/footer_1.png"/>
	        		</li>
	        		<li>好音质,用酷我</li>
	        		<li>
	        			<img src="static/image/footer_5.png"/>
	        		</li>
	        		<li>
	        			<img src="static/image/footer_2.png"/>
	        		</li>
	        		<li>
	        			<img src="static/image/footer_3.png"/>
	        		</li>
	        		<li>
	        			<img src="static/image/footer_4.png"/>
	        		</li>
	     </ul>
	 	</div>
	</div>
  </transition>
</template>

<script>
		import $ from "jquery"


export default {
  name: 'sign',
    data(){
    	return{
    		"video_reco":{
				"a":["static/image/video/video_top_1.jpg","#","-鹿晗xxvii专辑特别映像"],
				"b":["static/image/video/video_top_2.jpg","#","-趁年轻，电影《建军大业》主题剪辑"],
				"c":["static/image/video/video_top_3.jpg","#","-《我的前半生》收官！"],
				"d":["static/image/video/video_top_4.jpg","#","-风眠复活大秀说唱"],

			},
			"video_mv":{
				"首播":["static/image/video/video_mv_1.jpg","#"],
				"华语":["static/image/video/video_mv_2.jpg","#"],
				"日韩":["static/image/video/video_mv_3.jpg","#"],
				"网络":["static/image/video/video_mv_4.jpg","#"],
				"欧美":["static/image/video/video_mv_5.jpg","#"],
				"现场":["static/image/video/video_mv_6.jpg","#"],
				"热舞":["static/image/video/video_mv_7.jpg","#"],
				"剧情":["static/image/video/video_mv_8.jpg","#"],
				"禁播":["static/image/video/video_mv_9.jpg","#"],


			},
    	}
    },
  mounted:function(){
        this.method();
  },
  methods:{
  	method(){
  		$(document).ready(function(){
  			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

  		})
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
@mixin gradient{
		 background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		  background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		  background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		  background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}
	@mixin dl_top{
				width: 6.9rem;
				height: 1.2rem;
				line-height: 1.2rem;
				text-align: center;
				font-size: 0.36rem;
				color: #000000;
				font-weight: bold;
				span{
					width: 0.8rem;
					height: 1.2rem;
					display: block;
					float: right;
					color: #9d9d9d;
					font-size: 0.26rem;
					line-height: 1.2rem;

				}
	}
	#video_wrap{
		width: 7.5rem;
		height: auto;
		padding: 1rem 0;

			.video_top{
			width: 7.5rem;
			height: 0.9rem;

			background: #1c9fed;
			line-height: 0.9rem;
			position: fixed;
			left: 0;
			top: 0;
			color: #FFFFFF;
			font-size: 0.38rem;
			text-align:center;
			a{
				width: 0.24rem;
				height: 0.9rem;
				display: block;
				float: left;
				margin-left: 0.3rem;
				img{
					width: 0.24rem;
					height: 0.38rem;
					display: block;
					float: left;
					margin-top: 0.28rem;
				}
			}

		}
		.hot_recommend{
			width: 6.9rem;
			height: auto;
			overflow: hidden;
			padding: 0 0.3rem;
			dt{
				@include dl_top;
			}
			dd{
				width: 3.4rem;
				height: 3rem;
				margin: 0.02rem;
				float: left;
				a{
					width: 3.4rem;
					height: 3.1rem;
					display: block;
					img{
						width: 3.38rem;
						height: 2.02rem;
						display: block;

					}
					p{
						width: 3.38rem;
						line-height: 0.34rem;
						height: 0.34rem;
						color: #000000;
						font-size: 0.28rem;
						margin-top: 0.2rem;
					}
				}

			}
		}
		.mv{
			width: 6.9rem;
			padding: 0 0.3rem;
			height: auto;
			overflow: hidden;
			@include gradient;

			dt{
				@include dl_top;
			}
			dd{
				width: 2.22rem;
				height: 2.98rem;
				margin: 0 0.03rem;
				float: left;
				a{
					width: 2.22rem;
				height: 2.98rem;
				display: block;
				img{
					width: 2.22rem;
					height: 2.22rem;
					display: block;

				}
				p{
					width: 2.22rem;
					height: 0.7rem;
					line-height: 0.7rem;
					color: #000000;
					font-size: 0.24rem;
					font-weight: bold;
				}
				}
			}
		}
		.kichiku{
			@include gradient;
		}
		.video_foot{
			@include gradient;
			width: 6.9rem;
			height: 1.9rem;
			padding: 0 0.3rem;
			li{
				width: 3.26rem;
				height: 0.84rem;
				background: #1c9fed;
				line-height: 0.84rem;
				color: #FFFFFF;
				font-size: 0.26rem;
				text-align: center;
				float: left;
				margin: 0.56rem 0.05rem;

			}
		}
	}

#foot{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 6.9rem;
	height: 1.1rem;
	background: #fdfdfd;
	padding: 0 0.3rem;
	z-index: 100;
}
#foot .foot_ul{
	width: 6.9rem;
	height: 1.1rem;
	background: #fdfdfd;
}
.foot_ul li{
	height: 1.1rem;
	line-height: 1.1rem;
	float: left;
	font-size: 0.26rem;
	color: #000000;
}
.foot_ul li:nth-child(1) {
	margin-right: 0.2rem;
}
.foot_ul li:nth-child(1) img{
	width: 0.85rem;
	height: 0.85rem;
	vertical-align: middle;
}

 .foot_ul li:nth-child(3) , .foot_ul li:nth-child(4) , .foot_ul li:nth-child(5){
 	width: 0.3rem;
 	height: 0.36rem;
	margin-left: 0.6rem;
}
.foot_ul li:nth-child(6){
		width: 0.36rem;
 	height: 0.36rem;
	margin-left: 0.6rem;
}
 .foot_ul li:nth-child(3) img, .foot_ul li:nth-child(4) img, .foot_ul li:nth-child(5) img, .foot_ul li:nth-child(6) img{
 	width: 0.3rem;
 	height: 0.36rem;
 	vertical-align: middle;
}

</style>
