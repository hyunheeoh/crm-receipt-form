<script setup lang="ts">
defineProps<{
  color?:
    | 'neutral'
    | 'primary'
    | 'danger'
    | 'caution'
    | 'naked'
    | 'soft'
    | 'primary-line'
    | 'danger-line'
    | 'neutral-line'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  disabled?: boolean
  shape?: string
  block?: boolean
  rounded?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled ? true : false"
    :class="[
      color ? `${color}` : 'neutral',
      size ? `${size}` : 'medium',
      disabled ? 'disabled' : '',
      loading ? 'disabled' : '',
      block ? 'w-full' : '',
      rounded ? 'rounded' : ''
    ]"
  >
    <slot> 저장하기 </slot>
  </button>
</template>

<style scoped>
@tailwind components;
@layer components {
  button {
    transition: all ease-in-out 0.2s;
    @apply relative font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer;
  }
  .primary {
    @apply bg-indigo-500 text-white hover:bg-indigo-600 focus-visible:outline-indigo-500 active:bg-indigo-400;
  }
  .primary-line {
    @apply bg-white text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600/50 hover:bg-indigo-100 active:bg-indigo-400 active:text-white;
  }
  .danger {
    @apply bg-rose-100 text-rose-600 hover:bg-rose-200 focus-visible:outline-rose-200 active:bg-rose-500 active:text-white;
  }
  .danger-line {
    @apply bg-white text-rose-600 shadow-sm ring-1 ring-inset ring-rose-600/50 active:bg-rose-400 active:text-white hover:bg-rose-50;
  }
  .soft {
    @apply bg-indigo-50 text-indigo-600 hover:bg-indigo-100 active:bg-indigo-400 active:text-white;
  }
  .neutral {
    @apply bg-slate-100 text-slate-600 hover:bg-slate-200 active:bg-slate-400 active:text-white;
  }
  .neutral-line {
    @apply bg-slate-100 text-slate-600 hover:bg-slate-200 active:bg-slate-400 active:text-white shadow-sm ring-1 ring-inset ring-slate-400/50;
  }
  .caution {
    @apply bg-orange-100 text-orange-600 hover:bg-orange-200 active:bg-orange-400 active:text-white;
  }
  .naked {
    @apply text-indigo-600 hover:text-indigo-400 shadow-none active:bg-indigo-50 disabled:bg-slate-100 disabled:text-gray-300;
  }
  .small {
    @apply px-3 py-1.5 text-xs;
  }
  .medium {
    @apply px-3 py-1.5 text-sm;
  }
  .large {
    @apply px-3.5 py-2.5 text-base;
  }
  .disabled {
    @apply cursor-not-allowed bg-gray-100 text-gray-300 hover:bg-gray-100 active:bg-gray-100 active:text-gray-300;
  }
}
</style>
