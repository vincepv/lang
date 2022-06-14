<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ $t("main.welcome") }}</p>
  <p>Day of the week :  {{ $t ("date.monday")}}</p>
  <p>text pas traduit</p>
  <LocalSwitcher />
  <p>2eme text pas traduit</p>
  
  </div>
</template>

<script>
import LocalSwitcher from '@/components/LocalSwitcher.vue'

export default {
  name : 'App',
  components:{
    LocalSwitcher
  }
}

</script>


