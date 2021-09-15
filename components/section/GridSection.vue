<template>
  <div
    class="px-4 pt-16 pb-20 bg-white border border-blue-500 shadow-md  sm:px-12 lg:pt-18 lg:pb-20 lg:px-16"
  >
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <base-section-title :title="title" :subtitle="subtitle" :link="link" />
      <div
        class="grid gap-16 pt-12 mt-6 border-t border-gray-200  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <!-- Grid of elements to display -->
        <div v-for="post in posts" :key="post.id">
          <!-- Link to website page or external website if 'externalLink' is true (projects section) -->
          <a
            v-if="externalLink"
            :href="subhrefLink(post.website_url)"
            class="block"
          >
            <base-grid-container
              :image-url="post.image_url"
              :name="post.name"
            />
          </a>
          <NuxtLink v-else :to="subhrefLink(post.id)" class="block">
            <base-grid-container
              :image-url="post.image_url"
              :name="post.name"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: false,
      default: null,
    },
    posts: {
      type: Array,
      required: true,
    },
    subhref: {
      type: String,
      required: false,
      default: '#',
    },
    externalLink: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  methods: {
    // Link to sub-page
    subhrefLink(idOrLink) {
      return this.externalLink ? idOrLink : this.subhref + '/' + idOrLink
    },
  },
}
</script>
