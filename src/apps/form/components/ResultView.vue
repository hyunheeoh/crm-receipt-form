<script setup lang="ts">
import FooterLayout from '@/components/FooterLayout.vue'
</script>

<template>
  <div style="height: calc(100vh - 5rem)" class="bg-white">
    <header
      class="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8"
    >
      <a href="#">
        <span class="sr-only">Your Company</span>
        <img
          class="h-10 w-auto sm:h-12"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </header>
    <main
      class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8"
    >
      <div class="max-w-lg">
        <p class="text-base font-semibold leading-8 text-indigo-600">Success!</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          접수지가 제출 되었습니다.
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          제출 후 상담사가 접수지를 확인 후 연락드릴 예정입니다.
          <br />
          혹은 어떤 경우 어떻게 안내가 될 예정이오니 등등.
        </p>
        <div class="mt-10">
          <a href="#" class="text-sm font-semibold leading-7 text-indigo-600"
            ><span aria-hidden="true">&larr;</span> go to 럽디 홈페이지</a
          >
        </div>
      </div>
    </main>
    <FooterLayout class="z-20" />
  </div>
</template>
