<template>
  <transition name="slide">
	<div id="sign_wrap">
		<div class="sign_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				积分签到
			</span>
		</div>
		<div class="sign_center">
			<h3 class="h3">
				<img src="static/image/sign/sign_center_1.png"/>
				兑换会员
			</h3>
			<h1 class="h1">总计签到<span>1</span>天</h1>
			<p class="p">
				<span>
					<img src="static/image/sign/sign_center_3.png" />
					积分换礼
				</span>
				|
				<span>
					<img src="static/image/sign/sign_center_2.png" />
					每日抽奖
				</span>
			</p>
			<ul class="ul">
				<li v-for="(value,key) in sign_center">
					<span>{{key}}</span>
					<img :src="value[0]"/>
				</li>
			</ul>
		</div>
		<div class="sign_footer">
			<p class="f_p">
				<span>
					已连续1天，继续坚持6天领取：
				</span>
				<span>
					我的礼包&gt;
				</span>
			</p>
			<div class="f_d">
				<img src="static/image/sign/sign_footer_1.png"/>
				<p>领取</p>
			</div>
			<p class="f_f">
				签到及说明：<br />
				参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。参与每日签到，可获得每日3分奖励。
			</p>
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
  name: 'sign',
    data(){
    	return{
    		"sign_center":{
				"今天":["static/image/sign/sign_center_4.png","#"],
				"明天":["static/image/sign/sign_center_5.png","#"],
				"08.02":["static/image/sign/sign_center_6.png","#"],
				"08.03":["static/image/sign/sign_center_5.png","#"],
				"08.04":["static/image/sign/sign_center_5.png","#"],
				"08.05":["static/image/sign/sign_center_5.png","#"],
				"08.06":["static/image/sign/sign_center_8.png","#"],
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
	#sign{
		width: 7.5rem;
		height: auto;

	}
	#sign_wrap{
		width: 7.5rem;
		height: auto;
		padding-bottom: 1.4rem;
		padding-top: 1rem;
		background: #f9f9f9;
		.sign_top{
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
		.sign_center{
			width: 6.9rem;
			padding: 0 0.3rem;
			height: auto;
			background: #FFFFFF;
			.h3{
				width:6.9rem;
				height: 0.84rem;
				line-height: 0.84rem;
				color: #989898;
				font-size: 0.28rem;
				text-align: right;
				img{
					width: 0.32rem;
					height: 0.32rem;
					display: inline-block;
					vertical-align: middle;
					line-height: 0.84rem;
				}
			}
			.h1{
				width: 6.9rem;
				height: 1.12rem;
				line-height: 1.12rem;
				text-align: center;
				font-weight: bold;
				font-size: 0.66rem;
				span{
					color: #ff5521;
				}
			}
			.p{
				width: 6,9rem;
				height: 0.94rem;
				line-height: 0.94rem;
				color: #7c7c7c;
				font-size: 0.24rem;
				text-align: center;
				img{
					width: 0.27rem;
					height: 0.27rem;
					vertical-align: middle;
				}
			}
			.ul{
				width: 6.9rem;
				height: 1.8rem;
				display: flex;
				li{
					width: 0.84rem;
					height: 1.5rem;
					padding-top: 0.3rem;
					float: left;
					flex: 1;
					span{
						display: block;
						text-align: center;
						width: 0.84rem;
						height: 0.5rem;
						line-height: 0.5rem;
						color: #a9a9a9;
						font-size: 0.24rem;

					}
					img{
						display: block;
						text-align: center;
						margin: 0.1rem auto 0;
						width: 0.7rem;
						height: 0.7rem;
						border-radius:50%;
						overflow: hidden;
					}
				}
			}
		}
		.sign_footer{
			width: 6.9rem;
			padding: 0 0.3rem;
			background: #f9f9f9;
			.f_p{
				width: 6.9rem;
				height: 0.8rem;
				line-height: 0.7rem;
				text-align:left;
				span:nth-child(1){
					text-align:left;
					font-size: 0.26rem;
					color: #a2a2a2;

				}
				span:nth-child(2){
					display: inline-block;
					margin-top: 0.24rem;
					float: right;
					font-size: 0.24rem;
					color: #a6a6a6;
				}
			}
			.f_d{
				width: 6.9rem;
				height: 3.7rem;
				img{
					width: 4rem;
					height: 1.5rem;
					display: block;
					margin: 0.3rem auto 0.64rem;

				}
				p{
					width: 3.76rem;
					height: 0.66rem;
					line-height: 0.66rem;
					text-align: center;
					font-size: 0.28rem;
					color: #d1d1d1;
					margin: 0 auto;
					border: 0.02rem solid #c2c2c2;
				}
			}
			.f_f{
				font-size: 0.24rem;
				color: #a2a2a2;
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
