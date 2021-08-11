<template>
   <div id="container">
      <div v-for="card in cards" :key="card.id" class="card"></div>
   </div>
</template>

<script>
import gsap from 'gsap'
export default {
   data() {
      return {
         cards: [
            { id: 121 },
            { id: 122 },
            { id: 123 },
            { id: 124 },
            { id: 125 }
         ]
      }
   },
   mounted() {
      gsap.from('.card', {
         duration: 0.5,
         opacity: 0,
         scale: 0,
         ease: 'power1',
         stagger: {
            each: 0.1,
            from: 'center' //edges
         }
      })
   },
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
   border: black;
   border-style: solid;
}
#container{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
}
</style>
