<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 事件传值-->
      <OrderForm @getDetail="getDetail"/>

      <!-- 侧边栏 事件传值-->
      <OrderAside :data="detail"/>
      
    </el-row>
  </div>
</template>
<script>
//导入子组件
import OrderForm from "@/components/air/orderForm";
import OrderAside from "@/components/air/orderAside"

export default {
  data(){
      return{
        detail:{
          //默认值
          seat_infos:{}
        }
      }
  },
  components: {
    OrderForm,
    OrderAside
  },
  methods:{
    //获取机票详情的方法
    getDetail(detail){
      this.detail = detail;
    }
  }
};
</script>

  <style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style> 