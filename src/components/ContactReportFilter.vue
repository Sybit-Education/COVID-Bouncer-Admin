<template>
  <div id="contact-report-filter">
    <b-row>
      <b-form inline >
        <b-form-select
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="selectedUser"
          :options="users"
        >
          <template #first>
            <b-form-select-option
              :value="null"
              disabled>-- Please select an user --</b-form-select-option>
          </template>
        </b-form-select>
          <b-form-datepicker
            v-model="selectedDate"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            :min="minDate"
            :max="maxDate"
            class="mb-2 mr-sm-2 mb-sm-0" />
        <b-button
          variant="primary"
          @click="getContactById()"
          class="d-print-none">Show Contacts</b-button>
      </b-form>
    </b-row>
    <b-row>
      <b-table :items="contacts" :fields="fields" show-empty id="contact-report-table">
        <template #empty='scope' >{{scope.emptyText}}</template>
      </b-table>
    </b-row>
  </div>
</template>

<script>
import { userService } from '@/services/user.service'
import { contactReportService } from '@/services/contactReport.service'
export default {
  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 1)
    const maxDate = new Date(today)
    return {
      selectedUser: null,
      users: [],
      fields: ['firstName', 'lastName'],
      contacts: [],
      minDate: minDate,
      maxDate: maxDate,
      selectedDate: ''
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
      const response = await contactReportService.getContactsOfUserByID(this.selectedUser, this.selectedDate)
      this.contacts = response
    }
  },
  mounted () {
    this.fetchUser()
  }
}
</script>
