<template>
  <div class="useElement">
    <h2>我是h22222222</h2>
    <h4>试用下按钮</h4>
    <el-button type="success">成功按钮</el-button>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <div>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: true
    }
  }
}
</script>
<style>
</style>
