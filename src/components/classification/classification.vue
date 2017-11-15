<template>
  <transition name="slide">
	  <div id="class_wrap">
		<div class="ranking_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				分类
			</span>
		</div>

		<div class="area">
			<div class="area_img">
				<img src="../../../static/image/classification/class_top_1.jpg"/>
				专区
			</div>
			<span v-for="(value,key) in classification['专区']">{{key}}</span>
		</div>

			<div class="area">
			<div class="area_img">
				<img src="../../../static/image/classification/class_top_1.jpg"/>
				专区
			</div>
			<span v-for="(value,key) in classification['专区']">{{key}}</span>
		</div>
			<div class="area">
			<div class="area_img">
				<img src="../../../static/image/classification/class_top_1.jpg"/>
				专区
			</div>
			<span v-for="(value,key) in classification['专区']">{{key}}</span>
		</div>
			<div class="area">
			<div class="area_img">
				<img src="../../../static/image/classification/class_top_1.jpg"/>
				专区
			</div>
			<span v-for="(value,key) in classification['专区']">{{key}}</span>
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

    		"classification":{
    			"专区":{
    				"喊麦":"#",
					"EDM":"#",
					"网红":"#",
					"3D":"#",
					"DJ":"#",
					"儿歌":"#",
					"佛乐":"#",
					"古风":"#",
					"ACG":"#",
					"轻音乐":"#",
					"运动":"#",
					"车载":"#",
					"影视":"#",
					"古典乐":"#",
					"翻唱":"#",
					"独立":"#",
					"早教":"#",
					"嘻哈":"#",

    			}

    		}

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
body,html,p,h1,h2,h3,h4,h5,ul,li,dl,dt,dd,input,table,img,table,tr,td{
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

#class_wrap{
	width: 7.5rem;
	height: auto;
	padding-top: 1rem;
	padding-bottom:1rem;
	background: #f9f9f9;

	.ranking_top{
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
		.area{
			width: 7.5rem;
			height: auto;
			overflow: hidden;
			margin-bottom: 0.2rem;
			border-top: 0.01rem solid #e9e9e9;
			.area_img{

				width: 1.84rem;
				height: 2rem;
				text-align: center;
				font-size: 0.26rem;
				color: #717171;
				float: left;
				border-bottom: 0.01rem solid #e9e9e9;
				img{
					width: 0.44rem;
					height: 0.6rem;
					display: block;
					margin-left:0.74rem ;
					margin-top:0.4rem;
					margin-bottom: 0.1rem;
				}
			}
			span{
				width: 1.84rem;
				height: 1rem;
				line-height: 1rem;
				text-align: center;
				font-size: 0.26rem;
				color: #191919;
				display: inline-block;
				border-left: 0.01rem solid #e9e9e9;
				border-bottom:0.01rem solid #e9e9e9;
				float: left;
			}
		}
}
</style>
