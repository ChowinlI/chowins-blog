<template>
  <footer class="footer">
    <div class="cpr">Design by Chowin. Copyright &copy; {{year}}</div>
  </footer>
</template>

<script>
  export default{
    name: 'v-footer',
    computed: {
      year(){
        let date = new Date()
        return date.getFullYear()
      }
    }
  }
</script>

<style lang="less" scoped>
  .footer{
    .cpr{
      font-size: 14px;
      margin: auto;
      color: #333333;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      .cpr{
        font-size: 12px;
      }
    }
}
</style>
