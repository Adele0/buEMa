<template>
  <div class="loginWrapper">
    <!--动态背景-->
    <canvas id="canvas"></canvas>
    <!--表单-->
    <el-container>
      <el-form :model="loginForm" :rules="rules" class="loginForm" ref="loginForm">
        <el-form-item>
          <h1>饿？登录解决温饱！</h1>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input v-model="loginForm.tel" placeholder="请输入正确的电话号码" clearable @focus="changeMethod" @change="freeBtn(loginForm.tel)" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item prop="msg" >
          <el-input v-model="loginForm.msg" placeholder="请输入收到的验证码" clearable @focus="changeMethod" @keyup.13.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item>
              温馨提示：未注册'不饿吗'账号的手机号，登录时将自动注册，且代表您已同意
              <a href="https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE/2602112">不饿吗用户协议</a>
        </el-form-item>
        <el-form-item  width="100%">
          <el-button @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <el-button @click="sendMsg" :disabled="btn" >获取验证码</el-button>
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-tel" v-show="defaultImg">
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-msg" v-show="changeImg">
    </el-container>
  </div>
</template>

<script>
  import CanvasBG from '../../js/canvas.js'

  export default {
    data() {
      return {
        btn:true,
        defaultImg:false,
        changeImg:true,
        timeId:null,
        loginForm: {
          tel: '',
          msg: '',
        },
        rules: {
          tel: [
            {required: true, message: '歪歪歪~', trigger: 'blur'},
            {min: 11, max: 11, message: '手机号是11位哒~', trigger: 'blur'}
          ],
          msg: [
            {required: true, message: '验证码收到了没啊~', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            if (this.loginForm.msg == 'starve') {
              this.$message({
                type: 'success',
                message:'让我们开始饕餮之旅吧~~~'
              });
              this.$router.push("/");
            }else {
              this.$message({
                type: 'error',
                message:'emmmmm...验证码不对哦'
              });
              this.$refs[formName].resetFields();
              this.btn=true;
            }
          } else {
            this.$message({
              type: 'error',
              message:'别心急，先完成验证嘛~~'
            });
            return false;
          }
        });
      },
      freeBtn(value){
        if(value.length==11) {
            this.btn=false;
        }else {
            this.btn=true;
        }
      },
      changeMethod() {
        this.defaultImg = !this.defaultImg;
        this.changeImg = !this.changeImg;
      },
      sendMsg() {
        this.$message({
          type: 'warning',
          message:'验证码：starve'
        });
      }
    },
    mounted() {
//      使用canvas动态背景的2种方法：1. import CanvasBG from '../../js/canvas.js'后直接调用；2.在mounted直接写
      CanvasBG(this.timeId);

//      这里使用直接写的方式
//      var Canvas = document.getElementById('canvas');
//      var ctx = Canvas.getContext('2d');
//
//      var resize = function() {
//        Canvas.width = Canvas.clientWidth;
//        Canvas.height = Canvas.clientHeight;
//      };
//      window.addEventListener('resize', resize);
//      resize();
//
//      var elements = [];
//      var presets = {};
//
//      presets.o = function (x, y, s, dx, dy) {
//        return {
//          x: x,
//          y: y,
//          r: 12 * s,
//          w: 5 * s,
//          dx: dx,
//          dy: dy,
//          draw: function(ctx, t) {
//            this.x += this.dx;
//            this.y += this.dy;
//
//            ctx.beginPath();
//            ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
//            ctx.lineWidth = this.w;
//            ctx.strokeStyle = '#fff';
//            ctx.stroke();
//          }
//        }
//      };
//
//      presets.x = function (x, y, s, dx, dy, dr, r) {
//        r = r || 0;
//        return {
//          x: x,
//          y: y,
//          s: 20 * s,
//          w: 5 * s,
//          r: r,
//          dx: dx,
//          dy: dy,
//          dr: dr,
//          draw: function(ctx, t) {
//            this.x += this.dx;
//            this.y += this.dy;
//            this.r += this.dr;
//
//            var _this = this;
//            var line = function(x, y, tx, ty, c, o) {
//              o = o || 0;
//              ctx.beginPath();
//              ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
//              ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
//              ctx.lineWidth = _this.w;
//              ctx.strokeStyle = c;
//              ctx.stroke();
//            };
//
//            ctx.save();
//
//            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
//            ctx.rotate(this.r * Math.PI / 180);
//
//            line(-1, -1, 1, 1, '#fff');
//            line(1, -1, -1, 1, '#fff');
//
//            ctx.restore();
//          }
//        }
//      };
//
//      for(var x = 0; x < Canvas.width; x++) {
//        for(var y = 0; y < Canvas.height; y++) {
//          if(Math.round(Math.random() * 8000) == 1) {
//            var s = ((Math.random() * 5) + 1) / 10;
//            if(Math.round(Math.random()) == 1)
//              elements.push(presets.o(x, y, s, 0, 0));
//            else
//              elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
//          }
//        }
//      }
//
//      this.timeId = setInterval(function() {
//        ctx.clearRect(0, 0, Canvas.width, Canvas.height);
//
//        var time = new Date().getTime();
//        for (var e in elements)
//          elements[e].draw(ctx, time);
//      }, 10);
    },
    distroyed(){
      clearInterval(this.timeId);
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
      /*background: #04BBD3;*/
      background: #78a5f1;
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

    &> button {
       position: relative;
       top: 133px;
       left: -108px;
       height: 41px;
       width: 108px !important;
     }
      .el-form-item:nth-child(4) {
        /deep/ div {
            padding-top: 10px;
            line-height: 20px;
        }
      }

      h1 {
        font-size: 33px;
        margin-bottom: 72px;
        text-align: center;
      }
      button {
        width: 300px;
        border: none;
        color: #fff;
        background-color:#61daa5;
      }
  }

  img {
    position: absolute;
    top: 60px;
    left: 50%;
    width: 120px;
    height: 95px;
    transform: translate(-50%, 0);
  }

</style>
