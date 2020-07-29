<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class='box'>
      <div class="item">
      <svg height="600" width="600">
        <circle ref="circle" v-bind:cx="cx" v-bind:cy="cy" r="40" stroke="black" stroke-width="3" fill="red"/>
      </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./bounce.ts"/>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    height: 600px;
    width: 600px;
    border: 5px solid;
    border-color: blueviolet;
    background: lightgrey;
  }
}
h3 {
  margin: 40px 0 0;
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
