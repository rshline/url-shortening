<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter
  }
}
</script>