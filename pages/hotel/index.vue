<template>
  <div>
    <h3>高德地图</h3>
    <!-- 地图的容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    //整体页面加载完毕之后执行
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    //地图的连接，doc改成document
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=27e830109e96d58b2468728481b36fcf&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style scoped>
#container {
  width: 300px;
  height: 180px;
}
</style>