<template>
  <transition name="slide">
	<div id="radio_wrap">
		<div class="radio_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				电台
			</span>
		</div>
	<div class="radio_center">
		<div class="radio_left left">
			<ul>
				<li v-for="(value,key,index) in radio_all" v-on:click="change(index)">
					<div class="active" v-if="index==ind">
						{{key}}
					</div>
					<div v-else>
						{{key}}
					</div>
				</li>
			</ul>
		</div>
		<div class="radio_c left">
			<ul>
				<li v-for="(value,key,index) in radio_all">
					<div v-for="value in 5" v-if="index==ind">
						<span class="active_span" v-if="value==3">

						</span>
						<span v-else>

						</span>

					</div>
					<div v-for="value in 5">

						<span>

						</span>

					</div>
				</li>
			</ul>
		</div>
		<div class="radio_right left">
			<ul>
				<li  v-for="(value,key) in radio_all[str]">
					<img :src="value[0]"/>
					<div id="radio_right_r">
						<p>{{value[1]}}</p>
						<span>{{value[2]}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>


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
  name: 'radiostation',
    data(){
    	return{
    		"str":"推荐",
    		"ind":0,
    		"radio_all":{
				"推荐":[
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","经典","155.3万"],
					["static/image/radiostation/radio_3.png","怀旧","155.3万"],
					["static/image/radiostation/radio_4.png","休闲","155.3万"],
					["static/image/radiostation/radio_5.png","娱乐","155.3万"],
					["static/image/radiostation/radio_6.png","DJ","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
				],
				"心情":[
					["static/image/radiostation/radio_2.png","快乐","15万"],
					["static/image/radiostation/radio_4.png","快乐","15万"],
					["static/image/radiostation/radio_5.png","快乐","153万"],
					["static/image/radiostation/radio_1.png","快乐","55.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","55.3万"],
					["static/image/radiostation/radio_5.png","快乐","15.3万"],
					["static/image/radiostation/radio_6.png","快乐","15.3万"],
					["static/image/radiostation/radio_1.png","快乐","55.3万"],
					["static/image/radiostation/radio_3.png","快乐","55.3万"],
					["static/image/radiostation/radio_5.png","快乐","55.3万"],
				],
				"主题":[
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_6.png","快乐","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
				],
				"人群":[
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_6.png","快乐","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
				],
				"场景":[
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
				],
				"歌手":[
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_5.png","快乐","155.3万"],
					["static/image/radiostation/radio_6.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_4.png","快乐","155.3万"],
					["static/image/radiostation/radio_6.png","快乐","155.3万"],
					["static/image/radiostation/radio_2.png","快乐","155.3万"],
					["static/image/radiostation/radio_1.png","快乐","155.3万"],
					["static/image/radiostation/radio_3.png","快乐","155.3万"],
				],
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
  	change(index){
  		var e=e||event;
  		this.str=e.target.innerHTML.trim();
		this.ind=index;
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
	#radio_wrap{
		width: 7.5rem;
		height: auto;
		padding: 1rem 0 1rem;
		.radio_top{
			width: 7.5rem;
			height: 0.9rem;
			background: #1c9fed;
			line-height: 0.9rem;
			color: #FFFFFF;
			position: fixed;
			left: 0;
			top: 0;
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

		.radio_center{
			margin-top: 0.5rem;
			width: 7.5rem;
			height: auto;
			overflow: auto;
			.radio_left{
				width: 1.22rem;
				height: 10rem;
				overflow:auto;
				ul{
					width: 1.22rem;
					height: auto;
					li{
					width: 1.2rem;
					height: 1.5rem;
					line-height: 1.3rem;
					text-align: center;
					font-size: 0.32rem;
					color: #363636;
				}
				.active{
					color: #149bee;
				}
				}

			}
			.radio_c{
				width: 0.96rem;
				height: 10rem;
				overflow:auto;
				ul{
					width: 0.96rem;
					height: auto;
					li{
					width: 0.96rem;
					height: 1.5rem;
					overflow: hidden;
					div{

						span{
							width: 0.18rem;
							height: 0.03rem;
							display: block;
							background: #e2e2e2;
							margin: 0.16rem auto;
						}
						.active_span{
						width: 0.26rem;
						height: 0.05rem;
						background: #0093ea;
					}

					}

				}

				}

			}
			.radio_right{
				width: 5rem;
				height: 10rem;
				margin-left: 0.1rem;
				overflow:auto;
				li{
					width: 4.3rem;
					height: 1.44rem;
					img{
						float: left;
						width: 1.25rem;
						height: 1.25rem;
						margin-top: 0.05rem;
						border-radius: 50%;
						overflow: hidden;
						display: block;
					}
					div{
						width: 2.4rem;
						height: 1.25rem;
						margin-top: 0.1rem;
						margin-left: 0.3rem;
						text-align: left;
						float: left;
						p{
							height: 0.6rem;
							line-height: 0.8rem;
							color: #000000;
							font-size: 0.32rem;

						}
						span{
							font-size: 0.24rem;
							color: #6d6d6d;
							display: block;
						}
					}
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
	}
</style>
