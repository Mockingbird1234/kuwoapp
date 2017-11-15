<template>
  <transition name="slide">
	<div id="ranking_wrap">
		<div class="ranking_top">
			<a v-on:click="go_back">
				<img src="static/image/back.jpg"/>
			</a>
			<span>
				排行
			</span>
		</div>
    <ul class="rank_ul">
			<li v-for="value in ul_all_net">
				<a v-on:click="selectItem(value)">
					<img :src="value.picUrl">
					<dl>
						<dt>{{value.topTitle}}</dt>
						<dd v-for="val in value.songList">
              <span>{{val.songname}}</span>--<i>{{val.singername}}</i>
						</dd>
					</dl>
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
    <router-view></router-view>
  </transition>
</template>

<script>
import $ from "jquery"


export default {
  name: 'ranking',
    data(){
    	return{
    		"ul_all":{
				"酷我热歌榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我新歌榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我飙升榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"中国新歌手第二集":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我热销榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我华语榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我欧美榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我日韩榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"酷我欧美榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"经典怀旧榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"中国百大MC榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"网络神曲榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"BillBoard榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"夜店舞曲榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"韩国M-net榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"热门影视榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],
				"英国UK榜":["static/image/ranking/ranking_1.jpg","./album.html",["1.刚好遇见你-李玉刚","2.逆流成河-金艳玲","3.凉凉-电视剧"]],

			},
        "ul_all_net":[]
    	}
    },
  mounted:function(){
        this.method();
        this.getRank();
  },
  methods:{
  	method(){
  		$(document).ready(function(){
  			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  		})
  	},
    getRank(){
      var that=this;
      //获取qq音乐的banner
      $.ajax({
        type:"get",
        dataType:"json",
        async:false,
        url:"apis/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1482479435&uin=1768385508&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1505812363503",
        success:function(data){
          console.log(data.data.topList)
          that.ul_all_net=data.data.topList;
        }
      });
    },
    go_back(){
      this.$router.push({
        path:"/"
      })
    },
    selectItem(value){
      this.$router.push({
        path:`/rank/${value.id}`
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
	#ranking_wrap{
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

		width: 7.5rem;
		height: auto;
		padding-top: 1rem;
		padding-bottom:1rem;
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

		.rank_ul{
			width: 6.9rem;
			height: auto;
			padding: 0 0.3rem;
			li{
				width: 6.9rem;
				height: auto;
				margin-top:0.42rem;
				overflow: hidden;
				a{
					width: 6.9rem;
					height: auto;
					display: block;
					overflow: hidden;
					img{
						width: 2.34rem;
						height: 2.34rem;
						display: block;
						float: left;
						margin-right: 0.3rem;
					}
					dl{
						width: 4rem;
						height: auto;
						float: left;
						dt{
							width: 4rem;
							font-size: 0.34rem;
							color: #000000;
							font-weight: bold;
							height: 0.6rem;
							line-height: 0.6rem;
							text-align: left;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
						}
						dd{
							width: 4rem;
							font-size: 0.24rem;
							color: #5b5b5b;
							height: 0.5rem;
							line-height: 0.5rem;
							text-align: left;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
              span{
                color: #333;
              }
              i{
                font-style: normal;
                color: #999;
              }
						}
					}
				}
			}
		}



	}
</style>
