<template>
  <div class="about">
    <div class="about-section">
      <div class="about-title"># 这个家伙有点矛盾</div>
      <div class="about-content">
        <p class="about-prologue">青春一记荒唐，却亦然学着疯狂……</p>
        <div class="about-pic"><img src="../common/images/pic.jpg" alt="" style="display:block;margin: 0 auto"></div>
        <hr>
        <blockquote><strong>关于博主</strong></blockquote>
        <p class="about-paragraph">一个喜欢沉默的段子手。</p>
        <p class="about-paragraph">兴趣爱好广泛，但是没什么特长，有的事只是因为喜欢做而去做而且会很疯狂去做，只注重体验不注重结果。<br>
          2013年S赛期间被舍友带入召唤师峡谷，正式成为一名召唤师。比较喜欢开黑，并在坚持逗比玩法的路上越走越远直至今天。可能很多曾经一起战斗的小伙伴都离开了，但这毕竟是青春啊(:<br>
          喜欢玩桌游，在狼人、三国杀和UNO中被我坑过的队友和对手都不计其数。<br>
          夜跑、徒步和爬山都是我进行自我调整的方式，只有这时整个世界才是安静的。曾经也喜欢篮球，但多次崴脚后，就没有然后了。最近开始接触健身……<br>
          大二的时候接触H5,现在主要做前端，也会做小程序，并开始接触桌面端。这算是个能混口饭吃的兴趣吧，哈哈……<br>
          这个日常真香的人还要继续努力充实自己，争取解锁更多的技能！
        </p>
        <blockquote><strong>关于博客</strong></blockquote>
        <p class="about-paragraph">叁巷肆号诞生于2018年年末，这里记录了我的一些心路历程，日常吐槽还有技术分享与交流。</p>
        <p class="about-paragraph">欢迎大家来访━(*｀∀´*)ノ!</p>
        <hr>
        <p class="about-paragraph">日常唠嗑，请来这里：<a href="javascript:void (0);">no3lane4.com</a></p>
        <p class="about-paragraph">不想大声说，那就密一下<a href="javascript:void (0);">no3lane4@163.com</a>吧</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="less" scoped>
  @import "~common/less/variable";

  .about{
    width: 100%;

    .about-section{
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 4px;
      color: #333333;

      .about-title{
        width: 100%;
        text-align: center;
        padding: 10px 0;
        font-size: 24px;
        font-weight: 600;
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
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        font-size: 18px;
        margin: 16px 0;
      }
      .about-pic{
        width: 100%;

        img{
          display: block;
          max-width: 100%;
          margin: auto;
        }
      }
      .about-prologue{
        padding: 10px 0;
        font-size: 18px;
      }
      .about-paragraph{
        font-size: 18px;
        text-indent: 2em;
        text-align: justify;
        margin-bottom: 4px;

        a{
          color: @primary-color;
        }
      }
    }
  }

    @media screen and (max-width: 768px) {
    .about{
      .about-section{
        .about-title{
          font-size: 20px;
        }
        blockquote{
          font-size: 16px;
        }
        .about-prologue{
          font-size: 16px;
        }
        .about-paragraph{
          font-size: 16px;
        }
      }
    }
  }
</style>
