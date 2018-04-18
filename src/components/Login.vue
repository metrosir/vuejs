<template>
  <div class="Login">
    {{details()}}
  </div>
</template>

<script>
export default {
  name: 'Login',
  // data: {
  //   site: '麒麟',
  //   url: 'www.baidu.com',
  //   alexa: '10000'
  // },
  methods: {
    details() {
      return this.site + ' - this is demo'
    }
  },
  data () {
    return {
      msg: 'this is Login',
      
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
