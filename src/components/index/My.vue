<template>
	<div id="My">
		<div class="login">
			<ul class="login_ul">
				<li>
					<a href="">
						<img src="static/image/My/login.png"/>
					</a>
				</li>
				<li>
					<a href="">
						点击登录
					</a>
					<img src="static/image/My/login_1.png"/>
					<span>签到</span>
					<p>享受个性化歌曲推荐</p>
				</li>
				<li>
					<img src="static/image/My/login_2.png"/>
					<a href="">
						开通豪华VIP >
					</a>
				</li>
			</ul>
		</div>
		<div class="about_me">
			<ul class="about_me_ul">
				<li v-for="(value,key) in about_me">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<p>{{key}}</p>
						<p>{{value[2]}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="create_song">
			<dl>
				<dt>
					<ul>
						<li>自建歌单</li>
						<li>
							<img src="static/image/My/create_song_1.png"/>
						</li>
						<li>
							<img src="static/image/My/create_song_2.png"/>
						</li>
						<li>
							<img src="static/image/My/create_song_3.png"/>
						</li>
						<li>
							<img src="static/image/My/create_song_4.png"/>
						</li>
					</ul>
				</dt>
				<dd>
					<a href="">
						<div class="create_song_left left">
							<img src="static/image/My/create_song_5.png"/>
						</div>
						<div class="create_song_right left">
							新建歌单
						</div>
					</a>
				</dd>
			</dl>
		</div>
		<div class="collection">
			<dl>
				<dt>
					<ul>
						<li>收藏歌单</li>
						<li></li>
						<li></li>
						<li>
							<img src="static/image/My/create_song_3.png"/>
						</li>
						<li>
							<img src="static/image/My/create_song_4.png"/>
						</li>
					</ul>
				</dt>
				<dd>
					<a href="">
						<div class="collection_left left">
							<img src="static/image/My/create_song_5.png"/>
						</div>
						<div class="collection_right left">
							新建歌单
						</div>
					</a>
				</dd>
			</dl>
		</div>
		<div class="my_foot">
			<ul>
				<li v-for="(value,key) in my_foot">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>{{key}}</span>
						<b>{{value[2]}}</b>
						<i>&gt;</i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'My',
  data(){
  	return {
		"about_me":{
			"本地歌曲":["static/image/My/about_me_1.png","#","50"],
			"下载管理":["static/image/My/about_me_2.png","#",""],
			"最近播放":["static/image/My/about_me_3.png","#",""],
			"我喜欢听":["static/image/My/about_me_4.png","#",""],
		},
		"my_foot":{
			"直播":["static/image/My/my_foot_1.png","#","这首歌太好听！！中毒啦！"],
			"发现":["static/image/My/about_me_2.png","#","海量好游戏 每日新挑战"],
			"邀请好友得VIP":["static/image/My/about_me_3.png","#",""],
		},
  	}
  },
  mounted:function(){
       
  }
  }
</script>

<style scoped>
	#My{
		background: #f9f9f9;
		width: 7.5rem;
		height: auto;
		overflow: hidden;
	}
	.login,.about_me,.create_song,.collection,.my_foot{
		width: 6.9rem;
		padding: 0 0.3rem;
		background: #ffffff;
		font-size: 0.3rem;
		color: #000000;
	}
	.login{
		height: 1.7rem;
		
	}
	.login_ul{
		padding-top: 0.4rem;
		width: 6.9rem;
		height: 1.3rem;
	}
	.login_ul li{
		float: left;
	}
	.login_ul li:nth-child(1){
		width: 1.26rem; 
		height: 1.3rem;
		line-height: 1.7rem;
	}
	.login_ul li:nth-child(1) img{
		width:0.82rem;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
		height: 0.82rem;
		line-height: 1.7rem;
		margin: 0 auto;
		display: block;
	}
	.login_ul li:nth-child(2){
		width: 3.4rem;
		height: 0.84rem;
	}
	.login_ul li:nth-child(2) a{
		font-size: 0.3rem;
		color: #000000;
		font-weight: bold;
		line-height: 0.48rem;
	}
	.login_ul li:nth-child(2) img{
		width: 0.26rem;
		height: 0.26rem;
		vertical-align: middle;
		margin-left: 0.2rem;
	}
	.login_ul li:nth-child(2) span{
		font-size: 0.22rem;
		color: #ff5718;
	}
	.login_ul li:nth-child(2) p{
		font-size: 0.22rem;
		color: #777777;
		line-height: 0.4rem;
	}
	.login_ul li:nth-child(3){
		width: 2.2rem;
		height: 0.84rem;
		line-height: 0.84rem;
	}
	.login_ul li:nth-child(3) img{
		width: 0.33rem;
		height: 0.25rem;
		vertical-align: middle;
	}
	.login_ul li:nth-child(3) a{
		font-size: 0.22rem;
		color: #777777;
		line-height: 0.84rem;
	}
	
	.about_me{
		height: 1.78rem;
		margin-bottom: 0.22rem;
	}
	.about_me_ul{
		width: 6.9rem;
		height: 1.78rem;
		
	}
	.about_me_ul li{
		width: 1.26rem;
		height: 1.78rem;
		float: left;
		margin: 0 0.22rem;
	}
	.about_me_ul a{
		width: 1.26rem;
		height: 1.78rem;
		display: block;
		font-size: 0.28rem;
		font-weight: bold;
		text-align: center;
		color: #000000;
	}
	.about_me_ul img{
		width: 0.64rem;
		height: 0.64rem;
		margin-bottom: 0.3rem;
	}
	.about_me_ul p{
		line-height: 0.4rem;
		text-align: center;
	}

	.create_song,.collection{
		height: auto;
		margin-bottom: 0.01rem;
	}
	.create_song dl,.collection dl{
		width: 6.9rem;
		
	}
	.create_song dt,.collection dt{
		width: 6.9rem;
		height: 0.92rem;
		border-bottom: 1px solid #f9f9f9;
	}
	.create_song dt ul,.collection dt ul{
		width: 6.9rem;
		height: 0.92rem;
	}
	.create_song ul li,.collection ul li{
		float: left;
	}
	.create_song ul li:nth-child(1),.collection ul li:nth-child(1){
		width: 2.2rem;
		height: 0.92rem;
		margin-right: 1.38rem;
		line-height: 0.92rem;
		font-size: 0.3rem;
		font-weight: bold;
	}
	.create_song ul li:nth-child(2),.create_song ul li:nth-child(3),.create_song ul li:nth-child(4),.create_song ul li:nth-child(5){
		width: 0.8rem;
		height: 0.62rem;
		line-height: 0.92rem;
	
	}
	.collection ul li:nth-child(2),.collection ul li:nth-child(3),.collection ul li:nth-child(4),.collection ul li:nth-child(5){
		width: 0.8rem;
		height: 0.62rem;
		line-height: 0.92rem;
	}
	.create_song ul li img,.collection ul li img{
		width: 0.28rem;
		height: 0.28rem;
			margin:0.3rem auto 0;
			display: block;
	}
	.create_song ul li:nth-child(5) img,.collection ul li:nth-child(5) img{
		height: 0.2rem;
	
	}
	.create_song dd,.collection dd{
		width: 6.9rem;
		height: 1.68rem;
		
	}
	.create_song dd a,.collection dd a{
		width: 6.9rem;
		height: 1.68rem;
		display: block;
		font-size: 0.3rem;
		color: #000000;
		line-height: 1.68rem;
		font-weight: bold;
	}
	.create_song .create_song_left,.collection .collection_left{
		width: 1.4rem;
		height: 1.68rem;
		
	}
	.create_song .create_song_left img,.collection .collection_left img{
		width: 1.04rem;
		height: 1.04rem;
		vertical-align: middle;
		
	}
	.my_foot{
		height: 2.82rem;
		margin-top: 0.22rem;
		
		
	}
	.my_foot ul{
		height: 2.82rem;
		width: 6.9rem;
		
	}
	.my_foot li{
		width: 6.9rem;
		height: 0.9rem;
		border-bottom: 0.01rem solid #fafafa;
	}
	.my_foot a{
		width: 6.9rem;
		height: 0.9rem;
		display: block;
		font-size: 0.3rem;
		color: #000000;
		line-height: 0.9rem;
	}
	.my_foot img{
		vertical-align: middle;
		width: 0.36rem;
		height: 0.36rem;
		margin-right: 0.14rem;
		
	}
	.my_foot span{
		line-height: 0.9rem;
		
	}
	.my_foot b{
		line-height: 0.9rem;
		font-size: 0.22rem;
		color: #8f8f8f;
		display: inline-block;
		margin-left: 2.5rem;
		
	}
	.my_foot i{
		font-size: 0.22rem;
		line-height: 0.9rem;
		display: inline-block;
		float: right;
		color: #8f8f8f;
	}
</style>