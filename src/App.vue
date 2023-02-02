<template>
  <BackgroundDiv />
  <NavigationButton />
  <NavigationBar />
  
  <router-view />

</template>

<script>
  import { defineComponent } from 'vue';

  import BackgroundDiv from "./components/BackgroundDiv.vue";
  import NavigationButton from "./components/NavigationButton.vue";
  import NavigationBar from "./components/NavigationBar.vue";
  
  export default defineComponent({
    components: {
      BackgroundDiv,
      NavigationButton,
      NavigationBar
    },
  });
</script>