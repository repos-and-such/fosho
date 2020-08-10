<template>
  <div class="router-sub-page" style="width: 100%;">
    <page-header :icon="'settings'" :text="'Tools'" />
    <div class="page-body">
      <div class="note">
        NB! This app is still in development. More tools and settings coming up.
      </div>
    <div class="separator-line"></div>
    <div class="sub-heading">
      <span style="padding-right: 6px;">Logged in as:</span>
      {{$auth.user.email}}</div>
      <div class="sub-text"></div>
    <div class="separator-line"></div>
    <div class="sub-heading">Bulk add item categories</div>
    <div style="display: flex; flex-direction: column; align-items: flex-start;">
      <div class="note">
        NB! This will be replaced with a drop-down menu. At the moment, you need to enter a valid category 
        (fruit, vegetable, bread-and-bakery, meat, grains-and-dry, dairy, drink, personal-care or household) for this to work.
      </div>      
      <span style="display: flex; flex-direction: row; margin-top: 10px; width: 100%;">
        <textarea 
          class="text-field"
          maxlength="30"
          v-model="category"
          placeholder="Enter item category"
          spellcheck="false"
        />
        <button
          @click="submitItems"
          type="insert"
          class="material-icons" 
          id="check-button" 
          spellcheck="false"
        >
          check
        </button>
      </span>
      <textarea 
        class="text-field"
        id="large-text-field"
        maxlength="3000"
        v-model="items"
        placeholder="Enter items that belong to this category, separated by commas."
      />
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
    async submitItems() {
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
.text-field {
  width: 100%;
  height: 42px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box; 
}

#large-text-field {
  height: 30vh;
  padding: 18px;
  margin: 12px 12px 12px 0px;
  border-radius: 24px;
  overflow-wrap: anywhere;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow: auto; 
}

.note {
  padding: 28px 22px 20px 20px;
  color: rgb(172, 170, 170);
}

.material-icons {
  color: rgb(65, 148, 156); 
  font-size: 42px;
}

</style>