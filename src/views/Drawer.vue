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
export default {
   data() {
      return {
         isOpen: false
      }
   }
}
</script>

<style lang="css" scoped></style>
