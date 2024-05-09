<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import formService from '@/sevices/ApiFormService'
import checkOptionType from '@/sevices/checkOptionType'

import type { FormMeta } from '@/models/FormMeta'
import type {
  FormArticle,
  TextShortFormArticle,
  SelectFormArticle,
  CheckboxFormArticle,
  TextLongFormArticle
} from '@/models/FormArticle'

import BodyLayout from '@/components/BodyLayout.vue'
import TopHeader from '@/components/TopHeader.vue'
import Button from '@/components/BasicButton.vue'
import ConditionsView from './components/ConditionsView.vue'
import ResultView from './components/ResultView.vue'

const route = useRoute()

const teamCode = Number(route.params.teamCode)
const formId = route.params.id as string

const formMeta = ref<FormMeta>()
const formArticles = ref<FormArticle[]>([])

const isResult = ref(false)

onMounted(() => {
  setFormMeta(teamCode, formId)
  setFormArticles(teamCode, formId)
})

const checkedOptions = ref<{ [key: string]: boolean }>({})

const updateAnswers = (index: number) => {
  ;(formArticles.value[index] as CheckboxFormArticle).answers = []

  for (const option in checkedOptions.value) {
    if (checkedOptions.value[option]) {
      ;(formArticles.value[index] as CheckboxFormArticle).answers.push(option)
    }
  }
}

const setFormMeta = async (_teamCode: number, _formId: string) => {
  const _formMeta = await formService.getFormMetaById(_teamCode, _formId)
  formMeta.value = _formMeta
}

const setFormArticles = async (_teamCode: number, _formId: string) => {
  formArticles.value = await formService.getFormArticles(_teamCode, _formId)
}
</script>

<template>
  <BodyLayout>
    <TopHeader>LuvD</TopHeader>

    <div class="bg-slate-100 overflow-y-scroll" style="height: calc(100vh - 5rem)">
      <div v-if="isResult">
        <ResultView />
      </div>

      <div v-else class="root-px pt-10">
        <!-- 폼 메타 -->
        <div class="py-5">
          <h1 class="text-2xl text-slate-900 font-medium">{{ formMeta?.name }}</h1>
          <p class="text-xl text-slate-700">{{ formMeta?.description }}</p>
        </div>
        <!-- 폼 아티클 -->
        <div v-for="(article, articleIndex) in formArticles" :key="article.id">
          <div v-if="!article.isDelete" class="w-full flex flex-col items-center">
            <div class="box space-y-3 mb-5">
              <!-- 질문 -->
              <div>
                <p class="text-lg">{{ article.displayText }}</p>
              </div>

              <!-- 체크박스형 답변 -->
              <div v-if="checkOptionType.isCheckboxFormArticle(article)">
                <fieldset>
                  <div class="space-y-3">
                    <div
                      v-for="(option, optionIndex) in (article as CheckboxFormArticle).options"
                      :key="option.displayOrder"
                    >
                      <div class="flex h-6 items-center">
                        <input
                          :id="`${article.id}${optionIndex}`"
                          type="checkbox"
                          v-model="checkedOptions[option.displayText]"
                          @change="updateAnswers(articleIndex)"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div class="ml-3 text-sm leading-6 w-full">
                          <label
                            :for="`${article.id}${optionIndex}`"
                            class="font-medium text-gray-900"
                            >{{ option.displayText }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <!-- 단일 선택형 답변 -->
              <div v-if="checkOptionType.isSelectFormArticle(article)">
                <fieldset class="mt-4">
                  <div class="space-y-3">
                    <div
                      v-for="(option, optionIndex) in (article as SelectFormArticle).options"
                      :key="option.displayOrder"
                      class="flex items-center"
                    >
                      <input
                        :id="`${article.id}${optionIndex}`"
                        name="notification-method"
                        type="radio"
                        :checked="option.displayText === (article as SelectFormArticle).answer"
                        @change="() => ((article as SelectFormArticle).answer = option.displayText)"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        :for="`${article.id}${optionIndex}`"
                        class="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >{{ option.displayText }}</label
                      >
                    </div>
                  </div>
                </fieldset>
              </div>

              <!-- 단답형 답변 -->
              <div v-if="checkOptionType.isTextShortFormArticle(article)">
                <input
                  type="text"
                  placeholder="답변을 입력하세요."
                  v-model="(article as TextShortFormArticle).shortAnswer"
                  class="w-full anwser-input"
                />
              </div>

              <!-- 장문형 답변 -->
              <div v-if="checkOptionType.isTextLongFormArticle(article)">
                <textarea
                  rows="4"
                  placeholder="답변을 입력하세요."
                  v-model="(article as TextLongFormArticle).longAnswer"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 약관동의 -->
        <ConditionsView class="my-10" />

        <!-- 버튼 -->
        <div class="flex justify-center my-10">
          <Button @click="isResult = true" color="primary" size="large" block rounded
            >제출하기</Button
          >
        </div>
      </div>
    </div>
  </BodyLayout>
</template>

<style scoped>
@tailwind components;
@layer components {
  .box {
    @apply bg-white p-7 shadow-md rounded-lg w-full;
  }
  .anwser-input {
    @apply p-3 border-b-2 border-gray-300 transition-all duration-300 ease-in-out outline-none;
  }
  .anwser-input:focus {
    @apply border-indigo-500;
  }
}
</style>
