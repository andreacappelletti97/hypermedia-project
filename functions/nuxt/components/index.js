import { wrapFunctional } from './utils'

export { default as LayoutFooterSection } from '../../components/layout/FooterSection.vue'
export { default as LayoutHeaderMenu } from '../../components/layout/HeaderMenu.vue'
export { default as SectionFeatureSection } from '../../components/section/FeatureSection.vue'
export { default as SectionGridSection } from '../../components/section/GridSection.vue'
export { default as SectionHeroSection } from '../../components/section/HeroSection.vue'
export { default as SectionSocialNav } from '../../components/section/SocialNav.vue'
export { default as SectionTestimonialsSection } from '../../components/section/TestimonialsSection.vue'
export { default as BaseChat } from '../../components/base/Chat.vue'
export { default as BaseGridContainer } from '../../components/base/GridContainer.vue'
export { default as BaseOrientationInfo } from '../../components/base/OrientationInfo.vue'
export { default as BaseSectionTitle } from '../../components/base/SectionTitle.vue'

export const LazyLayoutFooterSection = import('../../components/layout/FooterSection.vue' /* webpackChunkName: "components/layout-footer-section" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutHeaderMenu = import('../../components/layout/HeaderMenu.vue' /* webpackChunkName: "components/layout-header-menu" */).then(c => wrapFunctional(c.default || c))
export const LazySectionFeatureSection = import('../../components/section/FeatureSection.vue' /* webpackChunkName: "components/section-feature-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionGridSection = import('../../components/section/GridSection.vue' /* webpackChunkName: "components/section-grid-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionHeroSection = import('../../components/section/HeroSection.vue' /* webpackChunkName: "components/section-hero-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionSocialNav = import('../../components/section/SocialNav.vue' /* webpackChunkName: "components/section-social-nav" */).then(c => wrapFunctional(c.default || c))
export const LazySectionTestimonialsSection = import('../../components/section/TestimonialsSection.vue' /* webpackChunkName: "components/section-testimonials-section" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseChat = import('../../components/base/Chat.vue' /* webpackChunkName: "components/base-chat" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseGridContainer = import('../../components/base/GridContainer.vue' /* webpackChunkName: "components/base-grid-container" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseOrientationInfo = import('../../components/base/OrientationInfo.vue' /* webpackChunkName: "components/base-orientation-info" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseSectionTitle = import('../../components/base/SectionTitle.vue' /* webpackChunkName: "components/base-section-title" */).then(c => wrapFunctional(c.default || c))
