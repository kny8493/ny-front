<template>
  <v-text-field
    v-model="text"
    solo
    clearable
    :append-icon="'mdi-send'"
    @keyup.enter="saveContent"
    @click:append="saveContent"
  ></v-text-field>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['content'],
  data () {
    return {
      text: ''
    }
  },
  watch: {
    content (newVal, oldVal) {
      this.text = ''
      console.log(newVal + '||' + oldVal)
    }
  },
  methods: {
    saveContent () {
      this.$emit('add-content', this.text)
    }
  }
}
</script>

<style scoped>

</style>
