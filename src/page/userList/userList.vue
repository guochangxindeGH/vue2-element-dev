<template>
    <section class="data_section">
        <treeCity></treeCity>
    </section>
</template>

<script>
import treeCity from 'components/d3/treeCity'
export default {
  data () {
    return {
    }
  },
  components: {
    treeCity
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
    .data_section {
        margin: 20px;
        overflow: auto;
        background: #ffffff;
        border-radius: 2px;
        padding: 20px;
        height: 100%;
    }
</style>
