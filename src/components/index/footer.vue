<template>
    <div id="foot">
      <ul class="foot_ul" v-on:click="show_details" >
        <li>
          <img src="static/image/footer_1.png"/>
        </li>
        <li>{{songname}}</li>
        <li>
          <img v-on:click.stop.prevent="play_music_p" src="static/image/footer_5.png"/>
        </li>
        <li>
          <img v-on:click.stop.prevent="pause_music" src="static/image/footer_2.png"/>
        </li>
        <li>
          <img v-on:click.stop.prevent="play_music_n" src="static/image/footer_3.png"/>
        </li>
      <!-- <li>
          <img src="static/image/footer_4.png"/>
        </li>-->
      </ul>
    </div>
</template>

<script>
  import $ from "jquery";
  import {play_music,pause_music} from '@/assets/play_pause_music'
  export default {
    name: 'foot',
    data(){
      return {
        "songname":"好音质，用酷我"
      }
    },
    mounted:function(){

    },
    updated:function(){

    },
    methods:{
      pause_music(){
        pause_music(null,songindex,allsong)
      },
      play_music_p(){
        play_music(null,songindex,allsong,"p")
      },
      play_music_n(){
        play_music(null,songindex,allsong,"n")
      },
      show_details(){
        if($("#foot li").eq(1).html()=="好音质，用酷我"){
          return false;
        }else{
          this.$router.push({
            path:'/musicdetails'
          });
        }
      }
    }
  }
</script>

<style scoped>
  #foot{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 6.9rem;
    height: 1.1rem;
    background: #fdfdfd;
    padding: 0 0.3rem;
    z-index: 200;
  }
  #foot .foot_ul{
    width: 6.9rem;
    height: 1.1rem;
    background: #fdfdfd;
  }
  .foot_ul li{
    height: 1.1rem!important;
    line-height: 1.1rem;
    float: left;
    font-size: 0.26rem;
    color: #000000;
  }
  .foot_ul li:nth-child(1) {
    margin-right: 0.2rem;
  }
  .foot_ul li:nth-child(2) {
    width:2rem;
    white-space: nowrap;
   overflow: hidden;
    text-overflow: ellipsis;
  }
  .foot_ul li:nth-child(1) img{
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 50%;
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
