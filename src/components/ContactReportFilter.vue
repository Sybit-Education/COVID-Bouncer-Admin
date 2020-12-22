<template>
  <div id="contact-report-filter">
    <b-row>
      <b-form inline class="mb-3">
        <b-form-select
          class="mb-2 mr-sm-2"
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
            class="mb-2 mr-sm-2" />
        <b-button
          variant="primary"
          @click="getContactById()"
          class="d-print-none mb-2 mr-sm-2">
          Show Contacts
        </b-button>
        <b-button
          :disabled="!printEnabled"
          @click="print()"
          class="d-print-none auto mb-2 ml-sm-5">
          Print ...
        </b-button>
      </b-form>
    </b-row>
    <b-row>
      <b-table
        id="contact-report-table"
        :items="contacts"
        :fields="fields"
        show-empty>
        <template #empty="scope">
          {{ scope.emptyText }}
        </template>
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
  computed: {
    printEnabled () {
      return this.contacts != null && this.contacts.length > 0
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
      this.contacts = await contactReportService.getContactsOfUserByID(this.selectedUser, this.selectedDate)
    },
    print () {
      window.print()
    }
  },
  mounted () {
    this.fetchUser()
  }
}
</script>
