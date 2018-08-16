<template>
  <div class="loginWrapper">
    <!--动态背景-->
    <canvas id="canvas"></canvas>
    <!--表单-->
    <el-container>
      <el-form :model="loginForm" :rules="rules" class="loginForm">
        <el-form-item>
          <h1>饿？登录解决温饱！</h1>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input v-model="loginForm.tel" placeholder="请输入正确的电话号码" clearable></el-input>
        </el-form-item>
        <el-form-item prop="msg" >
          <el-input v-model="loginForm.msg" placeholder="请输入收到的验证码" clearable></el-input>
        </el-form-item>
        <el-form-item>
              温馨提示：未注册'不饿吗'账号的手机号，登录时将自动注册，且代表您已同意
              <a href="https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE/2602112">不饿吗用户协议</a>
        </el-form-item>
        <el-form-item  width="100%">
          <el-button type="success" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
  import CanvasBG from '../../js/canvas.js'
  //  $vm
  export default {
    data() {
      return {
        loginForm: {
          tel: '',
          msg: '',
        },
        rules: {
          tel: [
            { required: true, message: '歪歪歪~', trigger: 'blur' },
            { min: 11, max: 11, message: '手机号是11位哒~', trigger: 'blur' }
          ],
          msg: [
            { required: true, message: '短信收到了没啊', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
       });
      },
    }
  }
</script>

<style scoped lang="less">
  .loginWrapper {
    width:100%;
    height:100%;
    position: absolute;

    #canvas {
      width: 100%;
      height: 100%;
      background: #04BBD3;
      z-index: -1;
      position : absolute;
    }
  }
 .el-container {
    width:300px;
    height:500px;
    position: relative;
    top: 50%;
    left: 50%;
   -ms-transform: translate(-50%,-50%);
   -moz-transform: translate(-50%,-50%);
   -o-transform: translate(-50%,-50%);
   transform: translate(-50%,-50%);
   /*background-color: #fff;*/

      .el-form-item:nth-child(4) {
        /deep/ div {
            padding-top: 10px;
            line-height: 20px;
        }
      }

      h1 {
        margin-bottom: 100px;
        text-align: center;
      }
      button {
        width: 300px;
      }
  }

</style>
