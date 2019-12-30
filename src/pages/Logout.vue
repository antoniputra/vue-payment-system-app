<template>
  <div>
    I am Logout
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  created() {
    auth.logout()
      .then(() => {
        localStorage.removeItem('userToken')
        this.$parent.userToken = null
        this.$parent.setNotification('info', 'You just logged out. To continue use this application, Please Login first!')
        this.$router.push({ name: 'login' })
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('some error:', error)
      })
  }
}
</script>

<style>

</style>