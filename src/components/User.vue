<template>
  <div id="user">
    <div class="card container" style="width: 18rem;">
      <img src="../assets/user.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" style="color:#ef9b0f;">TO DO LİST</h5>
        <br>
        <div class="input-group flex-nowrap">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">@</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Kullanıcı Adı"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="name"
          />
        </div>
        <br />
        <a href="/home" class="btn btn-warning" @click="addLocalStorage"
          >Devam Et</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addLocalStorage() {
      this.$store.dispatch("addName", this.name);
    },
  },
};
</script>
<style scoped>
#user{
  margin-top: 150px;
}
</style>
