<template>
  <b-container class="mt-3 align-content-center">
    <b-row>
      <h3 class="text-center pb-3">Welcome to the Setup of COVID-Bouncer</h3>
    </b-row>
    <b-row>
      <form>
        <b-form-group
          label="3. Step: Add a Building"
          id="building"
          class="input-styling">
          <b-form-input
            id="input-building"
            v-model="building"
            :state="invalidFeedback"
            trim>
          </b-form-input>
          <b-form-text id="initials-help-block">
            This step can not be skipped
          </b-form-text>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>
              <b-button class="mt-2 sy-background nextButton" v-if="invalidFeedback" @click="addBuilding">Finish setup</b-button>
        </b-form-group>
      </form>
    </b-row>
  </b-container>
</template>

<script>
import { locationService } from '@/services/location.service'

export default {
  props: ['location'],
  computed: {
    invalidFeedback () {
      return this.building.length > 3
    }
  },
  data () {
    return {
      building: ''
    }
  },
  methods: {
    addBuilding: async function () {
      try {
        await locationService.addBuilding(this.building, this.location)
      } catch (error) {
        this.showErrorNotification('Error while adding a new building')
      }
      await this.$router.push({ name: 'Home' })
    }
  }
}
</script>
