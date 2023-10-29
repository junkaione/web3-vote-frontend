<template>
  <van-form>
    <van-field
      v-model="currentAccount"
      type="textarea"
      rows="2"
      name="当前账户"
      label="当前账户"
    />
    <van-field v-model="voter.amount" name="账户票数" label="账户票数" />
    <van-field v-model="voter.isVoted" name="是否已投票" label="是否已投票" />
    <van-field
      v-model="voter.delegator"
      type="textarea"
      rows="2"
      name="委托账户"
      label="委托账户"
    />
    <van-field v-model="voter.targetId" name="投票ID" label="投票ID" />
  </van-form>
  <van-field
    v-model="dalegatorAddress"
    type="textarea"
    rows="2"
    label="受托人地址"
    placeholder="请输入受托人地址"
  />
  <van-button round block type="primary" @click="handleDalegate">
    委托他人投票
  </van-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { showSuccessToast } from "vant";
import useEthers from "@/hooks/useEthers";

const contractRef = ref();

const currentAccount = ref("");
const voter = ref({
  amount: undefined,
  isVoted: undefined,
  delegator: undefined,
  targetId: undefined,
});

const dalegatorAddress = ref("");

const getVoter = async () => {
  const res = await contractRef.value.voters(currentAccount.value);
  voter.value = { ...res };
};

const handleDalegate = async () => {
  const res = await contractRef.value.dalegate(dalegatorAddress.value);
  if (res) {
    showSuccessToast("委托他人投票成功，等待区块链确认");
  }
};

onMounted(async () => {
  const { contract, account } = await useEthers();
  contractRef.value = contract;
  currentAccount.value = account;
  getVoter();
});
</script>
