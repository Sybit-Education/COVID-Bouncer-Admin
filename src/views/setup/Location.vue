<template>
  <b-row class="mt-3 align-content-center">
    <b-col class="location">
      <b-col>
        <h3 class="text-center pb-3">Setup from the COVID-Bouncer Admin</h3>
      </b-col>
      <form>
        <b-col>
          <b-form-group label="2. Set up a Location">
            <b-form-input
              id="input-location"
              class="input-styling"
              type="text"
              v-model="location"
              min="5"
              max="100">
            </b-form-input>
            <b-form-text id="initials-help-block">
              This step can be skipped.
            </b-form-text>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button class="mt-2 sy-background nextButton" @click="addLocation">Next step</b-button>
          <b-button class="float-right sy-background nextButton" @click="skipStep">Skip step</b-button>
        </b-col>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import { locationService } from '@/services/location.service'

export default {
  name: 'Location',
  data () {
    return {
      location: ''
    }
  },
  methods: {
    async addLocation () {
      const response = await locationService.setLocation(this.location)
      if (!response) {
        this.showErrorNotification('Error while setting the master password.')
      } else {

      }
    },
    skipStep () {
      this.$router.push({ name: 'Dashboard' })
    },
    showErrorNotification (message) {
      this.$notify({
        group: 'error',
        type: 'error',
        title: 'Important message',
        text: message
      })
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
