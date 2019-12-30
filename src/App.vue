<template>
  <div id="main">
    <Nav />
    <div class="container mt-3">
      
      <div v-if="notification.show && notification.message" :class="'alert-'+ notification.type" class="alert alert-dismissible fade show" role="alert">
        <strong v-if="notification.title">{{ notification.title }}</strong>

        <ul v-if="typeof notification.message === 'object'">
          <li v-for="(items, key) in notification.message" :key="key">
            {{ key }}
            <ul>
              <li v-for="(item, key) in items" :key="key">
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
        <p v-else class="m-0">{{ notification.message }}</p>

        <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"> -->
        <button type="button" @click.prevent="hideNotification" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: "app",
  components: {
    Nav
  },
  data: () => ({
    // isAuthenticated: false,
    userToken: localStorage.getItem('userToken') || null,
    notification: {
      show: false,
      type: 'info',
      title: '',
      message: ''
    }
  }),
  methods: {
    getLoggedInUser() {
      // return localStorage()
    },
    setNotification(type = 'info', message = '', title = '') {
      this.notification.show = true
      this.notification.type = type
      this.notification.message = message
      this.notification.title = title
    },
    hideNotification() {
      this.notification.show = false
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>