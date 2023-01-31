<template>
  <BackgroundDiv />
  <main>
    <HeaderView />
    <AboutView />
    <ServicesView />
    <SkillsView />
    <ReferencesView />
    <ContactView />
    <FooterView />
  </main>
</template>

<script>
  import { defineComponent } from 'vue';

  import BackgroundDiv from "./components/BackgroundDiv";
  import HeaderView from "./views/HeaderView";
  import AboutView from "./views/AboutView";
  import ServicesView from "./views/ServicesView";
  import SkillsView from "./views/SkillsView";
  import ReferencesView from "./views/ReferencesView";
  import ContactView from "./views/ContactView";
  import FooterView from "./views/FooterView";

  export default defineComponent({
    name: 'HomeView',
    components: {
      BackgroundDiv,
      HeaderView,
      AboutView,
      ServicesView,
      SkillsView,
      ReferencesView,
      ContactView,
      FooterView,
    },
  });
</script>