<script setup lang="ts">
import { computed, ref } from 'vue'

const checkboxes = ref([
  {
    id: 'comments',
    name: 'comments',
    checked: false,
    label: '개인정보취급방침에 동의합니다.',
    required: true,
    error: false
  },
  {
    id: 'candidates',
    name: 'candidates',
    checked: false,
    label: '상담예약안내사항을 확인했습니다.',
    required: true,
    error: false
  },
  {
    id: 'offers',
    name: 'offers',
    checked: false,
    label: '환불정책에 동의합니다.',
    required: false,
    error: false
  }
])

const toggleAll = () => {
  checkboxes.value.forEach((checkbox) => {
    checkbox.checked = allChecked.value
  })
}

const validateForm = () => {
  const isAllRequiredChecked = checkboxes.value.every(
    (checkbox) => !checkbox.required || checkbox.checked
  )
  if (!isAllRequiredChecked) {
    alert('모든 필수 항목을 체크해주세요.')

    document.getElementById(checkboxes.value[0].id)?.focus()
    checkboxes.value.forEach((checkbox) => (checkbox.error = true))

    return false
  }
  alert('제출 성공!')
  return true
}

const allChecked = computed({
  get: () => checkboxes.value.every((checkbox) => checkbox.checked),
  set: (value) => {
    checkboxes.value.forEach((checkbox) => {
      checkbox.checked = value
    })
  }
})

defineExpose({
  validateForm
})
</script>

<template>
  <fieldset>
    <legend class="sr-only">Notifications</legend>
    <div class="space-y-5 mt-2 pl-3">
      <div>
        <h1 class="text-gray-500 text-lg font-medium mb-1">[ 약관 동의 ]</h1>
        <p class="text-gray-500 text-sm">
          약관동의에대한 설명 약관동의에대한 설명 약관동의에대한.<br />
          다음 어쩌구저쩌구 동의해주세요.
        </p>
      </div>

      <div class="relative flex items-start pb-4 border-b border-slate-300">
        <div class="flex h-6 items-center">
          <input
            id="allChecked"
            aria-describedby="comments-description"
            name="allChecked"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            v-model="allChecked"
            @change="toggleAll"
          />
        </div>
        <div class="ml-3 leading-6">
          <label
            for="allChecked"
            class="font-medium text-gray-900"
            :class="{
              'text-indigo-600': allChecked,
              'text-gray-900': !allChecked
            }"
            >전부 동의합니다.</label
          >
        </div>
      </div>
      <div class="relative flex items-start" v-for="checkbox in checkboxes" :key="checkbox.id">
        <div class="flex h-6 items-center">
          <input
            :id="checkbox.id"
            :aria-describedby="checkbox.id + '-description'"
            :name="checkbox.name"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300"
            v-model="checkbox.checked"
          />
        </div>

        <div class="ml-3 text-sm leading-6">
          <label
            :for="checkbox.id"
            :class="
              checkbox.checked
                ? 'text-indigo-600'
                : checkbox.error
                  ? checkbox.required
                    ? 'text-rose-500'
                    : 'text-gray-900'
                  : 'text-gray-900'
            "
            >{{ checkbox.required ? '(필수)' : '(선택) ' }}{{ checkbox.label }}</label
          >
        </div>
      </div>
    </div>
  </fieldset>
</template>
