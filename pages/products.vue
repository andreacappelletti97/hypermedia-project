<template>
  <div>
    <layout-header-menu current="Products" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Header title -->
      <base-section-title
        title="Products"
        subtitle="All the products offered by the company"
      />

      <!-- Display information about each product -->
      <div class="flex flex-col gap-8 mt-10">
        <div
          v-for="product in this.searchProduct"
          :key="product.id"
          class="flex flex-col justify-center bg-blue-900 border border-gray-400 rounded-lg shadow-lg  lg:flex-row"
        >
          <div class="flex-1 h-72">
            <img
              class="object-cover w-full h-72"
              :src="product.image_url"
              alt="Product image"
            />
          </div>
          <div class="flex-1 p-10">
            <NuxtLink :to="hrefLink(product.id)">
              <h2 class="text-5xl font-black text-white">{{ product.name }}</h2>
              <p class="text-2xl font-medium text-white">
                {{ product.description }}
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
    // Retrieve list of all products in the server (asyncData)
    const { data: products } = await $supabase.from('product').select()
    return { postsProducts: products }
  },
  data() {
    return {
      postsProducts: [],
      searchText: '',
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'Products - Rocket Inc.',
      meta: [
        {
          hid: 'products',
          content:
            'View all the products that we offer for you and your business',
          name: 'Rocket Inc. products',
        },
      ],
    }
  },
  computed: {
    // Filter products by search text
    searchProduct() {
      return this.postsProducts.filter(
        (m) =>
          this.searchText === '' ||
          m.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
  },
  methods: {
    // Update search text
    updateSearch(e) {
      this.searchText = e.target.value
    },
    // Link to single product page (by id)
    hrefLink(id) {
      return 'product/' + id
    },
  },
}
</script>
