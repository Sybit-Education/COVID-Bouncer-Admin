<template>
  <div id="contact-report-filter">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-form-select
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="selected"
          :options="user"
        ></b-form-select>
          <b-form-datepicker id="example-datepicker" class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
        <b-form-datepicker id="example-datepicker"  class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
        <b-button variant="primary">Show Contacts</b-button>
      </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      user: [
        { value: null, text: 'Please select an user' },
        { value: 'ssr', text: 'Stephan S.' }
      ]
    }
  }

}
</script>

<style>

</style>
