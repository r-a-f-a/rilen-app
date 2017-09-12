<script>
export default {
  name: 'app',
  computed: {
    user () {
      const {name, email} = this.$store.state.user
      return `O ${name} usa o email ${email}`
    }
  },
  mounted () {
    console.log(this.$i18n.locale())
  },
  methods: {
    setLocale: function (locale) {
      this.$i18n.set(locale)
    }
  }
}
</script>
<template>
  <div id="app">
    {{ $t('name') }}
    {{ $t('mail') }}
    <button v-on:click="setLocale('pt-br')"> PT-BR</button>
    <button v-on:click="setLocale('en-us')"> EN-US</button>
    <router-view></router-view>
  </div>
</template>
