<template>
  <div id="contact-report-filter">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-form-select
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="selected"
          :options="users"
        >
          <template #first>
            <b-form-select-option :value="null" disabled>-- Please select an user --</b-form-select-option>
          </template>
        </b-form-select>
          <b-form-datepicker id="example-datepicker-start" class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
        <b-form-datepicker id="example-datepicker-end"  class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
        <b-button variant="primary">Show Contacts</b-button>
      </b-form>
  </div>
</template>

<script>
import { userService } from '@/services/user.service'
export default {
  data () {
    return {
      selected: null,
      users: []
    }
  },
  methods: {
    async fetchUser () {
      const response = await userService.getAllUser()
      this.users = response.map(user => {
        return { text: `${user.lastName}, ${user.firstName}`, value: user.initials }
      })
    }
  },
  mounted () {
    this.fetchUser()
  }
}
</script>

<style>

</style>
