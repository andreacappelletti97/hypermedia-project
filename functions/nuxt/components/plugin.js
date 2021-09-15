import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  LayoutFooterSection: () => import('../../components/layout/FooterSection.vue' /* webpackChunkName: "components/layout-footer-section" */).then(c => wrapFunctional(c.default || c)),
  LayoutHeaderMenu: () => import('../../components/layout/HeaderMenu.vue' /* webpackChunkName: "components/layout-header-menu" */).then(c => wrapFunctional(c.default || c)),
  SectionFeatureSection: () => import('../../components/section/FeatureSection.vue' /* webpackChunkName: "components/section-feature-section" */).then(c => wrapFunctional(c.default || c)),
  SectionGridSection: () => import('../../components/section/GridSection.vue' /* webpackChunkName: "components/section-grid-section" */).then(c => wrapFunctional(c.default || c)),
  SectionHeroSection: () => import('../../components/section/HeroSection.vue' /* webpackChunkName: "components/section-hero-section" */).then(c => wrapFunctional(c.default || c)),
  SectionSocialNav: () => import('../../components/section/SocialNav.vue' /* webpackChunkName: "components/section-social-nav" */).then(c => wrapFunctional(c.default || c)),
  SectionTestimonialsSection: () => import('../../components/section/TestimonialsSection.vue' /* webpackChunkName: "components/section-testimonials-section" */).then(c => wrapFunctional(c.default || c)),
  BaseChat: () => import('../../components/base/Chat.vue' /* webpackChunkName: "components/base-chat" */).then(c => wrapFunctional(c.default || c)),
  BaseGridContainer: () => import('../../components/base/GridContainer.vue' /* webpackChunkName: "components/base-grid-container" */).then(c => wrapFunctional(c.default || c)),
  BaseOrientationInfo: () => import('../../components/base/OrientationInfo.vue' /* webpackChunkName: "components/base-orientation-info" */).then(c => wrapFunctional(c.default || c)),
  BaseSectionTitle: () => import('../../components/base/SectionTitle.vue' /* webpackChunkName: "components/base-section-title" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
