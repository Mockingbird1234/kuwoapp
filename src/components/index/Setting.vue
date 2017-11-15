<template>
	<div id="Setting">
		<div class="setting_login">
			<a href="">
				<img src="../../../static/image/setting/setting_login.png"/>
				<span>登录/注册</span>
			</a>
		</div>
		<div class="find_friend">

			<a class="find_l left"  v-for="(value,key) in find_friend" :href="value[1]">
				<img :src="value[0]"/>
				<span>{{key}}</span>
			</a>
		</div>
		<div class="setting_all">
			<ul>
				<li v-for="(value,key) in setting_all">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>{{key}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="login_out">
			<ul>
				<li v-for="(value,key) in setting_out">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>{{key}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
  name: 'Setting',
  data(){
  	return {
		"find_friend":{
			"找朋友":["static/image/Setting/setting_friend_1.png","#"],
			"扫一扫":["static/image/Setting/setting_friend_2.png","#"],
		},
		"setting_all":{
			"仅wifi联网":["static/image/Setting/setting_all_1.png","#"],
			"睡眠定时":["static/image/Setting/setting_all_2.png","#"],
			"换肤":["static/image/Setting/setting_all_3.png","#"],
			"听歌识曲":["static/image/Setting/setting_all_4.png","#"],
			"酷我商城":["static/image/Setting/setting_all_5.png","#"],
			"音乐包":["static/image/Setting/setting_all_6.png","#"],
			"铃声剪辑":["static/image/Setting/setting_all_7.png","#"],
			"彩铃专区":["static/image/Setting/setting_all_8.png","#"],
			"智能煲机":["static/image/Setting/setting_all_9.png","#"],

			"全民舞指":["static/image/Setting/setting_all_10.png","#"],
			"游戏大厅":["static/image/Setting/setting_all_11.png","#"],
			"聚星直播":["static/image/Setting/setting_all_12.png","#"],

		},
		"setting_out":{
			"反馈":["static/image/Setting/setting_out_1.png","#"],
			"设置":["static/image/Setting/setting_out_2.png","#"],
			"退出":["static/image/Setting/setting_out_3.png","#"],
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

	@mixin font-text{
		color:#accee4;
		font-size: 0.3rem;
	}

	#Setting{
		width: 5.4rem;
		padding: 0 0.3rem;
		height: auto;
		background: #1270a4;

	}

	.setting_login{
		width: 5.4rem;
		height: 1rem;
		padding-top: 0.4rem;
		a{
			width: 5.4rem;
			height: 0.86rem;
			display: block;
			img{
				width: 0.86rem;
				height: 0.86rem;
				border-radius: 50%;
				overflow: hidden;
				display: block;
				float: left;
				margin-right:0.5rem ;
				vertical-align: middle;
			}
			span{
				display: block;
				float: left;
				height: 0.86rem;
				line-height: 0.86rem;
				@include font-text;
			}
		}
	}
	.find_friend{
		width: 5.4rem;
		height: 1.84rem;
		border-bottom: 0.01rem solid #0b6ca2;
		a{
			width: 2.6rem;
			height: 1.84rem;
			display: block;
			line-height: 1.84rem;
			text-align: center;
			@include font-text;
			img{
				width: 0.57rem;
				height: 0.48rem;
			}
		}

	}

	.setting_all{
		width: 5.4rem;
		height: auto;
		overflow: hidden;
		padding-bottom: 1rem;
		li{
			width: 1.8rem;
			height: 1.8rem;
			float: left;
			a{
				display: block;
				width: 1.8rem;
				height: 1.8rem;
				text-align: center;
				@include font-text;
				img{
					width: 0.52rem;
					height: 0.52rem;
					margin: 0.5rem auto 0.3rem;
					display: block;
					clear: both;
				}
			}
		}
	}
	.login_out{
		width: 5.4rem;
		height: 1rem;
		line-height: 1rem;
		margin-bottom: 1rem;
		@include font-text;
		ul{
			width: 5.4rem;
			height: 1rem;
			li{
				width: 1.7rem;
				height: 1rem;
				float: left;
				text-align: center;
				a{
					width: 1.7rem;
				height: 1rem;
				display: block;
				@include font-text;
				line-height: 1rem;
				img{
					width: 0.4rem;
					height: 0.4rem;
					vertical-align: middle;
				}

				}
			}
		}
	}
</style>
