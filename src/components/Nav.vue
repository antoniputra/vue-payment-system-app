<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">Payment System</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li v-for="(link, index) in getLinks('left')" :key="index" class="nav-item">
            <router-link :to="{ name: link.name }" class="nav-link">{{ link.text }}</router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'login' }" class="nav-link">Login</router-link></li>
          <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'register' }" class="nav-link">Register</router-link></li>
          
          <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'profile' }" class="nav-link">Profile</router-link></li>
          <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'logout' }" class="nav-link">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$parent.userToken ? true : false
    }
  },
  data: () => ({
    links: [
      {
        text: "Home",
        name: "home",
        align: "left"
      },
      {
        text: "Employee",
        name: "employee",
        align: "left"
      },
    ]
  }),
  methods: {
    getLinks(align = "all") {
      if (align === "all") {
        return this.links;
      }

      return this.links.filter(item => {
        return item.align == align;
      });
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.getLinks());
  }
};
</script>

<style>
</style>