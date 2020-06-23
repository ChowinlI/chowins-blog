<template>
  <div class="comment-item">
    <div class="comment-author">
      <div class="comment-author-avatar">
        <img src="../../common/images/pf-photo2.jpg" alt />
      </div>
      <div class="comment-author-name">
        <p class="name">{{comment.name}}</p>
        <p class="time">{{comment.time}}</p>
      </div>
    </div>
    <div class="comment-content">
      {{comment.content}}
      <span class="reply-btn" @click="handleReply(comment.name,1)">回复</span>
    </div>
    <div class="reply-wrap">
      <ul class="reply-list">
        <li class="reply-item" v-for="(item, index) in comment.reply" :key="index">
          <div class="reply-author">
            <div class="reply-author-avatar">
              <img src="../../common/images/pf-photo2.jpg" alt />
            </div>
            <div class="reply-author-name">
              <p class="name">
                <span>{{item.reviewer}}</span> 回复
                <span>{{item.responder}}</span>
              </p>
              <p class="time">{{item.time}}</p>
            </div>
          </div>
          <div class="reply-content">
            {{item.content}}
            <span class="reply-btn" @click="handleReply(item.reviewer,2)">回复</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-item',
  props: {
    comment: {
      type: Object,
      default(){
        return {}
      }
    },
    index: {
      type: Number
    }
  },
  methods: {
    handleReply(name, type){
      const data = {
        name: name,
        type: type,
        index: this.index
      }
      this.$emit('changeReplyStatus', data)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~common/less/variable";

  .comment-item {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 4px 0;

    .comment-author {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .comment-author-avatar {
        display: block;
        width: 36px;
        height: 36px;
        margin-right: 10px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .comment-author-name {
        .name {
          font-size: 14px;
          color: @primary-color;
        }
        .time {
          font-size: 14px;
          color: #999999;
        }
      }
    }

    .comment-content {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 12px 0;
      font-size: 16px;
      line-height: 20px;
      position: relative;

      .reply-btn {
        display: block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 4px;
        color: #cc8400;
        font-size: 14px;
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
      }
    }

    .reply-wrap {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      background-color: #eeeeee;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;

      .reply-list {
        width: 98%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        .reply-item {
          width: 100%;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 8px 4px 0;

          &:not(:last-child) {
            border-bottom: thin dashed #dddddd;
          }

          .reply-author {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            .reply-author-avatar {
              display: block;
              width: 36px;
              height: 36px;
              margin-right: 1rem;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .reply-author-name {
              .name {
                font-size: 14px;

                span {
                  color: lighten(@primary-color, 10%);
                }
              }
              .time {
                font-size: 14px;
                color: #999999;
              }
            }
          }

          .reply-content {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 12px 0;
            font-size: 14px;
            line-height: 20px;
            position: relative;

            .reply-btn {
              display: block;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              padding: 4px;
              color: #cc8400;
              font-size: 14px;
              position: absolute;
              right: 0;
              bottom: 0;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
     .comment-item {
      padding: 8px 4px 0;

      .comment-author {
        .comment-author-avatar {
          width: 32px;
          height: 32px;
        }

        .comment-author-name {
          .name {
            font-size: 13px;
          }
          .time {
            font-size: 13px;
          }
        }
      }

      .comment-content {
        padding: 1rem 0;
        font-size: 14px;
        line-height: 18px;

        .reply-btn {
          padding: 4px;
          font-size: 13px;
        }
      }

      .reply-wrap {
        .reply-list {
          width: 98%;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          .reply-item {
            padding: 8px 4px 0;

            .reply-author {
              .reply-author-avatar {
                display: block;
                width: 32px;
                height: 32px;
                margin-right: 10px;
              }

              .reply-author-name {
                .name {
                  font-size: 12px;
                }
                .time {
                  font-size: 12px;
                }
              }
            }

            .reply-content {
              padding: 10px 0;
              font-size: 12px;
              line-height: 18px;

              .reply-btn {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>
