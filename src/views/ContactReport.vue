<template>
  <b-container>
    <h1>Contact Report</h1>

    <contact-report-filter />
    <contact-report-table />
  </b-container>
</template>

<script>
import ContactReportTable from '@/components/ContactReportTable.vue'
import ContactReportFilter from '@/components/ContactReportFilter.vue'

export default
{
  components: { ContactReportTable, ContactReportFilter }
}
</script>

<style>

</style>
