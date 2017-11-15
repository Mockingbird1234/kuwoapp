<template>
  <transition name="slide">
	<div id="search_wrap">
		<audio class="audiocon" autoplay="autoplay"></audio>
    <searcht></searcht>
		<div class="details_top_ul">
			<ul>
				<li class="details_top_active" v-on:click="go_dan('dan',0)">
					单曲
        </li>
				<li v-on:click="go_dan('mv',1)">
					MV
        </li>
				<!--<li v-on:click="go_dan('gd',2)">
					歌单
        </li>-->
				<li v-on:click="go_dan('gs',2)">
					歌词
        </li>
				<li v-on:click="go_dan('zj',3)">
					专辑
				</li>
			</ul>
		</div>
		<div class="details_data">
      <router-view></router-view>
		</div>
	</div>
  </transition>
</template>

<script>
import $ from "jquery";
import searcht from "@/components/search_top/search_t"

export default {
  name: 'details',
     data(){
     return {
       "search_song_net":[]
    	}
    },
components:{
  searcht
},
  mounted:function(){
        this.method();
        var that=this;
        setTimeout(function(){
          that.go_dan('dan',0)
        },200)
  },
  updated:function(){

  },
  methods:{
  	method(){
  	  var that=this;
  		$(document).ready(function(){
  			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  		})
  	},
    go_dan(key,i){
      let name=this.$route.params.SONGNAME;
      console.log(name)
      $(".details_top_ul li").eq(i).addClass("details_top_active").siblings().removeClass("details_top_active")
      switch (key){
        case "dan":
            this.$router.push({
              path:`/details_song/${name}/danqu`
            });
          break;
        case "mv":
          this.$router.push({
            path:`/details_song/${name}/mv`
          });
          break;
        case "gd":
          this.$router.push({
            path:`/details_song/${name}/gedan`
          });
          break;
        case "gs":
          this.$router.push({
            path:`/details_song/${name}/geshou`
          });
          break;
        case "zj":
          this.$router.push({
            path:`/details_song/${name}/zhuanji`
          });
          break;
       default:
          this.$router.push({
            path:`/details_song/${name}/danqu`
          });
          break;
      }

    },

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
	#search_wrap{
		width: 7.5rem;
		height: auto;
		padding-bottom: 1.4rem;
		padding-top: 1rem;
    .details_top_ul{
			width: 7.1rem;
			padding: 0 0.2rem;
			height: auto;
			overflow: hidden;
			position: fixed;
			top: 0.9rem;
			left: 0;
			z-index: 1;
			background: #FFFFFF;
			ul{
				width: 7.1rem;
				height: auto;
				overflow: hidden;
				display: flex;
				border-bottom: 0.01rem solid #f6f6f6;
				background: #FFFFFF;
				li{
					flex: 1;
          text-align: center;
					padding: 0.26rem 0.33rem;
					font-size: 0.26rem;
					color: #000000;
					margin-right: 0.1rem;
					background: #FFFFFF;
					a{
						font-size: 0.26rem;
					color: #000000;
					}
				}
				.details_top_active{

					border-bottom: 0.08rem solid #1a9fef;
					a{
						font-size: 0.26rem;
					color: #1a9fef;
					}
				}
			}

		}

		.details_data{
			width: 6.9rem;
			padding: 1rem 0.3rem 0;
			height: auto;
		}
	}

</style>
