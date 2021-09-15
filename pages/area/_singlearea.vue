<template>
  <div>
    <layout-header-menu current="Areas" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Navigation links -->
      <base-orientation-info
        :section="orientationLabel"
        link1="Areas"
        link2="Managers"
      />

      <!-- Single area general information -->
      <div class="pt-10 mt-6 mb-10 border-t border-gray-300">
        <div
          :style="{ backgroundImage: `url(${singleArea.image_url})` }"
          class="relative flex items-center justify-center mt-4 bg-gray-300 bg-cover border border-gray-400 rounded-lg shadow-xl  h-72"
        >
          <div class="absolute inset-0 bg-blue-900 rounded-lg opacity-75"></div>
          <h1 class="z-50 text-6xl font-black text-white">
            {{ singleArea.name }}
          </h1>
        </div>
      </div>

      <!-- Description of the area -->
      <section-feature-section
        title="Area description"
        :desc="singleArea.description"
        image="https://thumbnails.trvl-media.com/7_uNlA_uKzmpaCE7bgD1eDpPvCE=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/178281/Cuatro-Torres-Business-Area-Ctba-51042.jpg"
      />

      <!-- List of products -->
      <section-grid-section
        title="Products of this Area"
        subtitle="All the products of the area"
        subhref="/product"
        :posts="areaProducts"
      />

      <!-- List of people -->
      <section-grid-section
        title="People working in this Area"
        subtitle="All the people working in the area"
        subhref="/member"
        :posts="areaPeople"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    // Retrieve single area information by id
    const myAreaId = route.params.singlearea
    const { data: area } = await $supabase
      .from('area')
      .select()
      .eq('id', myAreaId)
      .single()

    // Retrieve list of people in this area
    const { data: people } = await $supabase
      .from('area_people')
      .select()
      .eq('area_id', myAreaId)

    // Retrieve list of products in this area
    const { data: products } = await $supabase
      .from('area_product')
      .select()
      .eq('area_id', myAreaId)
    return { singleArea: area, areaPeople: people, areaProducts: products }
  },
  data() {
    return {
      singleArea: {},
      areaPeople: [],
      areaProducts: [],
    }
  },
  // SEO metadata
  head() {
    return {
      title: this.headTitle,
      meta: [
        {
          hid: this.headHid,
          name: this.headName,
          content: this.headContent,
        },
      ],
    }
  },
  // SEO metadata computed from area information
  computed: {
    orientationLabel() {
      return 'Area / ' + this.singleArea.name
    },
    headTitle() {
      return this.singleArea.name + ' - Rocket Inc.'
    },
    headHid() {
      return 'area ' + this.singleArea.name
    },
    headName() {
      return 'Rocket Inc. ' + this.singleArea.name
    },
    headContent() {
      return (
        'View all the details about ' +
        this.singleArea.name +
        ', area in which Rocket Inc. is actively working'
      )
    },
  },
}
</script>
