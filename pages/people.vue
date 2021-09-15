<template>
  <div>
    <layout-header-menu current="People" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Header title -->
      <base-section-title
        title="People"
        subtitle="All the people working in our company"
      />

      <!-- Display single member information -->
      <div class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="member in this.searchMember"
          :key="member.id"
          class="flex flex-col bg-blue-900 border border-gray-300 rounded-lg shadow-lg "
        >
          <NuxtLink :to="hrefLink(member.id)">
            <div class="w-full bg-gray-300 h-60">
              <img
                class="object-cover w-full rounded-t-lg h-60"
                :src="member.image_url"
                alt="Profile image"
              />
            </div>
            <div class="px-6 py-5">
              <h2 class="text-xl font-bold tracking-wider text-white">
                {{ member.name + ' ' + member.surname }}
              </h2>
              <p class="font-medium text-white text-md">{{ member.role }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    // Retrieve list of all members in the server (asyncData)
    const { data: people } = await $supabase.from('people').select()
    return { postsPeople: people }
  },
  data() {
    return {
      postsPeople: [],
      searchText: '',
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'People - Rocket Inc.',
      meta: [
        {
          hid: 'people',
          content: 'View and search all the people that work in Rocket Inc.',
          name: 'Rocket Inc. people',
        },
      ],
    }
  },
  computed: {
    // Filter list of people based on search text
    searchMember() {
      return this.postsPeople.filter(
        (m) =>
          this.searchText === '' ||
          m.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          m.surname.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
  },
  methods: {
    // Set search text
    updateSearch(e) {
      this.searchText = e.target.value
    },
    // Link to single member (by id)
    hrefLink(id) {
      return 'member/' + id
    },
  },
}
</script>
