import { defineStore } from "pinia";
import { ref, computed } from "vue";

/**
 * 计数器状态管理
 * 用于演示 Pinia 状态在 SSR 中的使用
 */
export const useCounterStore = defineStore("counter", () => {
  // 状态
  const count = ref(0);

  // 计算属性
  const doubleCount = computed(() => count.value * 2);

  // 操作方法
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function reset() {
    count.value = 0;
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset,
  };
});
