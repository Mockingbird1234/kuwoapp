<template>
  <div id="index">
    <div id="blank">
      这地方解决不了呀~
    </div>
    <div id="top">
      <ul class="top_ul">
        <li v-on:click="go_search">
            <span>
              <img src="static/image/search.png"/>
            </span>
        </li>
        <li v-on:click="go_page(1)">我的</li>
        <li class="active" v-on:click="go_page(2)">乐库</li>
        <li v-on:click="go_page(3)">直播</li>
        <li v-on:click="go_page(4)">唱歌</li>
        <li v-on:click="go_page(5)">
          <img class="more" src="static/image/setting.png"/>
        </li>
      </ul>
    </div>
    <div class="swiper-container swiper-container-b">
      <div class="swiper-wrapper swiper-wrapper-b">
        <div class="swiper-slide">
          <my></my>
        </div>
        <div class="swiper-slide">
          <hello></hello>
        </div>
        <div class="swiper-slide">
          <live></live>
        </div>
        <div class="swiper-slide">
          <song></song>
        </div>
        <div class="swiper-slide my_setting">
          <setting></setting>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.css"
  import Hello from '@/components/index/Hello'
  import My from '@/components/index/My'
  import Live from '@/components/index/Live'
  import Song from '@/components/index/Song'
  import Setting from '@/components/index/Setting'
  var dera;
  var ind;
  var mySwiper;

  export default {
    name: 'index',
    components: {
      Hello,
      My,
      Live,
      Song,
      Setting
    },
    mounted:function(){
      this.fontSize();
    },
    methods:{
      fontSize(){
        $(document).ready(function(){
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
          $(".swiper-wrapper-b>.swiper-slide").css("height",document.documentElement.clientHeight+"px")
          var selfheigth=$(".top_ul").get(0).offsetHeight;
          mySwiper = new Swiper ('.swiper-container-b', {
            direction: 'horizontal',
            initialSlide:1,
            slidesPerView:"auto",
            resistanceRatio : 0,
            autoHeight:true,
            onSlideChangeStart: function(swiper){

            },
            //头部移动--最后完善
            onSliderMove: function(swiper, event){
              dera=swiper.swipeDirection;
              ind=swiper.realIndex+1;
              var lef=$(".swiper-wrapper-b>.swiper-slide").eq(3).offset().left;
              if((ind==4)&&(lef<0)){
                var ulEle=$(".top_ul");
                var scrolltop=$(".swiper-wrapper-b>.swiper-slide").eq(3).scrollTop();
                $(".top_ul").remove();
                $(".swiper-wrapper-b>.swiper-slide").eq(3).prepend(ulEle);
                console.log(scrolltop)
                $(".top_ul").css("top",(scrolltop-selfheigth)+"px");
              }else{

                var ulEle=$(".top_ul");
                $(".top_ul").remove();
                $("#top").prepend(ulEle);
                $(".top_ul").css("top","0")
              }
            },
            onTouchStart: function(swiper){
              var left=$(".swiper-wrapper-b>.swiper-slide").eq(3).offset().left;

              ind=swiper.realIndex+1;
              if(ind==4&&left==0){

                var ulEle=$(".top_ul");
                $(".top_ul").remove();
                $("#top").prepend(ulEle);
                $(".top_ul").css("top","0")
              }

            },
            onTransitionEnd: function(swiper){
              var left=$(".swiper-wrapper-b>.swiper-slide").eq(3).offset().left;

              if(ind==4&&left==0){

                var ulEle=$(".top_ul");
                $(".top_ul").remove();
                $("#top").prepend(ulEle);
                $(".top_ul").css("top","0")
              }
              ind=swiper.realIndex+1;

              $(".top_ul li").each(function(index,ele){
                $(this).removeClass("active");
                $(".top_ul li").eq(ind).addClass("active");
              })
            },
            onSlideChangeEnd: function(swiper){
            },
          })

          var mySwiper_hello = new Swiper('.swiper-container_hello', {
            direction: 'horizontal',
            pagination : '.swiper-pagination',
            loop:true,
            autoplay:2500,
            nested:true
          })
          var mySwiper_live = new Swiper('.swiper-container_live', {
            direction: 'horizontal',
            pagination : '.swiper-pagination',
            loop:true,
            autoplay:2500,
            nested:true
          })
          var mySwiper_song = new Swiper('.swiper-container_song', {
            direction: 'horizontal',
            freeMode : true,
            resistanceRatio : 0,
            nested:true
          })
          var mySwiper_match = new Swiper('.swiper-container_match', {
            direction: 'horizontal',
            pagination : '.swiper-pagination',
            resistanceRatio : 0,
            loop:true,
            autoplay:2500,
            nested:true
          })
        })
      },
      go_search(){
        this.$router.push({
            path:'/search'
        })
      },
      go_page(num){
        if(num==5){
          $(".swiper-container-b").css("padding-top","0rem");
          var ulEle=$(".top_ul");
          $(".top_ul").remove();
          $(".swiper-wrapper-b>.swiper-slide").eq(3).prepend(ulEle);
          mySwiper.slideTo(num-1)
        }else{
          //$(".swiper-container-b").css("padding-top","1rem");
          var ulEle=$(".top_ul");
          $(".top_ul").remove();
          $("#top").prepend(ulEle);
          mySwiper.slideTo(num-1,0)
        }
      }
    }


  }
</script>

<style>

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
  .swiper-container-b{

  }
  .swiper-container{
    overflow:hidden;
  }
  .swiper-wrapper-b>.swiper-slide{
    width: 7.5rem;
    height: auto;
    overflow: auto;
  }
  .swiper-wrapper-b>.swiper-slide:last-child{
    position: relative;
    top: -1rem;
  }
  .my_setting{
    width: 6rem!important;
  }
  #blank{
    width:7.5rem;
    height: 1rem;
    background: #1c9fed;
    z-index: 0;
    font-size: 0.28rem;
    line-height: 1rem;
    text-align: center;
    color: #ffffff;
  }
  #top{
    width:7.5rem;
    height: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }

  .top_ul{
    width:7.5rem;
    height: 1rem;
    background: #1c9fed;
    display: flex;
    line-height: 1rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .top_ul .active{
    font-weight: bold;
  }
  .top_ul li{
    font-size: 0.4rem;
    height: 1rem;
    line-height: .96rem;
    text-align: center;
    flex: 1;
    color: #ffffff;
  }
  .top_ul li a{
    display: block;
  }



</style>
