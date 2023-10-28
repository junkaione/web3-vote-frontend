<template>
  <van-form @submit="handleMandate">
    <van-cell-group inset>
      <van-field
        v-model="host"
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
import { ref, onMounted } from "vue";
import { showSuccessToast } from "vant";
import useEthers from "@/hooks/useEthers";

const contractRef = ref();

const host = ref("");
const mandateAddress = ref("");

const getHost = async () => {
  const res = await contractRef.value.host();
  host.value = res;
};

const handleMandate = async () => {
  const mandateAddressArr = mandateAddress.value.split("\n");
  const res = await contractRef.value.mandate(mandateAddressArr);
  if (res) {
    showSuccessToast("分发票权成功，等待区块链确认");
  }
};

onMounted(async () => {
  const { contract } = await useEthers();
  contractRef.value = contract;
  getHost();
});
</script>
