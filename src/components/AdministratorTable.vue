<template>
  <b-container>
    <b-row class="mt-5 mb-1">
      <h1>Administrators</h1>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" class="px-0">
        <b-form-group
          label="Search"
          label-for="filterInput"
          class="my-4 mx-0"
        >
          <b-input-group>
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6" class="mt-0 mb-4 pb-1 pb-md-2 px-0 d-flex flex-row justify-content-between justify-content-md-around align-items-start align-items-md-end">
        <b-checkbox :disabled="filterByAdmins ? true : false" v-model="filterByStandardUsers" switch>Default user</b-checkbox>
        <b-checkbox :disabled="filterByStandardUsers ? true : false" v-model="filterByAdmins" switch>Administrator</b-checkbox>
      </b-col>
    </b-row>
    <b-row>
      <b-table
          primary-key="id"
          striped
          responsive
          hover
          :filter="filter"
          :fields="fields"
          :items="filterByStandardUsers ? onlyStandardUser : filterByAdmins ? onlyAdmins : items">
        <template v-slot:cell(isAdmin) = "data">
        <b-form-checkbox
          @change="changeAdminStatus(data.item)"
          :id="data.item.initials"
          v-model="data.item.isAdmin"
          name="checkbox-1"
        ></b-form-checkbox>
      </template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
import { userService } from '@/services/user.service'
export default {
  data () {
    return {
      users: [],
      filter: null,
      filterByStandardUsers: false,
      filterByAdmins: false
    }
  },
  async mounted () {
    await this.fetchAllUsers()
  },
  methods: {
    async fetchAllUsers () {
      const response = await userService.fetchAllUsers()
      this.users = response
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async changeAdminStatus (user) {
      try {
        await userService.setAdminStatus(user)
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  computed: {
    items () {
      const users = this.users
      users.forEach(user => {
        const userName = `${user.firstName} ${user.lastName}`
        user.userName = userName
      })
      return users
    },
    onlyStandardUser () {
      const users = this.users
      const standardUsers = users.filter(user => user.isAdmin !== true)
      standardUsers.forEach(user => {
        const userName = `${user.firstName} ${user.lastName}`
        user.userName = userName
      })
      return standardUsers
    },
    onlyAdmins () {
      const users = this.users
      const standardUsers = users.filter(user => user.isAdmin === true)
      standardUsers.forEach(user => {
        const userName = `${user.firstName} ${user.lastName}`
        user.userName = userName
      })
      return standardUsers
    },
    fields () {
      return [
        { key: 'userName', label: 'Username', sortable: true },
        { key: 'initials', label: 'Initials', sortable: true },
        { key: 'isAdmin', label: 'is Administrator', sortable: true }
      ]
    }
  }
}
</script>
