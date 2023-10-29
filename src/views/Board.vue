<template>
  <div class="board">
    <div class="item" v-for="(item, index) in boardList" :key="item.name">
      <span>{{ item.name }}</span>
      <van-button type="default" @click="handleVote(index)">{{
        item.totalAmount
      }}</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { showSuccessToast } from "vant";
import useEthers from "@/hooks/useEthers";

const contractRef = ref();

const boardList = ref<Board[]>([]);

type Board = {
  name: string;
  totalAmount: BigInt;
};

const getBoardList = async () => {
  const res = await contractRef.value.getBoardInfo();
  boardList.value = res;
};

const handleVote = async (targetId: number) => {
  const res = await contractRef.value.vote(targetId);
  if (res) {
    showSuccessToast("投票成功，等待区块链确认");
  }
};

onMounted(async () => {
  const { contract } = await useEthers();
  contractRef.value = contract;
  getBoardList();
});
</script>

<style lang="scss">
.board {
  padding: 20px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    padding: 5px;

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
