<template>
	<div id="Live">
		<div class="live_search">
			<input type="text" name="user" placeholder="搜索房间号、昵称" />
			<div class="personal">
				<img src="static/image/Live/search_1.png"/>
			</div>
		</div>

		<div class="swiper-container swiper-container_live">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="(value, key) in live_anchor">
			        	<a :href="value[1]">
			        		<img :src="value[0]"/>
			        	</a>
			        </div>

			    </div>
			    <div class="swiper-pagination"></div>
		</div>

		<dl class="live_recommend">
			<dt>为您推荐<span>411人正在直播 &gt;</span></dt>
			<dd v-for="(value,key) in live_reco">
				<a :href="value[1]">
					<img class="dd_tit" :src="value[0]"/>
					<p>
					   <span>{{key}}</span>
						<span>
							<img class="dd_lit" src="static/image/Live/reco_7.png" />
							{{value[2]}}
						</span>
					</p>
				</a>
			</dd>
		</dl>
		<dl class="live_recommend">
			<dt>女神范儿<span>776人正在直播 &gt;</span></dt>
			<dd v-for="(value,key) in live_reco">
				<a :href="value[1]">
					<img class="dd_tit" :src="value[0]"/>
					<p>
					   <span>{{key}}</span>
						<span>
							<img class="dd_lit" src="static/image/Live/reco_7.png" />
							{{value[2]}}
						</span>
					</p>
				</a>
			</dd>
		</dl>
		<dl class="live_recommend">
			<dt>独家艺人<span>22人正在直播 &gt;</span></dt>
			<dd v-for="(value,key) in live_reco">
				<a :href="value[1]">
					<img class="dd_tit" :src="value[0]"/>
					<p>
					   <span>{{key}}</span>
						<span>
							<img class="dd_lit" src="static/image/Live/reco_7.png" />
							{{value[2]}}
						</span>
					</p>
				</a>
			</dd>
		</dl>
	</div>

</template>

<script>
export default{
  name: 'Live',
  data(){
  	return {
		"live_anchor":{
			"c":["static/image/Hello/three.jpg","#"],
			"d":["static/image/Hello/four.jpg","#"],
			"e":["static/image/Hello/five.jpg","#"],
			"f":["static/image/Hello/six.jpg","#"],

		},
		"live_reco":{
			"才子佳人":["static/image/Live/reco_1.jpg","#","5634"],
			"岚禾小魔心":["static/image/Live/reco_2.jpg","#","8897"],
			"cosset宝贝":["static/image/Live/reco_3.jpg","#","4523"],
			"J粉红":["static/image/Live/reco_4.jpg","#","8524"],
			"渔阳未免":["static/image/Live/reco_5.jpg","#","2345"],
			"紫星梦":["static/image/Live/reco_6.jpg","#","1688"],
		},
  	}
  }
  }
</script>

<style scoped>
	#Live{
		width: 7.5rem;
		height: auto;
		background: #fbfbfb;
		padding-bottom: 2rem;
	}
	.live_search{
		width: 6.9rem;
		padding: 0 0.3rem;
		height: 0.84rem;
	}
	.live_search input{
		display:block;
		float: left;
		border: none;
		width: 5.98rem;
		height: 0.62rem;
		outline: none;
		padding: 0;
		background: #eeeeee;
		line-height: 0.62rem;
		text-align: center;
		color: #bababa;
		font-size: 0.27rem;
		border-radius: 0.01rem;
		margin: 0.1rem 0 0 0;
	}
	.live_search .personal{
		width: 0.62rem;
		height: 0.62rem;
		float: left;
		margin-left: 0.28rem;
		margin-top: 0.14rem;
		border-radius: 50%;
		overflow: hidden;
	}
	.live_search img{
		width: 0.6rem;
		height: 0.6rem;
		vertical-align: top;
	}
	.swiper-container_live {
	    width: 7.5rem;
	    height: 3.25rem;
	}
	.swiper-container_live .swiper-slide{
	    width: 7.5rem;
	    height: 3.25rem;
		background: darkcyan;
	}

	.swiper-container_live img,.swiper-container_live a{
		width: 7.5rem;
	    height: 3.25rem;
	    display: inline-block;
	}

	.live_recommend{
		width: 6.9rem;
		padding: 0 0.3rem;
		margin-top: 0.2rem;
		height: auto;
		overflow: hidden;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		  background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		  background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		  background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}
	.live_recommend dt{
		width: 6.9rem;
		height: 0.88rem;
		font-size: 0.32rem;
		line-height: 0.88rem;
		font-weight: bold;
		text-indent: 2.7rem;
		color: #000000;
	}
	.live_recommend dt span{

		text-indent: 0;
		display: inline-block;
		float: right;
		color: #a2a2a2;
		font-size: 0.22rem;
	}
	.live_recommend dd{
		width: 3.3rem;
		height: 4.16rem;
		float: left;
		margin: 0 0.07rem;
	}
	.live_recommend dd a{
		width: 3.3rem;
		height: 4.16rem;
		display: block;
	}
	.live_recommend dd .dd_tit{
		width: 3.3rem;
		height: 3.3rem;
		display: block;
	}
	.live_recommend dd p{
		width: 3.3rem;
		height: 0.76rem;
		line-height: 0.76rem;
		color: #3c3c3c;
		font-size: 0.24rem;
	}
	.live_recommend  p span:nth-child(1){
		width: auto;
		height: auto;
		float: left;
		display:block;
		margin-left: 0.1rem;
	}
	.live_recommend  p span:nth-child(2){
		float: right;
		display: block;
		width: auto;
		height: auto;
		margin-right: 0.1rem;

	}
	.live_recommend  p span:nth-child(2) .dd_lit{
		width: 0.26rem;
		height: 0.22rem;
		vertical-align: middle;
	}
</style>
