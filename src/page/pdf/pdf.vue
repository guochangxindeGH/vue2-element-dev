<template>
    <section class="data_section">
        <el-button type="text" @click="preview(fileList[0])">预览</el-button>
        <el-button type="text" @click="preview(fileList[0], 2)">pdf放大效果</el-button>
        <el-button type="text" @click="preview(fileList[0], 1)">iframe预览</el-button>
        <el-dialog
                title="文件预览"
                :visible.sync="dialogVisible"
                width="50%"
                :fullscreen="isFull"
                :custom-class="isFull ? 'preview-dialog' : ''"
        >
            <!-- 加载全部页面的PDF是一个for循环,不能指定用来打印的ref -->
            <div v-if="!isFull" ref="printContent">
                <Pdf
                        v-for="i in numPages"
                        :key="i"
                        :src="src"
                        :page="i"
                />
            </div>
            <!-- 这种写法默认只加载第一页,pdf隐藏,打印用的 -->
            <Pdf
                    :src="src"
                    ref="myPdf"
                    v-show="isShow"
            />
            <!-- iframe打印 -->
            <iframe v-if="isFull" :src="url" frameborder="0" style="width: 100%; height: 100%"></iframe>
            <span slot="footer" class="dialog-footer">
        <el-button @click="print">vue-pdf打印</el-button>
        <el-button type="primary" @click="printImg">转图片打印</el-button>
      </span>
        </el-dialog>
    </section>
</template>

<script>
import Pdf from 'vue-pdf'
export default {
  name: 'pdf',
  data () {
    return {
      fileList: [
        {
          id: 2,
          fileName: '应收账款',
          fileUrl: '/Users/Jon/Desktop/github项目/vue2-element-dev/public/2020-07-23_SYS1.pdf'
        },
        {
          id: 3,
          fileName: '测试PDF',
          fileUrl: `${window.location.origin}/test2.pdf`
        },
        {
          id: 1,
          fileName: '线上文件,本地跨域(测试用)',
          fileUrl: 'http://172.16.79.37:8888/group1/M00/00/08/rBBPIV7whg2AQNCmAAoc6DKtkwE841.pdf'
        }
      ],
      numPages: undefined,
      dialogVisible: false,
      src: '',
      isShow: false,
      url: '/test2.pdf',
      isFull: false,
      dialogVisible2: false
    }
  },
  components: {
    Pdf
  },
  methods: {
    // 预览
    preview (item, type) {
      this.src = Pdf.createLoadingTask(item.fileUrl)
      this.src.promise.then(pdf => {
        this.numPages = pdf.numPages
      })
      debugger
      if (type === 1) {
        this.isFull = true
        this.dialogVisible = true
      } else if (type === 2) {
        this.dialogVisible2 = true
      } else {
        this.isFull = false
        this.dialogVisible = true
      }
    },
    // 打印
    print () {
      console.log(this.$refs.myPdf)
      this.$refs.myPdf && this.$refs.myPdf.print()
    },
    // 转图片之后打印
    printImg () {
      console.log('打印')
    }
  }
}
</script>

<style scoped lang="less">
    .data_section {
        margin: 20px;
        overflow: auto;
        background: #ffffff;
        border-radius: 2px;
        padding: 20px;
        height: 100%;
    }
</style>
