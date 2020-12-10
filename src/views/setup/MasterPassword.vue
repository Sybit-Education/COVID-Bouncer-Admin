<template>
<b-row>
  <b-col class="masterPassword">
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
        </b-form-group>
      </b-col>
      <b-col>
        <b-button class="mt-2 sy-background signIn-button" @click="setMasterPassword">Nächster Schritt</b-button>
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

<style scoped>

</style>
