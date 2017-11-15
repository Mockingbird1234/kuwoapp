<template>
	<div id="music">
		<div class="swiper-container swiper-container_hello">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="value in banner_net">

			        	<router-link to="/rank/4">
			        		<img :src="value.picUrl"/>
                </router-link>
			        </div>

			    </div>
			    <div class="swiper-pagination"></div>
		</div>

		<ul class="classification">
			<li v-for="(value, key,index) in classification">
				<a v-on:click="go_page(index)">
					<img :src="value[0]"/>
					<span>
						{{key}}
					</span>
				</a>
			</li>
		</ul>
		<div class="recommend">
			<h2>个性化推荐<span class="more">更多></span></h2>
			<ul>
				<li v-for="(value, key) in recommend">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>
							{{key}}
						</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="radio">
			<h2>热门电台<span class="more">更多></span></h2>
			<ul>
				<li v-for="(value, key) in radio">
					<a :href="value[1]">
						<div class="">
							<img :src="value[0]"/>
						</div>

						<span>
							{{key}}
						</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="new_music">
			<h2>最新音乐</h2>
			<ul>
				<li v-for="(value, key) in new_music">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>
							{{key}}
						</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="anchor">
			<h2>主播电台<span class="more">更多></span></h2>
			<ul>
				<li v-for="(value, key) in anchor">
					<a :href="value[1]">
						<div class="anchor_left left">
							<img :src="value[0]"/>
						</div>
						<div class=" anchor_right left">
							<h3>{{key}}</h3>
							<p>{{value[2]}}</p>
						</div>
					</a>
				</li>
			</ul>
		</div>

		<div class="hifi">
			<h2>HIFI音乐</h2>
			<ul>
				<li v-for="(value, key) in hifi">
					<a :href="value[1]">
						<img :src="value[0]"/>
						<span>
							{{key}}
						</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="special_column">
			<h2>热门专栏</h2>
			<div class="tit">
				<img :src="special_column.special_column_img[0]"/>
			</div>
			<ul class="center_ul">
				<li v-for="(value, key) in special_column.special_column_c">
					<a :href="value[1]">
						<img :src="value[0]"/>
					</a>
				</li>
			</ul>
			<ul class="footer_ul">
				<li v-for="(value, key) in special_column.special_column_f">
					<a :href="value[1]">
						<div class="special_column_l left">
							<img :src="value[0]"/>
						</div>
						<div class="special_column_r left">
							<h3>{{key}}</h3>
							<p>{{value[2]}}</p>
						</div>
					</a>
				</li>
			</ul>
		</div>


		<div class="extension">
			<h2>合作推广</h2>
			<ul>
				<li v-for="(value, key) in extension">
					<a :href="value[1]">
						<div class="extension_left left">
							<img :src="value[0]"/>
						</div>
						<div class="extension_right left">
							<h3>{{key}}</h3>
							<p>{{value[2]}}</p>
						</div>
					</a>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
  import $ from "jquery"
export default {
  name: 'Hello',
  data(){
  	return {
		"banner":{
			"a":["static/image/Hello/one.jpg","./album.html"],
			"b":["static/image/Hello/two.jpg","./album.html"],
			"c":["static/image/Hello/three.jpg","./album.html"],
			"d":["static/image/Hello/four.jpg","./album.html"],
			"e":["static/image/Hello/five.jpg","./album.html"],
			"f":["static/image/Hello/six.jpg","./album.html"],
    },
		"classification":{
			"签到有礼":["static/image/Hello/1.png","go_rank"],
			"排行":["static/image/Hello/2.png","go_rank"],
			"电台":["static/image/Hello/3.png","go_rank"],
			"歌手":["static/image/Hello/4.png","go_rank"],
			"视频":["static/image/Hello/5.png","go_rank"],
			"分类":["static/image/Hello/6.png","go_rank"],
			"酷我耳机":["static/image/Hello/7.png","go_rank"],
			"音乐包":["static/image/Hello/8.png","go_rank"],
			"HiFi音乐":["static/image/Hello/9.png","go_rank"],
			"DJ":["static/image/Hello/10.png","go_rank"],
		},
		"recommend":{
			"个性化推荐你喜欢的歌曲":["static/image/Hello/reco_1.jpg","#"],
			"【运动节奏】慢跑自在快跑...":["static/image/Hello/reco_2.jpg","#"],
			"【起来嗨】玩游戏时必听BGM":["static/image/Hello/reco_3.jpg","#"],
			"【华语】那些ktv必点的歌曲":["static/image/Hello/reco_4.jpg","#"],
			"[古风女声对唱]琴音若在":["static/image/Hello/reco_5.jpg","#"],
			"【心塞】分手后必听的歌曲":["static/image/Hello/reco_6.jpg","#"],
		},
		"radio":{
			"私人FM":["static/image/Hello/radio_1.png","#"],
			"邓丽君":["static/image/Hello/radio_2.png","#"],
			"TFBOYS":["static/image/Hello/radio_3.png","#"],
			"酷我有嘻哈":["static/image/Hello/radio_4.png","#"],
			"超级好听英文歌":["static/image/Hello/radio_5.png","#"],
			"好眠":["static/image/Hello/radio_6.png","#"],
		},
		"new_music":{
			"每日最新单曲":["static/image/Hello/new_music_1.jpg","#"],
			"酷我新歌榜":["static/image/Hello/new_music_2.jpg","#"],
			"唱片店":["static/image/Hello/new_music_3.jpg","#"],
		},
		"anchor":{
			"分享你相亲失败的经历":["static/image/Hello/new_music_1.jpg","#","【独家】我的对象是奇葩"],
			"夏天太清凉 随时有色狼":["static/image/Hello/new_music_2.jpg","#","【独家】警察蜀黍就是这个色狼"],
			"你知道仙人掌为什么防辐射么！！":["static/image/Hello/new_music_3.jpg","#","【独家】说的好有道理的样子"],
			"苏爆了！“苏文宇”的耳边情话":["static/image/Hello/new_music_3.jpg","#","【边江de变身馆】著名配音演员边江的福利"],
			"一定要过自己想过的生活":["static/image/Hello/new_music_3.jpg","#","【独家】我想和你分享这样的快乐"],
		},
		"hifi":{
			"24bit母带音频，挑战听觉极限":["static/image/Hello/hifi_1.jpg","#"],
			"酷我新歌榜":["static/image/Hello/hifi_2.jpg","#"],
		},
		"special_column":{
			"special_column_img":["static/image/Hello/special_column_1.jpg"],
			"special_column_c":{
				"one":["static/image/Hello/special_column_2.jpg","#"],
				"two":["static/image/Hello/special_column_3.jpg","#"],
			},
			"special_column_f":{
				"明日之子":["static/image/Hello/new_music_1.jpg","#","以音乐为载体，为全球年轻人开辟三条道路"],
				"Ta-说：聊聊你和刘欢的故事":["static/image/Hello/new_music_2.jpg","#","少年壮志不言愁 中年襟怀不言败"],
				"新歌首发！！":["static/image/Hello/new_music_3.jpg","#","火锅底料-Gai"],
			}
		},
		"extension":{
			"小钢炮 重低音 无限爽 震翻天":["static/image/Hello/extension_1.jpg","http://www.baidu.com","酷我无线蓝牙音箱  立即抢购"],
			"清纯唱响，独家真人直播":["static/image/Hello/extension_2.jpg","http://www.baidu.com","诠释完美演绎，纯净声音回味经典"],
			"弓箭手大作战":["static/image/Hello/extension_3.jpg","http://www.baidu.com","自由释放 火力全开"],
		},
      "banner_net":[]
  	}
  },
  created:function(){

  },
  mounted:function(){
      this.getBanner();
  },
  methods:{
    getBanner:function(){
      var that=this;
      //获取qq音乐的banner
      $.ajax({
        type:"get",
        dataType:"json",
        async:false,
        url:"apis/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1482479435&uin=1768385508&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1505805807270",
        success:function(data){
          that.banner_net=data.data.slider;
          console.log(that.banner_net)
        }
      });
    },
    go_rank(){

    },
    go_page(ind){
      switch (ind) {
        //签到有礼
        case 0:
          this.$router.push({
            path: '/sign'
          })
          break;
          //排行
        case 1:
          this.$router.push({
            path: '/rank'
          })
          break;
          //电台
        case 2:
          this.$router.push({
            path: '/radiostation'
          })
          break;
          //歌手
        case 3:
          this.$router.push({
            path: '/singer'
          })
          break;
            //视频
        case 4:
          this.$router.push({
            path: '/video'
          })
          break;
          //分类
        case 5:
          this.$router.push({
            path: '/classification'
          })
          break;
          //酷我耳机
        case 6:
          this.$router.push({
            path: '/sign'
          })
          break;
          //音乐包
        case 7:
          this.$router.push({
            path: '/sign'
          })
          break;
          //hifi音乐
        case 8:
          this.$router.push({
            path: '/sign'
          })
          break;
          //dj
        case 9:

          this.$router.push({
            path: '/sign'
          })
          break;
      }
    }
  }
  }







</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#music{
		width: 7.5rem;
		height: auto;
	}
	.swiper-container_hello {
	    width: 7.5rem;
	    height: 3.25rem;
	}
	.swiper-container_hello .swiper-slide{
	    width: 7.5rem;
	    height: 3.25rem;
		background: darkcyan;
	}

	.swiper-container_hello img,.swiper-container_hello a{
		width: 7.5rem;
	    height: 3.25rem;
	    display: inline-block;
	}
  .swiper-pagination{
    height: 1rem;
  }
	.classification{
		padding-top: 0.3rem;
		width: 7.5rem;
		height: 2.96rem;
		background: #FFFFFF;
		font-weight: 600;
	}
	.classification li{
		float: left;
		width: 1.5rem;
		height: 1.46rem;
		text-align: center;

	}
	.classification img{
		width: 0.76rem;
		height: 0.76rem;
		display: block;
		margin: 0 auto;
	}
	.classification a{
		display: block;
		font-size: 0.26rem;
		color: #000000;
		width: 1.5rem;
		height: 1.46rem;

	}
	.classification span{
		line-height: 0.5rem;
	}
	.recommend{
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 7.92rem;
		font-weight: 600;
		 background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		  background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		  background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		  background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}
	.recommend h2,.radio h2,.new_music h2,.anchor h2,.hifi h2,.special_column h2,.extension h2{
		font-size: 0.36rem;
		text-align: center;
		font-weight: 900;
		color: #010101;
		width: 6.9rem;
		height: 1.18rem;
		line-height: 1.18rem;
	}

	.recommend ul{
		width: 6.9rem;
		height: 6.76rem;
		text-align: left;

	}

	.recommend ul li{
		width: 2.22rem;
		height: 3.34rem;
		float: left;
		margin: 0 0.04rem;
	}

	.recommend ul img{
		display: block;
		width: 2.22rem;
		height: 2.22rem;
		margin-bottom: 0.1rem;
	}
	.recommend ul a{
		display: block;
		width: 2.22rem;
		height: 3.34rem;
		font-size: 0.28rem;
		text-align: left;
		line-height: 0.36rem;
		color: #000000;
	}
	.recommend ul span{
		line-height: 0.36rem;
	}

	.radio{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 7.22rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}
	.radio ul{
		width: 6.9rem;
		height:auto;
		text-align: center;

	}
	.radio li{
		width: 2.23rem;
		height: 2.98rem;
		margin: 0 0.03rem;
		float: left;
	}
	.radio div{
		width: 1.82rem;
		height: 1.82rem;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		box-shadow: 0 0 0rem 0.04rem #fbfbfb,
					0 0 0rem 0.06rem #f1f1f1,
					0 0 0rem 0.1rem #fbfbfb,
					0 0 0rem 0.12rem #f1f1f1,
					0 0 0rem 0.16rem #fbfbfb,
					0 0 0rem 0.18rem #f1f1f1;
	}
	.radio img{
		width: 1.82rem;
		height: 1.82rem;
	}
	.radio a{
		display: block;
		width: 2.22rem;
		height: 3.34rem;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.36rem;
		color: #000000;
	}
	.radio ul span{
		line-height: 1.04rem;
	}

	.new_music{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 4.08rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
		padding-bottom: 0.2rem;
	}
	.new_music ul{
		width: 6.9rem;
		height: 2.9rem;
	}
	.new_music li{
		width: 2.22rem;
		height: 2.88rem;
		float: left;
		margin: 0 0.04rem;
	}
	.new_music img{
		width: 2.22rem;
		height: 2.22rem;
		box-shadow: 0.01rem 0.01rem #ccc;
		display: block;
	}
	.new_music a{
		text-align: left;
		font-size: 0.28rem;
		color: #000000;
		width: 2.22rem;
		height: 2.88rem;
		display: block;
	}
	.new_music span{
		line-height: 0.66rem;
	}

	.anchor{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 8.48rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
		margin-bottom: 0.1rem;

	}
	.anchor ul,.extension ul{
		width: 6.9rem;
		height: 7.3rem;

	}
	.anchor ul li,.extension ul li{
		width: 6.9rem;
		height: 1.24rem;
		margin-bottom: 0.2rem;

	}
	.anchor ul a,.extension ul a{
		width: 6.9rem;
		height: 1.24rem;
		display: block;
	}
	.anchor_left,.extension_left{
		width: 1.24rem;
		height: 1.24rem;
	}
	.anchor_left img,.extension_left img{
		width: 1.24rem;
		height: 1.24rem;
	}
	.anchor_right,.extension_right{
		width: 5.3rem;
		margin-left: 0.32rem;
		height: 1.24rem;
		color: #000000;
	}
	.anchor_right h3,.footer_ul h3,.extension_right h3{
		font-size: 0.34rem;
		font-weight: bold;
		line-height: 0.8rem;
		color: #000000;
	}
	.anchor_right p,.footer_ul p,.extension_right p{
		font-size: 0.22rem;
		font-weight: normal;
		color: #9f9f9f;
	}

	.hifi{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 4.44rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
	}

	.hifi ul{
		width: 6.9rem;
		height: 3.24rem;
	}
	.hifi ul li{
		width: 3.38rem;
		height:3.24rem;
		float: left;
		margin: 0 0.03rem;
	}
	.hifi a{
		width: 3.38rem;
		height:3.24rem;
		text-align: left;
		color: #000000;
		font-size: 0.28rem;
		display: block;

	}
	.hifi img{
		width: 3.38rem;
		height: 2.02rem;

	}
	.hifi span{
		line-height: 0.5rem;

	}

	.special_column{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 10.44rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
		padding-bottom: 0.1rem;
	}
	.special_column .tit,.special_column .tit img{
		width: 6.9rem;
		height: 3rem;

	}
	.special_column .center_ul{
		margin-top: 0.1rem;
		width: 6.9rem;
		height: 1.48rem;
		margin-bottom: 0.4rem;
	}
	.special_column .center_ul li{
		width: 3.4rem;
		height: 1.48rem;
		float: left;
		margin: 0 0.02rem;
	}
	.center_ul a{
		width: 3.4rem;
		height: 1.48rem;
		display: block;

	}
	.center_ul a img{
		width: 3.4rem;
		height: 1.48rem;
		display: block;
	}

	.footer_ul{
		width: 6.9rem;
		height: 4.4rem;

	}
	.footer_ul li{
		width: 6.9rem;
		height: 1.26rem;
		margin-bottom: 0.2rem;
	}
	.footer_ul li img{
		width: 1.26rem;
		height: 1.26rem;

	}
	.footer_ul .special_column_r{
		width: 5.32rem;
		height: 1.26rem;
		margin-left: 0.32rem;
	}

	.extension{
		font-weight: 600;
		padding: 0 0.3rem;
		width: 6.9rem;
		height: 6rem;
		background: -webkit-linear-gradient(#f9f9f9, #ffffff); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#f9f9f9, #ffffff); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#f9f9f9, #ffffff); /* Firefox 3.6 - 15 */
		background: linear-gradient(#f9f9f9, #ffffff); /* 标准的语法 */
		padding-bottom: 0.1rem;
	}
	.extension ul{
		width: 6.9rem;
		height: 6rem;
	}

	.more{
		display: inline-block;
		float: right;
		font-size: 0.24rem;
		color: #adadad;
	}
</style>
