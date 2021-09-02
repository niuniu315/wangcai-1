<template>
  <div>
    <ul class="types">
      <li :class="type === '_' && 'selected'" @click="selecType('_')" >支出</li>
      <li :class="type === '+' && 'selected'" @click="selecType('+')">收入</li>
    </ul>
  </div>
</template>

<script >
  export default {
    name: 'Types',
    props: ['xxx'],
    data() {
      return{
        type: '_'
      }
    },
    mounted() {
      console.log(this.xxx)
    },
    methods:{
      selecType(type){
        if(type !== '_' && type !== '+'){
          throw new Error('type is unknown')
        }
        this.type=type
      }
    }
  };
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>