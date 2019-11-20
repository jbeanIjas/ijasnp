<template>
  <div>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="container">
        <div class="SubSectionBoxTp3 text-center m-auto">
          <div class="text-st-8">Where does it come from?</div>
          <div class="text-st-9 m-auto">
            To doesn't his appear replenish together called he of mad place
            won't wherein blessed second every wherein were meat kind wherein
            and martcin
          </div>
          <div class="carouselBox">
            <carousel
              :perPage="3"
              :autoplay="true"
              :autoplayTimeout="3000"
              :autoplayHoverPause="true"
              :paginationSize="0"
              easing="linear"
              :loop="true"
            >
              <slide>
                <div class="BxTpSt101Wrp">
                  <div class="BxTpSt101">
                    <div class="BlockBoxTp1">
                      <div class="BlockBoxTp1">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {},
  data() {
    return {
      Carousel,
      Slide
    };
  },
  methods: {},
  mounted() {},
  watch: {}
};
</script>
