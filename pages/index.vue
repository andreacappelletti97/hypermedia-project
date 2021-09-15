<template>
  <div>
    <layout-header-menu current="Home" />

    <!-- Homepage hero section presenting the company -->
    <section-hero-section />
    <!-- List of areas -->
    <section-grid-section
      title="Main areas"
      subtitle="List of all the main areas we are working on"
      subhref="/area"
      :posts="postsAreas"
      :link="{
        href: '/areas',
        label: 'View all the areas',
      }"
    />
    <!-- List of people -->
    <section-grid-section
      title="Top People"
      subtitle="List of the main figures working in our company"
      subhref="/member"
      :posts="postsPeople"
      :link="{
        href: '/people',
        label: 'View all the people',
      }"
    />
    <!-- List of products -->
    <section-grid-section
      title="Top Products"
      subtitle="Main products the company is working on"
      subhref="/product"
      :posts="postsProducts"
      :link="{
        href: '/products',
        label: 'View all the products',
      }"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    // Retrieve all `area`, `team`, and `product` from database in the server (asyncData)
    if (typeof $supabase !== 'undefined') {
      const { data: areas } = await $supabase.from('area').select()
      const { data: people } = await $supabase.from('people').select()
      const { data: products } = await $supabase.from('product').select()
      return {
        postsAreas: areas,
        postsPeople: people,
        postsProducts: products,
      }
    }
  },
  data() {
    return {
      postsAreas: [],
      postsPeople: [],
      postsProducts: [],
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'Rocket Inc. - Solutions to your everyday problems',
      meta: [
        {
          hid: 'index',
          content:
            'We at Rocket Inc. provide solutions for every type of digital business to help you in your journey',
          name: 'Rocket Inc. website',
        },
      ],
    }
  },
}
</script>
