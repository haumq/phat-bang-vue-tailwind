<template>

  <section
    class="fixed bottom-1 z-50 w-max left-1/2 -translate-x-2/4 md:top-16 md:bottom-auto md:left-auto md:translate-x-0 md:right-10"
  >
      <!-- <div v-for="item in toastList">
      <div
        class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white bg-opacity-95 rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 dark:bg-opacity-95"
      >
        <div
          class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div class="ml-3 text-sm font-normal">
          Item moved successfully Item moved successfully .
        </div>
        <button
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
  </div> -->
      <TransitionGroup name="toast-list" tag="ul">
        <li v-for="item in toastList" :key="item">
          <ToastModal :body="item.body" />
        </li>
      </TransitionGroup>
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>
  </section>
      <!-- <button @click="show = !show">Toggle</button>
      <button
        @click="this.add({ title: 'title', body: 'this is a toast ', timeout: 5 })"
      >
        Toggle 2
      </button> -->
</template>

<script setup>
import { computed, ref } from "vue";
import ToastModal from "./ToastModal.vue";
import { useToastStore } from "@/stores/toast";

const show = ref(false);
const toastStore = useToastStore();

const toastList = computed(() => toastStore.toastList);

const add = computed(() => toastStore.add);



//   created () {
//     this.add({ title: 'title', body: 'this is a toast', timeout: 1 })
//     this.add({ title: 'error title', type: 'error', body: 'this is an error', timeout: 2 })
//     this.add({ title: 'succcess title', type: 'success', body: 'this is a success', timeout: 3 })
//     this.add({ title: 'info title', type: 'info', body: 'this is information', timeout: 4 })
//   }
</script>

<style scoped>
.toast {
  position: fixed;
  /* top: 3.5rem;
    right: 2rem; */
  z-index: 99999;
}

/* .slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
.toast-list-move {
  transition: all 0.9s ease-out;
}

.toast-list-enter-active {
  transition: all 0.5s ease-out;
}
.toast-list-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.toast-list-enter-from {
  transform: translateY(100px);
  opacity: 0;
}
.toast-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.list-leave-active {
  position: relative;
  transition-delay: 1s;
}

</style>
