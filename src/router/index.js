import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
//搜索
const Search = (resolve) => {
  import('@/components/search/search').then((module) => {
    resolve(module)
  })
}
//签到
const Sign = (resolve) => {
  import('@/components/sign/sign').then((module) => {
    resolve(module)
  })
}
//排行
const Rank = (resolve) => {
  import('@/components/ranking/ranking').then((module) => {
    resolve(module)
  })
}
//电台
const Radiostation = (resolve) => {
  import('@/components/radiostation/radiostation').then((module) => {
    resolve(module)
  })
}
//歌手
const Singer = (resolve) => {
  import('@/components/singer/singer').then((module) => {
    resolve(module)
  })
}
//视频
const Video = (resolve) => {
  import('@/components/video/video').then((module) => {
    resolve(module)
  })
}
//分类
const Classification = (resolve) => {
  import('@/components/classification/classification').then((module) => {
    resolve(module)
  })
}
//专辑
const Album = (resolve) => {
  import('@/components/album/Album').then((module) => {
    resolve(module)
  })
}
//歌曲详情
const Details = (resolve) => {
  import('@/components/details_song/details_song').then((module) => {
    resolve(module)
  })
}
//歌曲播放详情
const Musicdetails = (resolve) => {
  import('@/components/music_details/music_details').then((module) => {
    resolve(module)
  })
}
//单曲
const Danqu = (resolve) => {
  import('@/components/details_song/danqu').then((module) => {
    resolve(module)
  })
}
//mv
const Mv = (resolve) => {
  import('@/components/details_song/MV').then((module) => {
    resolve(module)
  })
}
//歌单
const Gedan= (resolve) => {
  import('@/components/details_song/gedan').then((module) => {
    resolve(module)
  })
}
//歌手
const Geshou = (resolve) => {
  import('@/components/details_song/geshou').then((module) => {
    resolve(module)
  })
}
//歌曲详情
const Zhuanji = (resolve) => {
  import('@/components/details_song/zhuanji').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      component:Index,
      children:[

      ]
    },
    {
      path: '/musicdetails',
      component:Musicdetails
    },
    {
      path: '/search',
      component:Search,
    },
    {
      path: '/sign',
      component:Sign
    },
    {
      path: '/rank',
      component:Rank,
    },
    {
      path: `/rank/:id`,
      component:Album
    },

    {
      path: '/radiostation',
      component:Radiostation
    },
    {
      path: '/singer',
      component:Singer
    },
    {
      path: '/video',
      component:Video
    },
    {
      path: '/classification',
      component:Classification
    },
    {
      path: `/details_song/:SONGNAME`,
      component:Details,
      children:[
          {
            path: 'danqu',
            name:'danqu',
            component:Danqu
          },
          {
            path: 'mv',
            component:Mv
          },
          {
            path: 'gedan',
            component:Gedan
          },
          {
            path: 'geshou',
            component:Geshou
          },
          {
            path: 'zhuanji',
            component:Zhuanji
          }
      ]
    }
  ]
})
