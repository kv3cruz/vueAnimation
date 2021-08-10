<template>
   <div>
      <button @click="isOpen = !isOpen">My Profile</button>
      <transition
         :css="false"
         @before-enter="beforeEnter"
         @enter="enter"
         @leave="leave"
      >
         <div v-if="isOpen" class="drawer">
            <img src="../assets/logo.png" alt="" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </transition>
   </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
   data() {
      return {
         isOpen: false
      }
   },
   methods: {
      beforeEnter(el) {
         el.style.opacity = 0
         el.style.width = '0em'
      },
      enter(el, done) {
         Velocity(
            el,
            { opacity: 1, width: '12em' },
            { duration: 1000, easing: [100, 5], complete: done }
         )
         el.style.opacity = 0
         el.style.width = '0em'
      },
      leave(el, done) {
         Velocity(
            el,
            { opacity: 0, width: '0em' },
            { duration: 500, easing: 'easeInCubic', complete: done }
         )
      }
   }
}
</script>

<style lang="css" scoped></style>
