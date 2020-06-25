<template>
  <div id="app">
    <h3> <Procurando-Cep></Procurando-Cep></h3>
  </div>
</template>

<script>
import ProcurandoCep from './components/ProcurandoCep'
export default {
  name: 'app',
  components:{
    ProcurandoCep
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

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
body{
  background-color: black;
}
</style>
