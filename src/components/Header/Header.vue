<template>
  <header id="head_top">
    <div class="commonWidth clear">
      <el-menu :default-active="activeIndex" class="el-menu-demo left" mode="horizontal">
        <el-menu-item index="1" disabled>不饿吗看不见logo</el-menu-item>
        <el-menu-item index="2">首页</el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-menu-item index="4"><a href="https://en.wikipedia.org/wiki/Franchising" target="_blank">加盟不饿吗</a></el-menu-item>
        <el-menu-item index="5">
          <a href="https://en.wikipedia.org/wiki/Customer_service" target="_blank">不饿吗客服</a>
        </el-menu-item>
      </el-menu>
      <nav class="right clear">
        <ul class="left clear colorFFF">
          <li class="left"><i class="el-icon-document"></i>&nbsp;<a href="https://en.wikipedia.org/wiki/Rule">规则中心</a></li>
          <li class="left"><i class="el-icon-mobile-phone"></i>&nbsp;<a href="https://en.wikipedia.org/wiki/App">手机应用</a></li>
        </ul>
        <div class="right colorFFF">
          <i class="el-icon-setting"></i>&nbsp;<a href="">登录&nbsp;</a>/&nbsp;<a href="">注册</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '2',
    }
  }
}
</script>

<style scoped lang="less">
  @f:#fff;

  #head_top {
    width: 100%;
    height: 60px;
    background-color: #78a5f1;

    .el-menu{
      background-color: transparent;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
      background-color: #1e89e0;
    }
    .el-menu--horizontal{
      border-bottom:none;

      &>.el-menu-item{
          * {
            vertical-align: inherit;
          }
          color: @f;
          font-size: 18px;
          &.is-active {
             border-bottom: 2px solid @f;
             background-color: #1e89e0;
          }
        }
    }
    nav {
      width: 400px;
      line-height: 60px;
      font-size: 16px;
      ul>li {
        margin-right: 50px;
      }
      a {
        color:@f;
      }
    }

  }

</style>
