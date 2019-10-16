<template>
  <!-- 登录页面  -->
  <div class="login">
    <div class="login-warp">
      <!-- logo -->
      <div class="loginlogo">
        <img src="./logo_index.png" alt />
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button>获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" @click="login" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      },
      // 定义规则
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { min: 6, max: 6, message: '验证码错误 ', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 获取 el-form 元素   this.$refs.from  下面结果也能获取
      this.$refs['form'].validate(valid => {
        // 如果 valid 为 true 说明验证通过 , 反之不通过
        if (valid) {
          console.log('验证通过')
        } else {
          // 结束当前方法
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.login-warp {
  background-color: #fff;
  padding: 30px;
  min-width: 300px;
  .loginlogo {
    text-align: center;
    img {
      width: 150px;
      margin-bottom: 20px;
    }
  }
  .loginbtn {
    width: 100%;
  }
}
</style>
