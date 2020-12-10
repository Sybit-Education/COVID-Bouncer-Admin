<template>
  <b-row class="mt-5">
    <b-col class="location">
      <form>
        <b-col>
          <b-form-group label="Set up a Location">
            <b-form-input
              id="input-location"
              class="input-styling"
              type="text"
              v-model="location"
              min="5"
              max="100"
              required>
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button class="mt-2 sy-background nextButton" @click="addLocation">Nächster Schritt</b-button>
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
