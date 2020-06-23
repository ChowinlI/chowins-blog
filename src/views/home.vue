<template>
  <div id="home" ref="home">
    <!--<canvas id="canvas" class="canvas"></canvas>-->
    <div class="title"># 首页</div>
    <div class="tags">
      <div class="tags-item">学无止境</div>
      <div class="tags-item">供想时间</div>
      <div class="tags-item">真皮沙发</div>
      <div class="tags-item">你怎么说</div>
    </div>
    <section class="article-list">
      <div v-for="(article, index) in articles" :key="index" class="article-list-item">
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img :src="article.author_pf" />
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <router-link :to="{path: '/article/' + article.id}">{{article.title}}</router-link>
            </div>
            <div class="article-info-others">
              <span class="author">{{article.author}}</span>
              <span class="created_at">{{article.created_time}}</span>
            </div>
          </div>
        </div>
        <div v-if="article.page" class="article-picture-wrap">
          <img class="article-picture" :src="article.page" alt />
        </div>
        <div class="article-summary-div">
          <a href="javascript:void (0);">
            <p class="article-summary-p">{{article.desc}}</p>
          </a>
        </div>
        <div class="article-tags">
          <div
            v-for="(tag, index) in article.tags"
            :key="index"
            class="article-tags-item"
          >{{tag.name}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  //  directives: { // 页面滚动时文章列表子项左右切入
  //    scrollSlide:{
  //      inserted:function (el) {
  //          var h = window.innerHeight;
  //          var s_top = $('#app').scrollTop(); //相当于是窗口垂直方向已滚动的距离
  //          var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
  //        //$("#header").height()是头部的高度，因为offsetTop是相对$('#index')即article_item[i]的offsetParent来计算的
  //          if(t-h < -$(el).height()/2){
  //            $(el).css('opacity',1);
  //          }
  //          document.getElementById('app').addEventListener('scroll',function () {
  //            var s_top = $('#app').scrollTop(); //相当于是窗口垂直方向已滚动的距离
  //            var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
  //            if(t-h < -$(el).height()/2){
  //              $(el).css('opacity',1);
  //            }
  //          });
  //        }
  //    }
  //  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '要不平凡，好像很难',
          author: 'Chowin',
          author_pf: require('common/images/pf-photo2.jpg'),
          author_id: 1,
          created_time: '2018-06-15 17:10',
          page: require('common/images/page.jpg'),
          desc: '有的事情，平常心对待就好……',
          tags: [{ name: '真皮沙发', id: 1 }]
        },
        {
          id: 2,
          title: '我请贝爷吃皮蛋',
          author: 'Chowin',
          author_pf: require('common/images/pf-photo2.jpg'),
          author_id: 1,
          created_time: '2018-06-15 17:10',
          page: require('common/images/page.jpg'),
          desc: '探险家贝爷曾说：万物去头皆可食……',
          tags: [{ name: '真皮沙发', id: 1 }]
        }
      ]
    }
  },
  methods: {
    toArticle(article){
      this.$router.push({ path: `/article/${article.id}` })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/keyframes";
@import "~common/less/variable";

#home {
  position: relative;
  padding: 4px;

  .title {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
    font-weight: 600;
  }

  .tags {
    width: 100%;
    display: flex;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    .tags-item {
      padding: 2px 6px;
      font-size: 16px;
      color: #3d3d3d;
      border-radius: 4px;
      margin-bottom: 10px;
      box-shadow: 0 0 3px #333;
      -webkit-box-shadow: 0 0 3px #333;
      -moz-box-shadow: 0 0 3px #333;
      cursor: pointer;

      &:hover {
        background-color: #f7f7f7 !important;
      }

      &:nth-child(4n + 1) {
        background-color: #bee1e5;
      }

      &:nth-child(4n + 2) {
        background-color: #d9e8bf;
      }

      &:nth-child(4n + 3) {
        background-color: #fff2a4;
      }

      &:nth-child(4n + 4) {
        background-color: #ffb1bd;
      }

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  .article-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 4px;
    overflow: hidden;

    .article-list-item {
      width: 100%;
      position: relative;
      padding: 15px 12px;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.8);
      animation: articleUp 0.8s;
      border-bottom: thin dashed #c8c8c8;

      .article-info-wrap {
        width: 100%;
        display: flex;
        align-items: center;

        .article-author-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid #e7e7e7;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          -webkit-transition: all ease-in-out 0.5s;
          -moz-transition: all ease-in-out 0.5s;
          -ms-transition: all ease-in-out 0.5s;

          &:hover {
            border-color: @primary-color;
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .vertical-line-div {
          position: relative;
          width: 3px;
          height: 70px;
          text-align: center;
          margin: 0 0.8rem 0 1.6rem;

          .vertical-line {
            display: inline-block;
            height: 4rem;
            margin-top: 1.5rem;
            width: 1px;
            background-color: #dadada;
            transition: all 0.2s ease;
            -webkit-transition: all ease 0.2s;
            -moz-transition: all ease 0.2s;
            -ms-transition: all ease 0.2s;
          }
        }
        .article-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .article-info-title {
            display: inline-block;
            font-size: 20px;
            font-weight: 400;
            transition: all 0.5s ease-in-out;
            -webkit-transition: all ease-in-out 0.5s;
            -moz-transition: all ease-in-out 0.5s;
            -ms-transition: all ease-in-out 0.5s;

            &:hover {
              color: @primary-color;
            }
          }

          .article-info-others {
            span {
              font-size: 14px;
              &:hover {
                color: @primary-color;
              }
              &:not(:last-child) {
                margin-right: 4px;
              }
            }
          }
        }
      }

      .article-picture-wrap {
        width: 100%;
        background-color: #ffffff;
        .article-picture {
          display: block;
          width: 100%;
        }
      }

      .article-summary-div {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 20px 15px 10px;
        .article-summary-p {
          color: #666;
          overflow: hidden;
          font-size: 18px;
          line-height: 1.6;
          text-indent: 2em;
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }

      .article-tags {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 1rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 8px;

        .article-tags-item {
          padding: 2px 6px;
          font-size: 16px;
          color: #3d3d3d;
          border-radius: 4px;
          box-shadow: 0 0 3px #333;
          cursor: pointer;

          &:hover {
            background-color: #f7f7f7 !important;
          }

          &:nth-child(4n + 1) {
            background-color: #bee1e5;
          }

          &:nth-child(4n + 2) {
            background-color: #d9e8bf;
          }

          &:nth-child(4n + 3) {
            background-color: #fff2a4;
          }

          &:nth-child(4n + 4) {
            background-color: #ffb1bd;
          }

          &:not(:last-child) {
            margin-right: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 18px;
    }
    .tags {
      .tags-item {
        padding: 0 4px;
        font-size: 12px;
      }
    }
    .article-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .article-list-item {
        .article-info-wrap {
          .article-author-img {
            display: none;
          }
          .vertical-line-div {
            display: none;
          }
          .article-info {
            .article-info-title {
              font-size: 16px;
            }

            .article-info-others {
              span {
                font-size: 12px;
              }
            }
          }
        }

        .article-summary-div {
          .article-summary-p {
            font-size: 14px;
          }
        }

        .article-tags {
          .article-tags-item {
            padding: 1px 4px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
