<template>
  <div class="profile-page">
    <div id="profile-page-item" class="profile-page-header">Profile and Settings</div>
    <div class="profile-page-body">
      <div id="profile-page-item">Logged in as {{ $auth.user.email }}</div>
      <div id="profile-page-item">How to use</div>
      <div id="profile-page-item">Settings</div>
      <div id="profile-page-item">
        About this app
        <div style="overflow-y: true;">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nLorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa, exercitationem libero eveniet illo enim, possimus rem at tempora eaque nam nisi blanditiis porro ex, corrupti reiciendis voluptates id in?isi blanditiis porro ex, corrupti reiciendis voluptates id in?
        </div>
      </div>
    </div>
    <div id="profile-page-item" class="profile-page-footer">
      <span @click.prevent="logout" class="profile-button">
        <i class="material-icons" style="font-size: 34px; margin-right: 8px;">exit_to_app</i>
        <span class="mobile-hide">log out</span>
      </span>
      <span @click.prevent="back" class="profile-button">
        <i class="material-icons" id="settings" style="font-size:30px;">arrow_back_ios</i>
        <span class="mobile-hide">back</span>
      </span>
    </div>


    <div>
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
<style scoped>
.profile-page {
  display:flex; 
  flex-direction: column; 
  height: 100vh; 
  width: 100vw;
  font-size: 20px;
}
.profile-page-header {
  display: flex;
  justify-content: center;
  background-color: rgb(209, 80, 80);
  color: white;
  width: 100vw;
  font-size: 28px;
  height: 5vh;
}
#profile-page-item {
  padding: 20px 0px;
  border-bottom: 1px solid rgb(209, 80, 80);
}
.profile-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  height: 90vh;

}
.profile-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.profile-page-footer {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  background-color: rgb(209, 80, 80);
  color: white;
  width: 100vw;
  padding: 30px;
  font-size: 28px;
  height: 5vh;
}
</style>
