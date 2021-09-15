<template>
  <header class="bg-white">
    <!-- Navigation menu -->
    <nav class="px-0 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"
      >
        <div class="flex items-center flex-1">
          <div class="hidden ml-4 space-x-8 lg:block">
            <!-- List of navigation links (landmarks) in desktop (hidden on mobile) -->
            <NuxtLink
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-blue-900 hover:text-blue-700"
              :class="linkSelectedClass(link.name)"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex-none">
          <section-social-nav />
        </div>
      </div>

      <!-- Menu navigation menu -->
      <div class="px-4 py-6 lg:hidden">
        <div class="flex items-center justify-end w-full">
          <div class="flex-1">
            <span class="text-xl font-black tracking-tight text-blue-900"
              >Rocket Inc.</span
            >
          </div>

          <!-- Open menu button -->
          <div class="flex-none">
            <button type="button" @click="openMenu">
              <svg
                class="w-8 h-8 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Open menu on mobile (hidden in desktop) -->
        <div
          v-if="isOpen"
          class="flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"
        >
          <NuxtLink
            v-for="link in navigation"
            :key="link.name"
            :to="link.href"
            class="text-base font-medium text-blue-600 hover:text-blue-800"
            :class="linkSelectedClass(link.name)"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

// List of navigation links
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Areas', href: '/areas' },
  { name: 'People', href: '/people' },
  { name: 'Products', href: '/products' },
  { name: 'About us', href: '/aboutus' },
  { name: 'Contact us', href: '/contactus' },
]

export default Vue.extend({
  props: {
    current: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      navigation,
      isOpen: false,
    }
  },
  methods: {
    linkSelectedClass(link: string) {
      return this.current === link ? 'underline font-black' : ''
    },
    // Toggle menu (open/close)
    openMenu() {
      this.isOpen = !this.isOpen
    },
  },
})
</script>
