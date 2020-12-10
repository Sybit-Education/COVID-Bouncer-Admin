<template>
    <div>
        <headline headline="Administrators"></headline>
        <administrator-table />
    </div>
</template>

<script>
import headline from '@/components/base/Headline'
import AdministratorTable from '@/components/AdministratorTable.vue'
export default {
  components: {
    AdministratorTable,
    headline
  }
}
</script>

<style lang="scss" scoped>

</style>
