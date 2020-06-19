<template>
 <div class="header">
   <v-navigation-drawer
     v-model="drawer"
     :mini-variant.sync="mini"
     app
     fixed
     permanent>
     <v-list-item class="px-2">
       <v-btn
         icon
         @click.stop="mini = !mini">
         <v-icon v-if="mini">mdi-chevron-right</v-icon>
         <v-icon v-else>mdi-chevron-left</v-icon>
       </v-btn>
     </v-list-item>
     <v-divider></v-divider>
     <v-list>
       <router-link to="/main">
         <v-list-item class="px-2">
             <v-list-item-icon>
               <v-icon>home</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
               <v-list-item-title class="mx-2">
                 MAIN
               </v-list-item-title>
             </v-list-item-content>
         </v-list-item>
       </router-link>

       <router-link to="/todo-list">
         <v-list-item class="px-2">
           <v-list-item-icon>
             <v-icon>mdi-folder</v-icon>
           </v-list-item-icon>
           <v-list-item-content>
             <v-list-item-title class="mx-2">
               TODO LIST
             </v-list-item-title>
           </v-list-item-content>
         </v-list-item>
       </router-link>
     </v-list>
   </v-navigation-drawer>
 </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: true,
      mini: true
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    width: 100%;
  }
</style>
