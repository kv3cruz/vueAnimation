<template>
   <div class="padre">
      <transition
         :css="false"
         appear
         @before-enter="beforeEnter"
         @enter="enter"
      >
         <div class="card"></div>
      </transition>
   </div>
</template>

<script>
import gsap from 'gsap'
export default {
   methods: {
      beforeEnter(el) {
         el.style.opacity = 0
         el.style.transform = 'scale(0,0)'
      },
      enter(el, done) {
         gsap.to(el, {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: 'bounce.out',
            onComplete: done
         })
      }
   }
}
</script>

<style lang="css" scoped>
.card {
   height: 200px;
   width: 150px;
   background-color: blue;
   margin-left: auto;
   margin-right: auto;
   border: black;
   border-style: solid;
}
.padre {
  padding: 0 1rem;
  margin: 1rem;
}
</style>
