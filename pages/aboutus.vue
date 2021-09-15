<template>
  <div>
    <layout-header-menu current="About us" />

    <!-- Company strengths 1 -->
    <section-feature-section
      title="Our Vision"
      desc="No matter which industry you belong to, every business must become digital"
      image="https://previews.123rf.com/images/guykantawan/guykantawan1706/guykantawan170600012/81210378-doppia-esposizione-di-monete-e-concetto-di-sfondo-finanza-e-affari-di-sfondo-della-città.jpg"
    />

    <!-- Company strengths 2 -->
    <section-feature-section
      title="Our Mission"
      desc="Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe."
      image="https://www.iso37001-2016.it/wp-content/uploads/2019/01/people-background.jpg"
      :left="true"
    />

    <!-- Company strengths 3 -->
    <section-feature-section
      title="We are project driven"
      desc="Our specialists make sure that they produce customized and verified solutions as per needs and requirements of the customers at par excellence."
      image="https://image.freepik.com/free-vector/futuristic-idea-background-with-glowing-low-polygonal-light-bulb-human-hand_67515-692.jpg"
    />
    <!-- Company's projects -->
    <section-grid-section
      title="Projects"
      subtitle="Projects of the company"
      buttontext="View All"
      :external-link="true"
      :posts="projectList"
      :has-view-all="false"
    />
    <!-- Company's testimonials -->
    <section-testimonials-section :testimonials="testimonialList" />
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    if (typeof $supabase !== 'undefined') {
      // Retrieve list of all projects and testimonials in the server (asyncData)
      const { data: projects } = await $supabase.from('project').select()
      const { data: testimonials } = await $supabase
        .from('testimonial')
        .select()
      return { projectList: projects, testimonialList: testimonials }
    }
  },
  data() {
    return {
      projectList: [],
      testimonialList: [],
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'About us - Rocket Inc.',
      meta: [
        {
          hid: 'aboutus',
          content:
            'Learn more about Rocket Inc., who we are, what we do, why choosing us',
          name: 'Rocket Inc. about us',
        },
      ],
    }
  },
}
</script>
