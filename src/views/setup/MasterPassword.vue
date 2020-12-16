<template>
<b-container class="mt-3 align-content-center">
    <b-row>
      <h3 class="text-center pb-3">Welcome to the Setup from the COVID-Bouncer Admin</h3>
    </b-row>
  <b-row>
    <form>
        <b-form-group
          label="1. Step: Setup the master password"
          id="master-password"
          class="input-styling">
          <b-form-input
            id="input-master-password"
            v-model="masterPassword"
            :state="invalidFeedback"
            trim>
          </b-form-input>
          <b-form-text id="initials-help-block">
            This step can not be skipped
          </b-form-text>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 5 letters
          </b-form-invalid-feedback>
          <b-button class="mt-2 sy-background nextButton" v-if="invalidFeedback" @click="setMasterPassword">Next step</b-button>
        </b-form-group>
    </form>
  </b-row>
</b-container>
</template>

<script>
import { configService } from '@/services/config.service'
export default {
  computed: {
    invalidFeedback () {
      return this.masterPassword.length > 5
    }
  },
  data () {
    return {
      masterPassword: ''
    }
  },
  methods: {
    setMasterPassword: async function () {
      try {
        await configService.setMasterPassword(this.masterPassword)
      } catch (error) {
        this.showErrorNotification('Error while setting a new master password')
      }
      await this.$router.push({ name: 'Location' })
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
