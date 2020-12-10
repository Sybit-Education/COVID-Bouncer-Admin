<template>
<b-row class="mt-3 align-content-center">
  <b-col class="masterPassword">
    <b-col>
      <h3 class="text-center pb-3">Welcome to the Setup from the COVID-Bouncer Admin</h3>
    </b-col>
    <form>
      <b-col>
        <b-form-group label="Setup the master password">
          <b-form-input
            id="input-master-password"
            class="input-styling"
            type="text"
            v-model="config.masterPassword"
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
        <b-button class="mt-2 sy-background nextButton" @click="setMasterPassword">Next step</b-button>
      </b-col>
    </form>
  </b-col>
</b-row>
</template>

<script>
import { configService } from '@/services/config.service'
export default {
  name: 'MasterPassword',
  data () {
    return {
      config: {
        masterPassword: ''
      }
    }
  },
  methods: {
    async setMasterPassword () {
      const response = await configService.setMasterPassword(this.config.masterPassword)
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
