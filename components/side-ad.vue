<template>
  <div class="ad">
    <b-carousel
      class="adimages"
      id="carousel1"
      controls
      indicators
      :interval="4000"
    >
      <b-carousel-slide
        img-src="/images/ad/right-side1.jpg"
      ><a class="tohref" href="http://www.9-mi.cn/zhuanti/yangtai/" target="_black" title="阳台定制"></a></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/ad/right-side2.jpg"
      ><a class="tohref" href="http://www.9-mi.cn/zhuanti/ygf2/" target="_black" title="阳光房定制"></a></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/ad/right-side3.jpg"
      ><a class="tohref" href="http://www.9-mi.cn/zhuanti/huayuan/" target="_black" title="花园休闲空间"></a></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style lang="stylus">
.ad
  .adimages
    position: relative
    margin-top: 20px
    width: 270px
    height: 390px
    .carousel-caption
      position: static
      padding: 0
      .tohref
        position: absolute
        display: block
        top: 0
        width: 100%
        height: 100%
</style>

