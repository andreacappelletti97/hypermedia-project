<template>
  <div>
    <layout-header-menu current="" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Title of the page -->
      <base-section-title
        title="Privacy"
        subtitle="Privacy policy and terms of use for the company website"
      />
      <div class="pt-6 mt-6 border-t border-gray-200">
        <p class="text-lg leading-relaxed tracking-wider">
          For Rocket Inc. visitors, we do not use cookies and we do not collect
          any personal data. If you decide to create an account, we ask for the
          bare minimum and only share it with services that are absolutely
          necessary for the app to function. At Rocket Inc., we are committed to
          complying with GDPR, CCPA, PECR and other privacy regulations on our
          website and on our web analytics product too. The privacy of your data
          — and it is your data, not ours! — is a big deal to us. In this
          policy, we lay out what data we collect and why, how your data is
          handled and your rights to your data. We promise we never sell your
          data: never have, never will. If you have placed the Rocket Inc.
          script on your website, take a look at our data policy for details on
          the information we do collect about your website visitors on your
          behalf.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // SEO metadata
  head() {
    return {
      title: 'Privacy - Rocket Inc.',
      meta: [
        {
          hid: 'privacy',
          content: 'Privacy policy and terms of use for the company website',
          name: 'Rocket Inc. privacy',
        },
      ],
    }
  },
}
</script>
