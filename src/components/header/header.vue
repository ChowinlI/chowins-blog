<template>
  <header class="header">
    <div class="header-wrap" :style="{ backgroundImage: 'url('+banner+')'}">
      <div class="avatar">
        <div class="avatar-wrap">
          <img :src="avatar" alt />
        </div>
      </div>
      <div class="bloger-name">
        <span class="name">叁巷肆号 | Chowin</span>
      </div>
      <div class="bloger-intro">一个懂得挖掘生活中的乐趣的Web前端爱好者,兼段子手</div>
      <nav class="nav">
        <div class="nav-list">
          <router-link class="nav-list-item" to="/home">首页</router-link>
          <router-link class="nav-list-item" to="/roast">吐槽</router-link>
          <router-link class="nav-list-item" to="/friends">dalao</router-link>
          <router-link class="nav-list-item" to="/about">关于我</router-link>
        </div>
      </nav>
      <nav class="collapse-nav">
        <div class="collapse" @click="showCollapseNav">
          <i class="iconfont icon-menu"></i>
        </div>
        <ul class="bar" v-if="collapse_show">
          <li @click="showCollapseNav">
            <router-link to="/home">首页</router-link>
          </li>
          <li @click="showCollapseNav">
            <router-link to="/roast">吐槽</router-link>
          </li>
          <li @click="showCollapseNav">
            <router-link to="/friends">dalao</router-link>
          </li>
          <li @click="showCollapseNav">
            <router-link to="/about">关于我</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="contact">
      <div class="contact-item">
        <a href="javascript:void (0)">
          <span class="iconfont icon-github"></span>
        </a>
      </div>
      <div class="contact-item">
        <a href="javascript:void (0)">
          <span class="iconfont icon-wechat"></span>
        </a>
      </div>
      <div class="contact-item">
        <a href="javascript:void (0)">
          <span class="iconfont icon-qq"></span>
        </a>
      </div>
      <div class="contact-item">
        <a href="javascript:void (0)">
          <span class="iconfont icon-sina"></span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data() {
    return {
      banner: require('common/images/bg2.jpg'),
      avatar: require('common/images/pf-photo2.jpg'),
      collapse_show: false
    }
  },
  methods: {
    showCollapseNav() {
      this.collapse_show = !this.collapse_show
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variable";
@import "~common/less/keyframes";

.header {
  height: 320px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  .header-wrap {
    position: absolute;
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: no-repeat center;
    background-size: cover;

    .avatar {
      margin: 0 auto;
      padding: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      overflow: hidden;

      .avatar-wrap {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      -webkit-animation: navDown 0.5s;
      animation: navDown 0.5s;
    }

    .bloger-name {
      margin-top: 16px;
      color: #fff;
      text-align: center;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      vertical-align: text-bottom;
      .name {
        display: inline;
        font-size: 22px;
      }
      -webkit-animation: navDown 0.5s;
      animation: navDown 0.5s;
    }

    .bloger-intro {
      font-size: 16px;
      margin-top: 6px;
      text-align: center;
      color: #fff;
      line-height: 18px;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      -webkit-animation: navDown 0.5s;
      animation: navDown 0.5s;
    }

    .nav {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      align-self: flex-end;
      position: absolute;
      bottom: 0;
      -webkit-animation: navDown 0.5s;
      animation: navDown 0.5s;

      .nav-list {
        display: flex;
        align-items: center;

        .nav-list-item {
          padding: 0 10px;
          color: #ffffff;

          &:not(:last-child) {
            margin-right: 38px;
          }
        }
      }
    }
  }

  .contact {
    position: absolute;
    left: 16px;
    bottom: 40px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99;

    .contact-item {
      width: 24px;
      height: 24px;
      text-align: center;
      color: #ffffff;

      .iconfont {
        font-size: 24px;
      }

      &:hover {
        color: @primary-color;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .collapse-nav {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 200px;

    .header-wrap {
      height: 200px;
      .avatar {
        .avatar-wrap {
          width: 80px;
          height: 80px;
        }
      }
      .bloger-name {
        .name {
          font-size: 20px;
        }
      }
      .bloger-intro {
        font-size: 12px;
      }
      .nav {
        display: none;
        width: 100%;
        padding: 3px 10px;
        .nav-list {
          .nav-list-item {
            padding: 0 6px;
          }
        }
      }

      .collapse-nav {
        display: block;
        position: absolute;
        top: 0;
        left: 10px;
        z-index: 100;

        .collapse {
          width: 40px;
          height: 40px;
          position: relative;
          text-align: center;
          cursor: pointer;
          -webkit-animation: navDown 0.5s;
          animation: navDown 0.5s;

          .iconfont {
            color: #ffffff;
            font-size: 24px;
          }
        }
        .bar {
          display: block;
          text-align: center;
          background: rgba(180, 180, 180, 0.8);
          width: 120px;
          -webkit-animation: show 0.3s;
          animation: show 0.3s;

          li {
            float: none;
            width: 100%;
            list-style: none;
            line-height: 36px;
            cursor: pointer;

            a {
              display: block;
              color: @primary-color;
            }
          }
        }
      }
    }
  }
}
</style>
