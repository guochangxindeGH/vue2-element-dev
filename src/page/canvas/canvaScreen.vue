<template>
    <div class="ball">
        <canvas ref="canvas" class="canvas">当前浏览器不支持canvas 请升级！</canvas>
    </div>
</template>

<script>
export default {
  name: 'canvaScreen',
  data () {
    return {
      canvas: null,
      ctx: null
    }
  },
  mounted () {
    this.initCanvas()
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas()
    }
  },
  methods: {
    initCanvas () {
      console.log('初始化canvas')
      // this.canvas = document.getElementById('canvas')
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.drawSmile()
    },
    drawSmile () {
      this.ctx.beginPath()
      this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
      this.ctx.moveTo(110, 75)
      this.ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      this.ctx.moveTo(65, 65)
      this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      this.ctx.moveTo(95, 65)
      this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      this.ctx.stroke()
    }
  }
}
</script>

<style lang="less" scoped>
    .canvas {
        width: 100vw;
        height: 100vh;
    }
</style>
