<template>
  <div>
    <Nuxt />

    <!-- Same chat box in all pages -->
    <base-chat :chat-list="list" />

    <!-- Same footer in all pages -->
    <layout-footer-section />
  </div>
</template>

<script>
import MMCCMixin from '~/mixins/mmcc-mixin'

export default {
  mixins: [MMCCMixin],
}
</script>
