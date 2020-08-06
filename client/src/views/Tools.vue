<template>
  <div class="router-sub-page">
    <page-header :icon="'settings'" :text="'Tools'" />
    <div class="page-body">
      <div class="note">
        Note: This app is still in development. More tools and settings coming up.
      </div>
    <div class="separator-line"></div>
    <div class="sub-heading">
      <span style="padding-right: 6px;">Logged in as:</span>
      {{$auth.user.email}}</div>
      <div class="sub-text"></div>
    <div class="separator-line"></div>
    <div class="sub-heading">Bulk add item categories</div>
      <div style="display: flex; flex-direction: column; align-items: flex-start;">
        <textarea class="text-field" id="category" v-model="category" />
      </div>
      <div class="separator-line"></div>
    </div>
    <back-button class="desktop-hide" />
    <div>
    </div>
  </div>
</template>

<script>
import ItemService from '../api-service/ItemService';
import PageHeader from '../components/layout/PageHeader';
import BackButton from '../components/layout/BackButton';

export default {
  name: "Tools",
  components: { PageHeader, BackButton },
  data() {
    return {
      category: '',
      items: ''
    }
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    async submit() {
      ItemService.bindCategory(
        { category: this.category, items: this.items }, 
        await this.$auth.getTokenSilently()
        )
          .then(() => {
            this.items = '';
          });        
    }
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
.note {
  padding: 28px 22px 20px 20px;
  color: rgb(172, 170, 170);
}
.text-field {
  align-self: center;
  padding: 10px 5vw;
  height: 30vh; 
  border-radius: 0px;
  word-wrap: break-word;
  overflow: auto;
}
</style>
