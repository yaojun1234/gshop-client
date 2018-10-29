<template>
  <div class="star" :class="'star-'+size" >
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  const  CLASS_ON = 'on'
  const  CLASS_HALF = 'half'
  const  CLASS_OFF = 'off'

    export default {
        name: "Star",
        props: {
          score: Number,
          size: Number
        },
      computed: {
        starClasses () {
          const {score} = this
          const  scs = []
          /*
            3.2:
            3 + 0 + 2
            3.5:
            3 + 1 + 1
           */
          // 向scs中添加n个'on'CLASS_ON
          const coreInteger = Math.floor(score);
          for(let i = 0; i < coreInteger; i++){
            scs.push(CLASS_ON)
          }

          // 向scs中添加0/1个'half'CLASS_HALF
          if(score*10 - coreInteger*10 >= 5){ // 这里计算时可能存在问题，当刚好等于0.5 时可能存在0.4999999
            scs.push(CLASS_HALF)
          }
          // 向scs中添加n>=0,总个数是5个'off'CLASS_OFF
          while (scs.length<5){
            scs.push(CLASS_OFF)
          }

          return scs
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import "..common/stylus/mixins.styl"*/
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
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
