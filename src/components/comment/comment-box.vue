<template>
  <div class="comment-box">
    <h3 class="commentBox-title">发射弹幕~</h3>
    <form id="comment_form">
      <div class="form-item">
        <label for="name">昵称</label>
        <input type="text" name="name" id="name" v-model="nickname" autocomplete="off" required>
      </div>
      <div class="form-item">
        <label for="email">邮箱</label>
        <input type="text" name="email" id="email" v-model="email" autocomplete="off" required>
      </div>
      <div class="form-item">
        <textarea name="content" id="content" rows="4" v-model="content" :placeholder="placeholder" autocomplete="off"></textarea>
      </div>
      <div class="form-footer">
        <button type="button" class="cancel" @click="cancel">算了</button>
        <button type="button" class="submit" @click="submit">Biu~</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comment-box',
  props: {
    responder: {
      type: String,
      default: null
    },
    type: {
      type: Number
    }
  },
  data(){
    return {
      nickname: '',
      email: '',
      content: ''
    }
  },
  computed: {
    placeholder(){
      return this.type !== 0 ? `你回复 ${this.responder}` : '皮这一下很开心'
    }
  },
  methods: {
    cancel(){
      this.nickname = ''
      const data = {
        commenter: '',
        type: 0,
        index: -1
      }
      this.$emit('cancel', data)
    },
    submit(){
      const data = {
        commenter: this.nickname,
        email: this.email,
        content: this.content
      }
      this.$emit('submit', data)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variable";

.comment-box{
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;

  .commentBox-title{
    font-size: 18px;
    color: @primary-color;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 4px;
    margin-bottom: 10px;
  }

  #comment_form{
    width: 90%;
    margin: 0 auto;

    .form-item{
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      align-items: flex-start;
      border: thin solid #eeeeee;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 10px;

      label{
        display: block;
        padding: 0 10px;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        flex: 0 0 auto;
      }

      input{
        display: block;
        flex: 1 0 auto;
        height: 32px;
        border: none;
        font-size: 14px;
        outline: none;
      }

      textarea{
        display: block;
        width: 100%;
        resize: none;
        font-size: 14px;
        border: none;
        outline: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px;
        font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif, "PingFang SC ExtraLight";
      }
    }
    .form-footer{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button{
        display: block;
        color: #ffffff;
        border: none;
        outline: none;
        height: 28px;
        padding: 0 10px;
        font-size: 14px;
        border-radius: 4px;

        &:not(:last-child){
          margin-right: 10px;
        }
      }

      .cancel{
        background-color: #c5c5c5;

        &:hover{
          background-color: darken(#c5c5c5, 10%);
        }
      }
      .submit{
        background-color: @primary-color;

        &:hover{
          background-color: darken(@primary-color, 10%);
        }
      }
    }
  }
}

@media screen and (max-width: 768px){
  .commentBox{
    padding: 6px;

    .commentBox-title{
      font-size: 16px;
      padding: 0 2px;
      margin-bottom: 8px;
    }

    #comment_form{
      width: 96%;
      margin: 0 auto;

      .form-item{
        margin-bottom: 8px;

        label{
          padding: 0 8px;
          font-size: 13px;
          height: 28px;
          line-height: 28px;
        }

        input{
          height: 28px;
          font-size: 13px;
        }

        textarea{
          font-size: 13px;
          padding: 8px;
        }
      }
      .form-footer{
        button{
          height: 26px;
          padding: 0 8px;
          font-size: 12px;
          border-radius: 4px;
          touch-action: none;

          &:not(:last-child){
            margin-right: 10px;
          }
        }

        .cancel{
          background-color: #c5c5c5;

          &:hover{
            background-color: darken(#c5c5c5, 10%);
          }
        }
        .submit{
          background-color: @primary-color;

          &:hover{
            background-color: darken(@primary-color, 10%);
          }
        }
      }
    }
  }
}
</style>
