<script>
export default {
  name: 'countItem',
  props: {
    count: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      // required: true,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dataInput: this.count
    }
  },
  methods: {
    addCount () {
      if (this.count >= this.max) {
        this.$swal({
          title: `超過庫存數量`,
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) + 1
      this.emitData(num)
    },
    minusCount () {
      if (this.count <= this.min) {
        this.$swal({
          title: '數量至少大於1',
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) - 1
      this.emitData(num)
      // this.countNum--
    },
    change () {
      // console.log('input 有改變')
      let input = Number(this.dataInput)
      let max = this.max
      let min = this.min
      if (input <= max && input >= min && Number.isInteger(input)) {
        this.emitData(input)
      } else if (input === 0) { // 沒輸入值或是輸入 1-2 或是輸入 0
        // console.log('沒輸入數值')
      } else {
        // console.log('數值超出範圍')
        // console.log(Number.isInteger(input))
        // console.log(input)
        this.dataInput = this.count
      }
    },
    emitData (num) {
      this.$emit('changeData', num)
    }
  },
  watch: {
    count () {
      // console.log('props 有變化')
      this.dataInput = this.count
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
