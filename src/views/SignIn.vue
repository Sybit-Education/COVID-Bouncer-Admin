<template>
<b-row>
  <b-col class="signIn">
    <form>
      <b-col>
        <b-form-group id="input-group-first-name" :label="$t('signIn.firstName')" label-for="input-first-name">
          <b-form-input
            id="input-first-name"
            class="input-styling"
            type="text"
            v-model="signIn.firstName"
            required>
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
      <b-form-group id="input-group-last-name" :label="$t('signIn.lastName')" label-for="input-last-name">
        <b-form-input
          id="input-last-name"
          type="text"
          class="input-styling"
          v-model="signIn.lastName"
          required>
        </b-form-input>
      </b-form-group>
      </b-col>
      <b-col>
      <b-form-group id="input-group-initials"
        label="$t('signIn.initials')"
        label-for="input-initials"
        description="Your initials will be used as a username. This in connection with your email ensures a uniqueness. Example: mmn">
        <b-form-input
          id="input-initials"
          type="text"
          class="input-styling"
          v-model="signIn.initials"
          required />
      </b-form-group>
      </b-col>
      <b-col>
      <b-form-group id="input-group-master-password"
        label="$t('signIn.masterPassword')"
        label-for="input-master-password"
        description="Inital master password to get access to instance.">
        <b-form-input
          id="input-master-password"
          type="password"
          autocomplete="on"
          class="input-styling"
          v-model="signIn.masterPassword"
          required
          ></b-form-input>
      </b-form-group>
      </b-col>
      <b-col>
        <b-button class="mt-2 sy-background signIn-button" @click="onSubmit" v-html="$t('signIn.signIn')" />
      </b-col>
    </form>
  </b-col>
</b-row>
</template>

<script>
import { userService } from '@/services/user.service'
export default {
  name: 'SignIn',
  data () {
    return {
      signIn: {
        firstName: '',
        lastName: '',
        initials: '',
        masterPassword: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      this.signIn.initials = this.signIn.initials.toLowerCase()
      const response = await userService.signIn(this.signIn)
      if (response) {
        this.showErrorNotification('The entered password does not match with the master password.')
      } else {
        await this.$router.push({ name: 'Home' })
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
.signIn-button
  border: none
  font-weight: bold
.input-styling:focus
  box-shadow: 0 0 0 0.2rem rgba(181, 22, 131, 0.25)
  border: none
</style>
