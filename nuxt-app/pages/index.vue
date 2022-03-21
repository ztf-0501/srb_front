<template>
  <div>
    <NuxtLink to="/about">关于我们</NuxtLink>
    <NuxtLink to="/lend">我要投资</NuxtLink>
    <NuxtLink to="/user">用户中心</NuxtLink>
    <a href="http://atguigu.com" target="_blank">尚硅谷</a>

    <h1>Home page</h1>
    <h2>{{ip}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: null
    };
  },

  //服务器端渲染
  //async:同步
  async asyncData({ $axios }) {
    let response = await $axios.$get("http://icanhazip.com");
    console.log(response);
    return {
      ip: response
    };
  }

  //客户端渲染
  // created() {
  //   this.$axios.$get("http://icanhazip.com").then(response => {
  //     this.ip = response;
  //   });
  // }
};
</script>