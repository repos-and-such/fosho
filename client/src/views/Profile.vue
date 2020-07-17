<template>
  <div>
    <h2>{{ $auth.user.nickname }}</h2>
    <h2>{{ $auth.user.email }}</h2>
      <img
      :src="$auth.user.picture"
      alt="User's profile picture"
      class="rounded-circle img-fluid profile-picture"
    />
  </div>
</template>