<template>
  <div>
    <div>Profile</div>
    <h2>{{ $auth.user.nickname }}</h2>
    <h2>{{ $auth.user.email }}</h2>
      <img
      :src="$auth.user.picture"
      alt="User's profile picture"
      class="rounded-circle img-fluid profile-picture"
    />
    <i class="material-icons" @click.prevent="logout" id="settings">exit_to_app</i><span>log out</span>
    <div>
      <i class="material-icons" @click.prevent="back" id="settings">keyboard_back</i><span>back</span>
    </div>
  </div>
</template>
<script>

export default {
  name: "Profile",
  methods: {
    back() {
      this.$router.push('/');
    },
    logout() {
      this.$auth.logout();
    }
  },
};
</script>
