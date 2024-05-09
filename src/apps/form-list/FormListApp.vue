<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router'
import formService from '@/sevices/ApiFormService'
import type { FormMeta } from '@/models/FormMeta'

import BodyLayout from '@/components/BodyLayout.vue'
import TopHeader from '@/components/TopHeader.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const formMetaList = ref<FormMeta[]>([])
const teamCode = 28 // TODO: get teamCode from url params

onMounted(() => {
  setFormMetaList(teamCode)
})

const setFormMetaList = async (_teamCode: number) => {
  formMetaList.value = await formService.getAllFormMeta(_teamCode)
}

const handleFormMetaClick = (formMeta: FormMeta) => {
  router.push('/form/' + teamCode + '/' + formMeta.id)
}
</script>

<template>
  <BodyLayout>
    <TopHeader>LuvD</TopHeader>

    <!-- <div v-if="isLoading">
      <SkeletonLoading />
    </div> -->

    <div>
      <div class="root-px pt-10">
        <h1 class="root-title">안녕하세요. <br />접수지를 선택해서 작성해주세요.</h1>
      </div>

      <div class="root-px mt-10">
        <ul
          role="list"
          class="divide-y divide-gray-300 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/20 rounded-xl"
        >
          <li
            v-for="formMeta in formMetaList"
            :key="formMeta.id"
            @click="handleFormMetaClick(formMeta)"
            class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-indigo-50 sm:px-6 cursor-pointer transition-all duration-300 ease-in-out"
          >
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  <span class="absolute inset-x-0 -top-px bottom-0" />
                  {{ formMeta.name }}
                </p>
                <p class="mt-1 flex text-xs leading-5 text-gray-500">
                  {{ formMeta.description }}
                </p>
              </div>
            </div>
            <div class="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <FooterLayout />
  </BodyLayout>
</template>
