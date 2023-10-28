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
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import useEthers from "@/hooks/useEthers";

const contractRef = ref();

const currentAccount = ref("");
const voter = ref({
  amount: undefined,
  isVoted: undefined,
  delegator: undefined,
  targetId: undefined,
});

const getVoter = async () => {
  const res = await contractRef.value.voters(currentAccount.value);
  voter.value = { ...res };
};

onMounted(async () => {
  const { contract, account } = await useEthers();
  contractRef.value = contract;
  currentAccount.value = account;
  getVoter();
});
</script>
