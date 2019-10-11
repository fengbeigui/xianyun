<template>
  <div>
    <div class="container">
      <!-- 轮播图 -->
      <!-- interval:相隔时间  arrow:是否显示左右的箭头 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <div
            class="banner-image"
            :style="`
                background:url(${item.url}) center center no-repeat;
                background-size:contain contain;
                `"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<script>
export default {
    data(){
      return{
        banners:[
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570813537098&di=fc310f318ebbf090d71d2e824325e12a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F58006e488b7da.jpg'},
          {url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1570803443&di=6306fb0f7a664fc181264c4f5f632fd7&src=http://pic23.nipic.com/20120823/10717094_095551546198_2.jpg'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570813537099&di=34d40ed5054997a78da88bfd49604236&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F580033ac9de53.jpg'}
        ],
      }
    }
};
</script>

<style scoped lang="less">
.container{
    min-width:1000px;
    margin:0 auto;
    position:relative;

    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }
}
</style>