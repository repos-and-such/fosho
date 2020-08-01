<template>
  <div id="app-footer">
    <div></div>
    <button>
      
    </button>
  </div>
</template>

<script>

export default {
  name: "About",
  methods: {
    back() {
      this.$router.push('/');
    },
  },
  computed: {
    development() {
      return process.env.NODE_ENV === 'development';
    }
  },
  mounted() {
    let inner = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${inner}px`);
    window.addEventListener('resize', () => {
      inner = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${inner}px`);
    });
  },
};
</script>
<style scoped>
.profile-page-bar {
  display: flex;
  align-items: center;
  background-color: rgb(187, 57, 42);
  color: white;
  width: 100%;
  font-size: 28px;
  height: 7%;
}

.profile-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
}

.sub-heading {
  margin: 20px 0px 10px 0px;
  font-weight: normal;
}

.sub-text {
  margin: 0px 0px 20px 10px;
  font-size: 18px;
  font-weight: normal;
}

#about-page {
  display:flex; 
  flex-direction: column;
  height: var(--vh, 1vh);
  font-size: 20px;
  max-width: 1000px;
}

#profile-page-header {
  justify-content: center;
}

#profile-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  height: 86%;
}

#profile-page-footer {
  justify-content: space-between;
}

#profile-page-item {
  padding: 10px 0px;
  font-weight: bold;
}

#category {
  height: 34px;
  border-radius: 30px;
}

#submit-button {
  width: 132px;
  height: 40px;
  margin: 18px 0px;
}


</style>
