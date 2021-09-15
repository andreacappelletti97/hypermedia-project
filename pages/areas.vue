<template>
  <div>
    <layout-header-menu current="Areas" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Title of the page -->
      <base-section-title
        title="Areas"
        subtitle="All the areas in which Rocket Inc. is working on"
      />

      <!-- Display single areas -->
      <div class="flex flex-col gap-8 mt-10">
        <div
          v-for="area in postsAreas"
          :key="area.id"
          :style="{ backgroundImage: `url(${area.image_url})` }"
          class="
            relative
            flex
            items-center
            justify-center
            py-16
            bg-cover
            border border-gray-400
            rounded-lg
            shadow-lg
            bg-gray-50
          "
        >
          <div class="absolute inset-0 bg-blue-900 rounded-lg opacity-75"></div>
          <div class="z-50 text-center">
            <NuxtLink
              :to="hrefLink(area.id)"
              class="text-white hover:underline"
            >
              <h2 class="text-6xl font-bold tracking-wider text-white">
                {{ area.name }}
              </h2>
              <p class="text-2xl font-medium text-white">
                {{ area.description }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    // Retrieve list of all areas in the server (asyncData)
    const { data: areas } = await $supabase.from('area').select()
    return { postsAreas: areas }
  },
  data() {
    return {
      postsAreas: [],
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'Areas - Rocket Inc.',
      meta: [
        {
          hid: 'areas',
          content: 'View all the areas in which Rocket Inc. is specialized',
          name: 'Rocket Inc. areas',
        },
      ],
    }
  },
  methods: {
    // Link to page of single area (by its id)
    hrefLink(id) {
      return 'area/' + id
    },
  },
}
</script>
