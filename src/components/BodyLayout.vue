<template>
  <div class="flex justify-center">
    <div class="root-container flex flex-col gap-3 z-10">
      <div class="z-20 relative w-full">
        <slot></slot>
      </div>
      <div
        class="hidden md:block fixed top-0 bg-white root-container h-full shadow-lg"
        style="height: calc(100vh)"
      ></div>
    </div>
    <div class="hidden md:block fixed top-0 bg-slate-50 w-full" style="height: calc(100vh)"></div>
  </div>
</template>
