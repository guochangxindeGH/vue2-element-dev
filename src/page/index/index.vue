<template>
    <section class="data_section" ref="data_section">
        <el-row :gutter="10" class="row_list">
            <el-col :span="3"><div class="pay data_list"><p class="list_number">+208.65</p><p>盈亏(千万)</p></div></el-col>
            <el-col :span="3"><div class="income data_list"><p class="list_number">+12.37</p><p>收益率(%)</p></div></el-col>
            <el-col :span="3"><div class="hidden_investors data_list"><p class="number">686</p><p></p>潜在投资人(人)</div></el-col>
            <el-col :span="3"><div class="intention_investors data_list"><p class="number">264</p><p>意向投资人(人)</p></div></el-col>
            <el-col :span="3"><div class="waitpending_investors data_list"><p class="number">137</p><p>待审投资人(人))</p></div></el-col>
            <el-col :span="3"><div class="pending_investors data_list"><p class="number">100</p><p></p>审核中投资人(人)</div></el-col>
            <el-col :span="3"><div class="pass_investors data_list"><p class="number">86</p><p>审核通过投资人(人)</p></div></el-col>
            <el-col :span="3"><div class="newadd_investors data_list"><p class="number">36</p><p>新增投资人(人)</p></div></el-col>
        </el-row>
        <el-row :gutter="10" class="row_list">
            <el-col :span="12">
                <bar-type-data  id="bar_data"></bar-type-data>
            </el-col>
            <el-col :span="12">
                <line-type-data id="line_data"></line-type-data>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
                <ordertype  id="bin1_data" type="ordertype"></ordertype>
            </el-col>
            <el-col :span="8">
                <ordersource id="bin2_data" type="ordersource"></ordersource>
            </el-col>
            <el-col :span="8">
                <ordertype id="bin3_data" type="areatype"></ordertype>
            </el-col>
        </el-row>
    </section>
</template>

<script>
// import '../../../node_modules/echarts/theme/macarons.js'
import ordertype from 'components/echarts/ordertype'
import ordersource from 'components/echarts/orderSource'
import barTypeData from 'components/echarts/barTypeData'
import lineTypeData from 'components/echarts/lineTypeData'

export default {
  data () {
    return {
      bar_chart: null,
      line_chart: null,
      bar_id: 'bar_data',
      line_id: 'line_data'
    }
  },
  components: {
    barTypeData,
    lineTypeData,
    ordertype,
    ordersource
  },
  mounted () {
    this.setSectionHeight()
  },
  beforeDestroy () {
    if (!this.bar_chart || !this.line_chart) {
      return
    }
    this.bar_chart.dispose()
    this.line_chart.dispose()
    this.bar_chart = null
    this.line_chart = null
  },
  methods: {
    setSectionHeight () {
      this.$nextTick(() => {
        this.$refs.data_section.style.height = (document.body.clientHeight - 100) + 'px'
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .data_section{
        margin: 20px;
        overflow: auto;
        background: #ffffff;
        border-radius: 2px;
        padding: 20px;
        .row_list{
            margin-bottom: 20px;
        }
        .pay{
            background-color:#18a689;
        }
        .income{
            background-color:#99CC00;
        }
        .hidden_investors{
            background-color:#33CC99;
        }
        .intention_investors{
            background-color:#3b5999;
        }
        .waitpending_investors{
            background-color:#66CC99;
        }
        .pending_investors{
            background-color:#009999;
        }
        .pass_investors{
            background-color:#FF9900;
        }
        .newadd_investors{
            background-color:#0099CC;
        }
        .data_list{
            text-align: center;
            font-size: 14px;
            border-radius: 6px;
            padding: 15px 0;
            color:#fff;
            .list_number{
                font-size:16px;
                font-weight:bold;
            }
            .number{
                font-size:16px;
                font-weight:bold;
            }

        }

    }

</style>
