<template>
   <div>
      <input v-model="newContact" type="text" name="name" placeholder="name" />
      <button @click="addContact">Add</button>
      <button @click="sort">Sort</button>
      <transition-group tag="ul" name="slide-up" appear>
         <li v-for="contact in contacts" :key="contact">{{ contact }}</li>
      </transition-group>
   </div>
</template>

<script>
export default {
   data() {
      return {
         newContact: '',
         contacts: ['kevin', 'victoria']
      }
   },
   methods: {
      addContact() {
         this.contacts.push(this.newContact)
         this.newContact = ''
      },
      sort() {
         this.contacts.sort()
      }
   }
}
</script>

<style lang="css" scoped>
li {
   text-align: center;
   list-style:none;
}
</style>
