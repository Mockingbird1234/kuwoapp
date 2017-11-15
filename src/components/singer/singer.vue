<template>
  <transition name="slide">
	<div id="singer_wrap">
		<div class="singer_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				歌手
			</span>
		</div>
		<ul class="singer_ul">
			<li v-for="value in sing_top">
				<a :href="value[1]">
					<img :src="value[0]"/>
				</a>
			</li>

		</ul>
		<p class="hot_singer">热门歌手</p>
		<ul class="sing_wrap_ul">
			<li v-for="value in singer_net">
				<a href="#">
					<img v-lazy="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+value.Fsinger_mid+'.jpg?max_age=2592000'"/>
					<div class="singer_div">
						<p>{{value.Fsinger_name}}</p>
					</div>
				</a>

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
     import Vue from 'vue'
		import $ from "jquery"
    import VueLazyLoad from 'vue-lazyload'
     Vue.use(VueLazyLoad,{
       loading:'static/image/kuwo.jpg',
     })
export default {
  name: 'singer',
    data(){
    	return{
    		"sing_top":{
				"a":["static/image/singer/singer_top_1.jpg","#"],
				"b":["static/image/singer/singer_top_2.jpg","#"],
				"c":["static/image/singer/singer_top_3.jpg","#"],
				"d":["static/image/singer/singer_top_4.jpg","#"],
			},
			"singer":{
				"薛之谦":["static/image/singer/singer_1.png","#","粉丝：233.0万"],
				"周杰伦":["static/image/singer/singer_2.png","#","粉丝：191.0万"],
				"张碧晨":["static/image/singer/singer_3.png","#","粉丝：23.0万"],
				"庄心妍":["static/image/singer/singer_4.png","#","粉丝：22.0万"],
				"陈奕迅":["static/image/singer/singer_5.png","#","粉丝：20.0万"],
				"张学友":["static/image/singer/singer_6.png","#","粉丝：18.0万"],
				"张杰":["static/image/singer/singer_7.png","#","粉丝：16.0万"],
				"TFBOYS":["static/image/singer/singer_8.png","#","粉丝：14.0万"],
				"儿童歌曲":["static/image/singer/singer_1.png","#","粉丝：233.0万"],
				"李玉刚":["static/image/singer/singer_2.png","#","粉丝：191.0万"],
				"林俊杰":["static/image/singer/singer_3.png","#","粉丝：23.0万"],
				"孙露":["static/image/singer/singer_4.png","#","粉丝：22.0万"],
				"降阳卓玛":["static/image/singer/singer_5.png","#","粉丝：20.0万"],
				"鹿晗":["static/image/singer/singer_6.png","#","粉丝：18.0万"],
				"赵雷":["static/image/singer/singer_7.png","#","粉丝：16.0万"],
				"汪苏泷":["static/image/singer/singer_8.png","#","粉丝：14.0万"],
				"许嵩":["static/image/singer/singer_1.png","#","粉丝：233.0万"],
				"凤凰传奇":["static/image/singer/singer_2.png","#","粉丝：191.0万"],
				"邓紫棋":["static/image/singer/singer_3.png","#","粉丝：23.0万"],
				"冷漠":["static/image/singer/singer_4.png","#","粉丝：22.0万"],
				"邓丽君":["static/image/singer/singer_5.png","#","粉丝：20.0万"],
				"王菲":["static/image/singer/singer_6.png","#","粉丝：18.0万"],
				"Beyond":["static/image/singer/singer_7.png","#","粉丝：16.0万"],
				"李荣浩":["static/image/singer/singer_8.png","#","粉丝：14.0万"],
			},
        "singer_net":[]
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

        //获取热门歌手
        $.ajax({
          type:"get",
          dataType:"json",
          async:false,
          url:"apis/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
          success:function(data){
            that.singer_net=data.data.list;
            console.log(that.singer_net)
          }
        });
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


#singer_wrap{
	width: 7.5rem;
	height: auto;
	padding: 1rem 0 1rem;
	.singer_top{
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
		.singer_ul{
			width: 6.9rem;
			height: auto;
			padding: 0 0.3rem;
			overflow: hidden;
			li{
				width: 3.4rem;
				height: 1.46rem;
				float: left;
				margin: 0.02rem;
				a{
					width: 3.4rem;
				height: 1.46rem;
				display: block;
				img{
					width: 3.4rem;
				height: 1.46rem;
				}
				}
			}


		}
		.hot_singer{
			width: 7.5rem;
			margin: 0.3rem 0;
			background: #f9f9f9;
			height: 0.6rem;
			line-height: 0.6rem;
			text-indent: 0.4rem;
			color: #676767;
			font-size: 0.24rem;
		}
		.sing_wrap_ul{
			width: 6.9rem;
			padding: 0 0.3rem;
			height: auto;
			overflow: hidden;
			li{
				width: 3.4rem;
				height: 1.06rem;
				float: left;
				margin-bottom: 0.3rem;
				a{
					width: 3.4rem;
				height: 1.06rem;
				display: block;
				img{
					display: block;
					width: 1.06rem;
					height: 1.06rem;
					border-radius: 50%;
					overflow: hidden;
					float: left;
				}
				div{
					width: 1.9rem;
					height: 1.06rem;
					margin: 0.22rem;
					float: left;
					p{
						width: 1.9rem;
						height: 0.6rem;
						line-height: 0.3rem;
						font-size: 0.24rem;
						color: #000000;

					}
					span{
						display: block;
						font-size: 0.24rem;
						color: #747474;
					}
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

</style>
