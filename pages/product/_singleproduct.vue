<template>
  <div>
    <layout-header-menu current="Products" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Navigation links -->
      <base-orientation-info
        :section="orientationLabel"
        :link1="myAreaLink"
        :href1="myAreaHref"
        link2="Managers"
      />

      <!-- Single product general information -->
      <div class="pt-10 mt-6 mb-10 border-t border-gray-300">
        <div
          :style="{ backgroundImage: `url(${singleProduct.image_url})` }"
          class="
            relative
            flex
            items-center
            justify-center
            bg-gray-300
            border border-gray-400
            rounded-lg
            shadow-xl
            h-60
          "
        >
          <div class="absolute inset-0 bg-blue-900 rounded-lg opacity-75"></div>
          <h1 class="z-50 text-6xl font-black text-white">
            {{ singleProduct.name }}
          </h1>
        </div>
      </div>

      <!-- Extra information -->
      <div class="mb-20">
        <!-- Product description -->
        <base-section-title
          title="Product details"
          :subtitle="singleProduct.description"
        />
      </div>

      <!-- Product pricing -->
      <div v-if="hasPrices" class="mb-20">
        <base-section-title
          title="Product pricing"
          subtitle="Different prices available for the product"
        />
        <div class="flex flex-col items-end gap-10 mt-12 lg:flex-row">
          <div class="flex-1 w-full lg:w-auto">
            <div class="py-20 text-center bg-indigo-300 h-60">
              <p class="text-3xl font-bold tracking-widest text-gray-900">
                {{ singleProduct.prices[0].amount }}€
              </p>
              <span
                class="
                  inline-block
                  mt-4
                  text-xl
                  font-medium
                  tracking-tight
                  text-gray-800
                "
              >
                {{ singleProduct.prices[0].name }}
              </span>
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div
              class="
                py-24
                text-center
                bg-indigo-700
                border border-gray-400
                shadow-xl
                h-72
              "
            >
              <p class="text-5xl font-black tracking-widest text-white">
                {{ singleProduct.prices[1].amount }}€
              </p>
              <span
                class="
                  inline-block
                  mt-6
                  text-2xl
                  font-medium
                  tracking-tight
                  text-white
                "
              >
                {{ singleProduct.prices[1].name }}
              </span>
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div class="py-20 text-center bg-indigo-300 h-60">
              <p class="text-3xl font-bold tracking-widest text-gray-900">
                {{ singleProduct.prices[2].amount }}€
              </p>
              <span
                class="
                  inline-block
                  mt-4
                  text-xl
                  font-medium
                  tracking-tight
                  text-gray-800
                "
              >
                {{ singleProduct.prices[2].name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- List of people -->
      <section-grid-section
        title="People working on this Product"
        subtitle="All the people working on the product"
        subhref="/member"
        :posts="productPeople"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    // Retrieve information about a single product (by id)
    const myProductId = route.params.singleproduct
    const { data: product } = await $supabase
      .from('product_with_price')
      .select()
      .eq('id', myProductId)
      .single()

    // Retrive list of people working on the product
    const { data: people } = await $supabase
      .from('product_people')
      .select()
      .eq('product_id', myProductId)

    // Retrive area of the product
    const { data: area } = await $supabase
      .from('product_area')
      .select()
      .eq('product_id', myProductId)
      .single()
    return { singleProduct: product, productPeople: people, productArea: area }
  },
  data() {
    return {
      singleProduct: {},
      productArea: {},
      productPeople: [],
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
  // SEO metadata computed from product information
  computed: {
    // Check that prices are defined for this product
    hasPrices() {
      return this.singleProduct.prices.length > 0
    },
    // Compute label for orientation text
    orientationLabel() {
      return 'Product / ' + this.singleProduct.name
    },
    myAreaLink() {
      return 'View area of the product: ' + this.productArea.name
    },
    myAreaHref() {
      return '/area/' + this.productArea.id
    },
    headTitle() {
      return this.singleProduct.name + ' - Rocket Inc.'
    },
    headHid() {
      return 'product ' + this.singleProduct.name
    },
    headName() {
      return 'Rocket Inc. ' + this.singleProduct.name
    },
    headContent() {
      return (
        'View all the details about the ' +
        this.singleProduct.name +
        ' product offered by Rocket Inc.'
      )
    },
  },
}
</script>
