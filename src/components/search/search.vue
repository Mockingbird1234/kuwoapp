<template>
  <transition name="slide">
	    <div id="search_wrap">
        <searcht></searcht>
		<div class="search_h2">
			<span>热词搜索</span>
		</div>
		<div class="search_ul">
			<ul>
				<li v-if="index<9" v-for="(value,index) in search_word_hot">
					<a v-on:click="search(value.k)">
						{{value.k}}
					</a>
				</li>
			</ul>
		</div>
		<div class="search_histroy">
			<h3>搜索历史</h3>
			<span v-on:click="search(value)" v-for="value in search_history">{{value}}</span>
		</div>
	</div>
  </transition>
</template>

<script>
import $ from "jquery"
import searcht from '@/components/search_top/search_t'
export default {
	 name: 'search',
     data(){
     return {
        "message":"",
    		"search_song":[],
        "search_word_hot":[],
       //存放搜索栏的数组
       "search_menu":[],
       //显示搜索还是取消
       "sorn":"取消",
       //搜索历史
       "search_history":[]
    	}
    },
  components:{
     searcht
  },
  mounted:function(){
        this.method();
        this.getData();
  },
  updated:function(){

  },
  methods:{
  	method(){
  		$(document).ready(function(){
  			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  		})
  	},
  	getData(){
  	  var that=this;
  	  //获取热门搜索
      $.ajax({
        type:"get",
        dataType:"json",
        async:false,
        url:"apis/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
        success:function(data){
          that.search_word_hot=data.data.hotkey;
          console.log(this.search_word_hot)
        }
      });
      if(localStorage.getItem("history")){
        this.search_history=JSON.parse(localStorage.getItem("history"))
      }
      //this.search_history=JSON.parse(localStorage.getItem("history"));
  	},
    search(value){
      if(localStorage.getItem("history")){
        this.search_history=JSON.parse(localStorage.getItem("history"));

        //数组去重
        for(let i=0;i<this.search_history.length;i++){
          if(value==this.search_history[i]){
            break;
          }else if(i==(this.search_history.length-1)){
            this.search_history.push(value);
          }
        }
        var t=JSON.stringify(this.search_history);
        localStorage.setItem("history",t)
        if(this.search_history.length>7){
          this.search_history.shift(value);
          t=JSON.stringify(this.search_history);
          localStorage.setItem("history",t)
        }
      }else{
        this.search_history.push(value);
        var t=JSON.stringify(this.search_history);
        localStorage.setItem("history",t)
      }
      this.$router.push({
        path:`/details_song/${value}`
      })

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

		.search_h2{
			width:6.9rem;
			height: auto;
			overflow: hidden;
			padding: 0.3rem 0.36rem;
			span:nth-child(1){
				display: block;
				float: left;
				font-size: 0.32rem;
				color: #0b0b0b;
				font-weight: 600;

			}
			span:nth-child(2){
				display: block;
				float: right;
				padding-top: 0.05rem;
				font-size: 0.2rem;
				color: #737373;
				cursor: pointer;

			}
		}
		.search_ul{
			width: 6.9rem;
			padding: 0 0.3rem;
			height: auto;
			ul{
				width: 6.9rem;
				height: auto;
				overflow: hidden;
				li{
					display: inline-block;
					float: left;
					background: #f9f9f9;
					font-size: 0.25rem;
					color: #353535;
					margin-right: 0.04rem;
					margin-bottom: 0.04rem;
					text-align: center;
					a{
						display: inline-block;
						text-align: center;
						padding:0.16rem 0.58rem;
						background: #f9f9f9;
						font-size: 0.25rem;
						color: #353535;
					}
				}
			}
		}
		.search_histroy{
			width: 6.9rem;
			padding: 0 0.3rem;
			h3{
				width: 6.9rem;
				height: 1rem;
				line-height: 1rem;
				font-size: 0.32rem;
				font-weight: 800;
				color: #0c0c0c;
				border-bottom: 0.01rem solid #f9f9f9;
				margin-bottom: 0.2rem;
			}
			span{
					display: inline-block;
					float: left;
					background: #f9f9f9;
					font-size: 0.22rem;
					color: #353535;
					margin-right: 0.04rem;
					margin-bottom: 0.04rem;
					text-align: center;
					padding:0.16rem 0.58rem;
			}
		}

	}

</style>
