<template>
  <div class="todolistCon">
    <h1 class="text-center">ToDoList</h1>
    <text-input v-on:add-content="addContent" :content="content"></text-input>
    <div class="listBox">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a class="text-left">
            {{ item }}
          </a>
          <v-btn right color="primary" fab small dark @click="deleteContent(index)">
            <i class="material-icons">delete</i>
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput'
export default {
  name: 'ToDoList',
  components: {TextInput},
  data () {
    return {
      items: [],
      content: ''
    }
  },
  methods: {
    addContent (str) {
      this.content = ''
      this.items.push(str)
    },
    deleteContent (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
  .todolistCon {
    margin: 20px auto;
    color: #000000;
    padding:30px;
    width: 500px;
    border:thin solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
  }

  .todolistCon h1 {
    padding-bottom:10px;
  }
</style>
