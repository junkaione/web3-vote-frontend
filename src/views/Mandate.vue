<template>
  <van-form @submit="handleMandate">
    <van-cell-group inset>
      <van-field
        v-model="owner"
        name="主持人"
        label="主持人"
        placeholder="主持人"
        disabled="true"
      />
      <van-field
        v-model="mandateAddress"
        type="textarea"
        rows="5"
        autosize
        name="投票人地址"
        label="投票人地址"
        placeholder="投票人地址"
        :rules="[{ required: true, message: '请填写投票人地址' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        分发票权
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const owner = ref("123");
const mandateAddress = ref("");

const handleMandate = () => {};
</script>
