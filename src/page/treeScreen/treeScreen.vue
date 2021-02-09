<template>
    <div>
        <div id="container" ref="container"></div>
    </div>
</template>

<script>
import * as Three from 'three'
export default {
  name: 'treeScreen',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  mounted () {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      // let container = document.getElementById('container')
      let container = this.$refs.container

      // 摄像机
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 0.6

      // 场景
      this.scene = new Three.Scene()

      // 渲染器
      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      // 物体
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)
    },
    animate () {
      // 动画
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    spotLight () {
      // 光源
      let spotLight = new Three.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      this.scene.add(spotLight)
      // 光源 end

      // 物体
      let geometry = new Three.BoxGeometry(1, 1, 1)
      let material = new Three.MeshLambertMaterial({color: 0x00ff00})
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)
      // 物体 end
    }
  }
}
</script>

<style lang="less" scoped>
    #container {
        height: 400px;
    }
</style>
