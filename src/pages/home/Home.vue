<template>
  <div id="home">
    <b-head></b-head>
    <nav class="commonWidth clear">
         <div class="location left">
           <span>当前位置：</span>
           <span>{{currentLocation}}</span>
           <span><a href="">[切换位置]</a></span>
         </div>
        <div class="searchMore right">
          <el-input
            placeholder="搜索更多..."
            suffix-icon="el-icon-search"
            v-model="input">
          </el-input>
        </div>
    </nav>
    <section class="commonWidth">
      <img src="http://shadow.elemecdn.com/faas/desktop/media/img/takeout.408a87.png" alt="不饿吗外卖">
      <div class="shopSort clear">
        <div class="left">
          商家分类:
        </div>
         <a href="" v-for="b in 5" class="shopSortDetail">全部</a>
      </div>
      <a class="shops left clear" href="" v-for="a in 8">
        <div class="shopLogo left">
          <img src="http://fuss10.elemecdn.com/9/3c/6b80be5df28b2d1bb2df8527b604cpng.png?imageMogr2/thumbnail/70x70/format/webp/quality/85" alt="" class="shopLogoAvatar">
          <span>{{waitingTime}}分钟</span>
        </div>
        <div class="shopContent">
          <div class="shopTitle">喜葵石锅拌饭·黄焖鸡米饭</div>
          <div class="starRating"><span><i class="el-icon-star-off"></i></span></div>
          <div class="discount">优惠免配送费</div>
          <div class="activities">
            <i class="el-icon-goods"></i>
            <i class="el-icon-message"></i>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
  import bHead from "../../components/header/Header"

  export default {
    data(){
      return{
        input: '',
        currentLocation:'石羊场',
        waitingTime:'40',
      }
    },
    components: {
      "bHead":bHead
    }
  }
</script>

<style scoped lang="less">
  #home {
    width: 100%;
    height: 100%;
    font-size: 16px;
    background-color: rgba(220,229,239,0.9);

    &>nav {
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      margin-bottom: 66px;
    }
    .location {
      span {
        margin-right: 5px;
      }
    }
    .searchMore {
      width: 300px;
    }
    section {
      position:relative;
      &>img {
        width: 186px;
        height: 55px;
        position: absolute;
        top: -49px;
        right: 0px;
      }
      .shopSort,.shops {
        background-color: #fff;
      }
      .shopSort {
        margin-bottom: 20px;
          &>div {
              width: 80px;
              height: 50px;
              margin-top: 5px;
              margin-left: 20px;
            }
          .shopSortDetail {
            white-space: nowrap;
            display: inline-block;
            margin: 5px 6px;
          }
      }
    .shops {
      width: 25%;
      border-bottom: 1px #f5f5f5 solid;
      height: 140px;
      &:hover {
        background-color: #f5f5f5;
       }
      .shopLogo {
        padding: 20px;
        color: #999;
        text-align: center;
        font-size: 12px;
        position: relative;
        .shopLogoAvatar {
          display: block;
          width: 70px;
          height: 70px;
          margin-bottom: 10px;
        }
      }
      .shopContent {
        padding: 20px;
        .shopTitle {
          margin-bottom: 6px;
          font-weight: 600;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #333;
        }
        .discount {
          font-size: 14px;
          margin-top: 3px;
        }
        .activities {
          margin-top: 9px;
        }
      }
    }
    }
  }
</style>
