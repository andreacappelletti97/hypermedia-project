<template>
  <footer class="bg-white">
    <div
      class="px-0 py-12 mx-auto  max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <!-- Footer information -->
      <div
        class="flex flex-col items-center justify-between w-full gap-8 mt-8  lg:mr-20 lg:flex-row"
      >
        <div>
          <p
            class="text-base text-center text-blue-400 underline  hover:text-blue-700"
          >
            <NuxtLink to="/privacy"> Privacy Policy </NuxtLink>
          </p>
        </div>
        <div>
          <p class="text-base text-center text-gray-400">
            &copy; 2020 Rocket Inc.<br />
            All rights reserved.
          </p>
        </div>
        <section-social-nav />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

const navigation = [
  {
    name: 'Facebook',
    href: '#',
  },
  {
    name: 'Instagram',
    href: '#',
  },
  {
    name: 'Twitter',
    href: '#',
  },
  {
    name: 'GitHub',
    href: '#',
  },
  {
    name: 'Dribbble',
    href: '#',
  },
]

export default Vue.extend({
  data() {
    return {
      navigation,
    }
  },
})
</script>
