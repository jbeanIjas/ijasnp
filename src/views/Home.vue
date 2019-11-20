<template>
  <div class="HomeComponent">
    <appHeroSection />
    <appSubSection1 />
    <appSubSection2 />
    <appSubSection3 />
    <appSubSection4 />
    <appSubSection5 />
  </div>
</template>

<script>
import appHeroSection from "@/components/appHeroSection.vue";
import appSubSection1 from "@/components/appSubSection1.vue";
import appSubSection2 from "@/components/appSubSection2.vue";
import appSubSection3 from "@/components/appSubSection3.vue";
import appSubSection4 from "@/components/appSubSection4.vue";
import appSubSection5 from "@/components/appSubSection5.vue";
export default {
  name: "home",
  components: {
    appHeroSection,
    appSubSection1,
    appSubSection2,
    appSubSection3,
    appSubSection4,
    appSubSection5
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {}
};
</script>
