<template>
  <div class="comment-section">
    <h3 class="comment-title" v-if="comment.length>0">共有{{comment.length}}条评论</h3>
    <h3 class="comment-title" v-else>暂无评论，快来发射几条(￣▽￣)／</h3>
    <hr />
    <ul class="comment-list">
      <li class="comment-item" v-for="(item,index) in comment" :key="index">
        <comment-item :comment="item" :index="index" @changeReplyStatus="toReply"></comment-item>
      </li>
    </ul>
    <comment-box
      ref="commentBox"
      :type="type"
      :responder="responder"
      @changeReplyStatus="toReply"
      @submit="submit"
      @cancel="cancel"
    ></comment-box>
  </div>
</template>

<script>
import CommentItem from './comment-item'
import CommentBox from './comment-box'

export default {
  name: 'comment',
  components: {
    CommentItem,
    CommentBox
  },
  data() {
    return {
      responder: '',
      commenter: '', // 评论人
      type: 0, // 评论类型，0为评论作者，1为评论别人的评论，2为评论
      oldComment: null,
      chosenIndex: -1, // 被选中的评论的index
      comment: [
        {
          name: '我请贝爷吃皮蛋',
          time: '2018-11-07 16:05',
          content: '感觉还行吧！',
          reply: [
            {
              responder: '我请贝爷吃皮蛋',
              reviewer: '五木君',
              time: '2018-11-07 16:11',
              content: '意思是真的不怎么样吧？'
            },
            {
              responder: '我请贝爷吃皮蛋',
              reviewer: '小老弟',
              time: '2018-11-07 16:11',
              content: '你怎么那么菜'
            }
          ]
        },
        {
          name: 'Chowin不吃碧油鸡',
          time: '2018-11-7 16:24',
          content: '今晚开黑，我巴德贼6！',
          reply: [
            {
              responder: 'Chowin不吃碧油鸡',
              reviewer: '英勇王者V',
              time: '2018-11-07 16:30',
              content: '求求你别秀了，对面0换5了'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toReply(data) {
      this.type = data.type
      this.responder = data.name
      this.chosenIndex = data.index
      this.$refs.commentBox.content = ''
      this.$refs.commentBox.$el.scrollIntoView({
        behavior: 'smooth'
      })
    },
    submit(data) {
      this.commenter = data.commenter
      var time = this.getTime()
      if (this.chosenIndex === -1) {
        let item = {
          name: data.commenter,
          time: time,
          content: data.content,
          reply: []
        }
        this.comment.push(item)
      } else {
        let item = {
          reviewer: this.commenter,
          responder: this.responder,
          time: time,
          content: data.content
        }
        this.comment[this.chosenIndex].reply.push(item)
      }
      this.type = 0
      this.chosenIndex = -1
      this.commenter = ''
      this.$refs.commentBox.content = ''
    },
    cancel(data) {
      this.type = data.type
      this.chosenIndex = data.index
      this.commenter = data.commenter
      this.$refs.commentBox.content = ''
      this.$refs.commentBox.nickname = ''
    },
    getTime() {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      month = month.length < 2 ? '0' + month : month
      day = day.length < 2 ? '0' + day : day
      hour = hour.length < 2 ? '0' + hour : hour
      minute = minute.length < 2 ? '0' + minute : minute
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variable";
@import "~common/less/keyframes";

.comment-section {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .comment-title {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: @primary-color;
    font-size: 18px;
    text-indent: 4px;
    height: 30px;
    line-height: 30px;
  }

  hr {
    margin: 10px 0;
    border: 0;
    border-top: thin solid #ddd;
    border-bottom: thin solid #ffffff;
  }
}

@media screen and (max-width: 768px) {
  .comment-section {
    .comment-title {
      font-size: 16px;
      text-indent: 4px;
      height: 28px;
      line-height: 28px;
    }

    hr {
      margin: 8px 0;
    }
  }
}
</style>
