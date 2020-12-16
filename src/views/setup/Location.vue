<template>
  <b-container class="mt-3 align-content-center">
    <b-row>
      <h3 class="text-center pb-3">Welcome to the Setup from the COVID-Bouncer Admin</h3>
    </b-row>
    <b-row>
      <form>
        <b-form-group
          label="2. Step: Setup a location"
          id="location"
          class="input-styling"
          :invalid-feedback="invalidFeedback">
          <b-form-input
            id="input-location"
            v-model="location"
            :state="invalidFeedback"
            trim>
          </b-form-input>
          <b-form-text id="initials-help-block">
            This step can be skipped
          </b-form-text>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 5 letters
          </b-form-invalid-feedback>
          <b-row>
            <b-col>
              <b-button class="mt-2 sy-background nextButton" v-if="invalidFeedback" @click="addLocation">Next step
              </b-button>
            </b-col>
            <b-col>
              <b-button class="mt-2 float-right sy-background nextButton" v-if="!invalidFeedback" @click="skipStep">Skip step</b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </form>
    </b-row>
  </b-container>
</template>

<script>
import { locationService } from '@/services/location.service'

export default {
  computed: {
    invalidFeedback () {
      return this.location.length > 5
    }
  },
  data () {
    return {
      location: ''
    }
  },
  methods: {
    async addLocation () {
      const response = await locationService.setLocation(this.location)
      if (!response) {
        this.showErrorNotification('Error while setting a new Location.')
      } else {
        await this.$router.push({ name: 'Building', params: { location: response.id } })
      }
    },
    skipStep () {
      this.$router.push({ name: 'Home' })
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
