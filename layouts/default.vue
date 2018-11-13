<template>
  <div class="wrap">
    <page-header/>
    <nuxt/>
    <page-footer />
    <common-rightside />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import PageFooter from '~/components/page-footer'
import CommonRightside from '~/components/common-rightside'

export default {
  components: { PageHeader, PageFooter, CommonRightside }

}
</script>
