<template>
  <div id="search_top" class="sign_top">
    <a class="back" v-on:click="go_index">
      <img src="static/image/back.jpg"/>
    </a>
    <div class="close">
        <input type="text" name="song" id="song" placeholder="歌曲/歌手/歌词/专辑" v-model.trim="message" v-on:keyup="search_song_l(message)"/>
        <span v-on:click="close_blank" v-if="sorn=='搜索'">X</span>
    </div>
      <a v-on:click="search_back(message)" class="close_page">
      <span v-if="sorn=='取消'">取消</span>
      <span v-else-if="sorn=='搜索'">搜索</span>
    </a>
    <div class="search_song_ul">
      <ul>
        <li v-for="(value,key) in search_menu" v-html="">
          <div v-if="key=='song'">
            <h4>{{value.name}}</h4>
            <p v-on:click="search(val.name)" v-for="val in value.itemlist">{{val.name}}-{{val.singer}}</p>
          </div>
          <div v-if="key=='singer'">
            <h4>{{value.name}}</h4>
            <p v-on:click="search(val.name)" v-for="val in value.itemlist">{{val.name}}-{{val.singer}}</p>
          </div>
          <div v-if="key=='mv'">
            <h4>{{value.name}}</h4>
            <p v-on:click="search(val.name)" v-for="val in value.itemlist">{{val.name}}-{{val.singer}}</p>
          </div>
          <div v-if="key=='album'">
            <h4>{{value.name}}</h4>
            <p v-on:click="search(val.name)" v-for="val in value.itemlist">{{val.name}}-{{val.singer}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  import Foot from '@/components/index/footer';
  export default {
    name: 'search_top',
    data(){
      return {
        "message":"",
        //存放搜索栏的数组
        "search_menu":[],
        //显示搜索还是取消
        "sorn":"取消",
        //搜索历史
        "search_history":[]
      }
    },
    methods:{
      go_index(){
        this.$router.push({
          path:'/'
        })
      },
      search(a){
        this.storge(a);
        this.message="";
        this.sorn="取消";
        this.search_menu=[];
        this.$router.push({
          path:`/details_song/${a}/danqu`
        })

      },
      search_song_l(v){
        if(v==''){
          this.search_menu=[];
          this.sorn="取消";
          return false;
        }
        var that=this;
        $.ajax({
          type:"get",
          dataType:"json",
          data:{
            is_xml:0,
            format:'json',
            key:v,
            g_tk:5381,
            loginUin:0,
            hostUin:0,
            format:'json',
            inCharset:'utf8',
            outCharset:'utf-8',
            notice:0,
            platform:'yqq',
            needNewCode:0
          },
          url:"apis/splcloud/fcgi-bin/smartbox_new.fcg",
          success:function(data){
            that.search_menu=data.data;
            that.sorn="搜索";
            console.log(that.search_menu)
          }
        });
      },
      search_back(c){
        this.storge(c);
        this.message="";
        this.sorn="取消";
        this.search_menu=[];
        if(c==""){
          this.$router.push({
            path:'/'
          })
        }else if(c){
          this.$router.push({
            path:`/details_song/${c}/danqu`
          })
        }
      },
      close_blank(){
        this.message="";
        this.sorn="取消";
        this.search_menu=[];
      },
      storge(value){
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
      }
    }
  }
</script>

<style lang="scss">
  .sign_top{
    z-index: 200;
    position: relative;
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
    .close{
      width:auto;
      height: auto;
      display: inline-block;
      position: relative;
      span{
        width:0.4rem;
        height: 0.4rem;
        display: block;
        position: absolute;
        font-size:0.24rem;
        line-height: 0.4rem;
        text-align: center;
        background: #999;
        color: #fff;
        right: 0.1rem;
        top:0.3rem;
        border-radius: 50%;
      }
    }
  .back{
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
  a:nth-child(3){
    font-size: 0.28rem;
    color: #f1f4f6;
  }

  input{
    width: 4.6rem;
    height: 0.6rem;
    line-height: 0.6rem;


    background: #FFFFFF url(../../../static/image/search/search_top.png) no-repeat 0.1rem 0.1rem;
    background-size: 0.4rem 0.4rem;
    color: #6b6b6b;
    font-size: 0.28rem;
    border: none;
    outline: none;
    padding: 0 0.44rem 0 0.6rem;

  }
  .search_song_ul{
    width: 5.6rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #FFFFFF;
    height: auto;
  ul{
    width: 5.6rem;
    height: auto;
    /*padding: 0.1rem 0;*/
  li{
    width: 5.2rem;
    display: block;
    height: auto;
    border-bottom: 0.01rem solid #FFFFFF;
    overflow: hidden;
    text-align: left;
    padding: 0.2em 0.2rem;
    div{
      width:auto;
      height:auto;
      h4{
        width:auto;
        height: 0.4rem;
        font-size:0.26rem;
        line-height: 0.4rem;
        color: skyblue;
      }
      p{
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        width:auto;
        font-size:0.28rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #999;
      }
    }
  }
  }

  }

  }
</style>
