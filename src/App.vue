<template>
  <van-nav-bar title="去中心化投票APP" />
  <main>
    <router-view></router-view>
  </main>
  <van-tabbar route>
    <van-tabbar-item to="/mandate" icon="home-o"> 分发票权 </van-tabbar-item>
    <van-tabbar-item to="/account" icon="manager-o">账户信息</van-tabbar-item>
    <van-tabbar-item to="/board" icon="friends-o">投票看板</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
