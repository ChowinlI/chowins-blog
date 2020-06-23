<template>
  <div class="article">
    <div class="article-section">
      <div class="tag">真皮沙发</div>
      <div class="article-title"># 文章标题</div>
      <div class="article-attr">
        <div class="article-attr-item"><span class="iconfont icon-author"></span><span>Chowin</span></div>
        <div class="article-attr-item"><span class="iconfont icon-time"></span><span>2018-11-19 11:30</span></div>
        <div class="article-attr-item"><span class="iconfont icon-comments"></span><span>7</span></div>
        <div class="article-attr-item"><span class="iconfont icon-views"></span><span>2200</span></div>
      </div>
      <div class="article-content">文章内容</div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import Comment from 'components/comment/index'
export default {
  name: 'v-article',
  components: {
    Comment
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variable";

.article{
  width: 100%;

  .article-section {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 4px;
    color: #333333;
    position: relative;

    .tag{
      padding: 2px 6px;
      font-size: 16px;
      color: #3d3d3d;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      box-shadow: 0 0 3px #333;
      cursor: pointer;
      background-color: lighten(@primary-color, 20%);
      position: absolute;
      top: 10px;

      &:hover {
        background-color: #f7f7f7 !important;
      }
    }

    .article-title{
      width: 100%;
      text-align: center;
      padding: 10px 0;
      font-size: 24px;
      font-weight: 600;
      margin-top: 20px;
    }

    .article-attr{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      color: #999999;

      .article-attr-item{
        font-size: 14px;
        text-align: justify;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:not(:last-child){
          margin-right: 14px;
        }

        &:hover {
          color: @primary-color;
        }
        .iconfont{
          margin-right: 3px;
        }
      }
    }

    hr{
      margin: 10px 0;
      border: 0;
      border-top: thin solid #ddd;
      border-bottom: thin solid #ffffff;
    }

    blockquote{
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-left: 2px solid @primary-color;
      padding: 8px 10px;
      line-height: 30px;
      font-size: 18px;
      margin: 16px 0;

      .blockquote-title{
        color: darken(@primary-color, 20%);
      }

      .blockquote-paragraph{
        text-indent: 2em;
        text-align: justify;
      }
    }

    .article-content{
      font-size: 18px;
      text-indent: 2em;
      text-align: justify;
      margin-bottom: 40px;

      a{
        color: @primary-color;
      }
    }

  }
}

@media screen and (max-width: 768px) {
  .article{
    .article-section{
      .tag{
        padding: 0 4px;
        font-size: 12px;
      }
      .article-title{
        font-size: 20px;
      }
      .article-attr{

        .article-attr-item{
          font-size: 12px;

          &:not(:last-child){
            margin-right: 10px;
          }
        }
      }
      blockquote{
        font-size: 14px;
      }
      .article-content{
        font-size: 14px;
      }
    }
  }
}
</style>
