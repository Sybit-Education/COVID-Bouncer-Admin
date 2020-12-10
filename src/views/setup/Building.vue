<template>
  <b-row class="mt-3 align-content-center">
    <b-col class="building">
      <b-col>
        <h3 class="text-center pb-3">Setup from the COVID-Bouncer Admin</h3>
      </b-col>
      <form>
        <b-col>
          <b-form-group label="3. Step: Setup a building">
            <b-form-input
              id="input-master-password"
              class="input-styling"
              type="text"
              v-model="building"
              min="5"
              max="100"
              required>
            </b-form-input>
            <b-form-text id="initials-help-block">
              This step can not be skipped.
            </b-form-text>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button class="mt-2 sy-background nextButton" @click="addBuilding">Next step</b-button>
        </b-col>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import { locationService } from '@/services/location.service'

export default {
  name: 'Building',
  props: ['location'],
  data () {
    return {
      building: undefined
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    async addBuilding () {
      const response = await locationService.addBuilding(this.building, this.location)
      if (!response) {
        this.showErrorNotification('Error while setting the master password.')
      } else {

      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .nextButton
    border: none
    font-weight: bold

  .input-styling:focus
    box-shadow: 0 0 0 0.2rem rgba(181, 22, 131, 0.25)
    border: none
</style>
