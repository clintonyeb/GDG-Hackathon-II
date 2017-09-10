<template>
  <div id="app">
    <section class="hero is-fullheight is-primary">
        <div class="layer">
            <div class="hero-head">
                <my-header></my-header>
            </div>
            <div class="hero-body">
                <router-view></router-view>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Header from './pages/Header.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
      'my-header' : Header
  }
}
</script>

<style>

</style>
