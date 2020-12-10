<template>
  <div id="contact-report-filter">
      <b-form inline >
        <b-form-select
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
        <b-button variant="primary" @click="getContactById()">Show Contacts</b-button>
      </b-form>
  </div>
</template>

<script>
import { userService } from '@/services/user.service'
import { contactReportService } from '@/services/contactReport.service'
export default {
  data () {
    return {
      selected: null,
      users: [],
      contacts: []
    }
  },
  methods: {
    async fetchUser () {
      const response = await userService.getAllUser()
      this.users = response.map(user => {
        return { text: `${user.data().lastName}, ${user.data().firstName}`, value: user.id }
      })
    },
    async getContactById () {
      const response = await contactReportService.getContactsOfUserByID(this.selected)
      console.log(response)
    }
  },
  mounted () {
    this.fetchUser()
  }
}
</script>

<style>

</style>
