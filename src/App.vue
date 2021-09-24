<template>
  <div id="app">
    <navbar/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default{
  components:{
    Navbar
  }
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity 1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
