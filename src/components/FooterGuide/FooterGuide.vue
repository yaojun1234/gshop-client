<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-u"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>

</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goTo (path) {
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
  .content  //每个页面的内容
    >div //决定哪个页面显示
      display none
      &.on
        display block
      >section
        .header //头部公共css
          background-color #02a774
          position fixed
          z-index 100
          left 0
          top 0
          width 100%
          height 45px
          .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .iconfont
              font-size 22px
              color #fff
          .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 30%
            color #fff
            font-size 22px
            text-align center
        &.msite  //首页
          width 100%
          .msite_header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
            .header_title
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
              width 50%
              color #fff
              text-align center
              .header_title_text
                font-size 20px
                color #fff
                display block
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            .shop_container
              margin-bottom 50px
              .shop_list
                .shop_li
                  bottom-border-1px(#f1f1f1)
                  width 100%
                  >a
                    clearFix()
                    display block
                    box-sizing border-box
                    padding 15px 8px
                    width 100%
                    .shop_left
                      float left
                      box-sizing border-box
                      width 23%
                      height 75px
                      padding-right 10px
                      .shop_img
                        display block
                        width 100%
                        height 100%
                    .shop_right
                      float right
                      width 77%
                      .shop_detail_header
                        clearFix()
                        width 100%
                        .shop_title
                          float left
                          width 200px
                          color #333
                          font-size 16px
                          line-height 16px
                          font-weight 700
                          &::before
                            content '品牌'
                            display inline-block
                            font-size 11px
                            line-height 11px
                            color #333
                            background-color #ffd930
                            padding 2px 2px
                            border-radius 2px
                            margin-right 5px
                        .shop_detail_ul
                          float right
                          margin-top 3px
                          .supports
                            float left
                            font-size 10px
                            color #999
                            border 1px solid #f1f1f1
                            padding 0 2px
                            border-radius 2px
                      .shop_rating_order
                        clearFix()
                        width 100%
                        margin-top 18px
                        margin-bottom 8px
                        .shop_rating_order_left
                          float left
                          color #ff9a0d
                          .star //2x图 3x图
                            float left
                            font-size 0
                            .star-item
                              display inline-block
                              background-repeat no-repeat
                            &.star-48
                              .star-item
                                width 20px
                                height 20px
                                margin-right 22px
                                background-size 20px 20px
                                &:last-child
                                  margin-right: 0
                                &.on
                                  bg-image('../images/stars/star48_on')
                                &.half
                                  bg-image('../images/stars/star48_half')
                                &.off
                                  bg-image('../images/stars/star48_off')
                            &.star-36
                              .star-item
                                width 15px
                                height 15px
                                margin-right 6px
                                background-size 15px 15px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('../images/stars/star36_on')
                                &.half
                                  bg-image('../images/stars/star36_half')
                                &.off
                                  bg-image('../images/stars/star36_off')
                            &.star-24
                              .star-item
                                width 10px
                                height 10px
                                margin-right 3px
                                background-size 10px 10px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('../images/stars/star24_on')
                                &.half
                                  bg-image('../images/stars/star24_half')
                                &.off
                                  bg-image('../images/stars/star24_off')
                          .rating_section
                            float left
                            font-size 10px
                            color #ff6000
                            margin-left 4px
                          .order_section
                            float left
                            font-size 10px
                            color #666
                            transform scale(.8)
                        .shop_rating_order_right
                          float right
                          font-size 0
                          .delivery_style
                            transform-origin 35px 0
                            transform scale(.7)
                            display inline-block
                            font-size 12px
                            padding 1px
                            border-radius 2px
                          .delivery_left
                            color #fff
                            margin-right -10px
                            background-color #02a774
                            border 1px solid #02a774
                          .delivery_right
                            color #02a774
                            border 1px solid #02a774
                      .shop_distance
                        clearFix()
                        width 100%
                        font-size 12px
                        .shop_delivery_msg
                          float left
                          transform-origin 0
                          transform scale(.9)
                          color #666
                        .segmentation
                          color #ccc
</style>
