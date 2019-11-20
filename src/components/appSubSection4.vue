<template>
  <div>
    <div data-aos="fade-up" data-aos-duration="1000" class="SubSection4">
      <div class="container">
        <div class="SubSectionBoxTp1">
          <carousel
            :perPage="1"
            :autoplay="true"
            :autoplayTimeout="3000"
            :autoplayHoverPause="true"
            easing="linear"
            :loop="true"
            :paginationSize="10"
            paginationActiveColor="#ff817e"
            paginationColor="#ffc3c2"
          >
            <slide>
              <div class="QuateBoxTp1 text-center m-auto">
                <img src="../assets/images/quote.png" alt="" />
                <div class="txt-st-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <img
                  class="clientImg"
                  src="../assets/images/client-1.png"
                  alt=""
                />
                <div class="NameBoxTp1">Lorem,<span>Web Developer</span></div>
              </div>
            </slide>
            <slide>
              <div class="QuateBoxTp1 text-center m-auto">
                <img src="../assets/images/quote.png" alt="" />
                <div class="txt-st-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <img
                  class="clientImg"
                  src="../assets/images/client-1.png"
                  alt=""
                />
                <div class="NameBoxTp1">Lorem,<span>Web Developer</span></div>
              </div>
            </slide>
            <slide>
              <div class="QuateBoxTp1 text-center m-auto">
                <img src="../assets/images/quote.png" alt="" />
                <div class="txt-st-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <img
                  class="clientImg"
                  src="../assets/images/client-1.png"
                  alt=""
                />
                <div class="NameBoxTp1">Lorem,<span>Web Developer</span></div>
              </div>
            </slide>
            <slide>
              <div class="QuateBoxTp1 text-center m-auto">
                <img src="../assets/images/quote.png" alt="" />
                <div class="txt-st-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <img
                  class="clientImg"
                  src="../assets/images/client-1.png"
                  alt=""
                />
                <div class="NameBoxTp1">Lorem,<span>Web Developer</span></div>
              </div>
            </slide>
            <slide>
              <div class="QuateBoxTp1 text-center m-auto">
                <img src="../assets/images/quote.png" alt="" />
                <div class="txt-st-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <img
                  class="clientImg"
                  src="../assets/images/client-1.png"
                  alt=""
                />
                <div class="NameBoxTp1">Lorem,<span>Web Developer</span></div>
              </div>
            </slide>
          </carousel>
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
