<template>
	 <div id="app">
     <router-view></router-view>
     <foot></foot>
  </div>
</template>

<script>
  import Foot from '@/components/index/footer';
  export default {
  name: 'app',
  components: {
    Foot
  },
    methods:{
    }
}
</script>

<style>

</style>
