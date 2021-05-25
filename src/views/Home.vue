<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
        <Header />
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-outline-success btn-block"
          data-toggle="modal"
          data-target="#addModal"
          style="margin-left:10px;"
        >
          Yeni Görev Ekle
        </button>
        <Add />
      </div>
      <div class="col-sm-3">
        <div class="title">
          <p style="margin-left:140px">Yapılacaklar</p>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-primary"
            v-for="(item, key) in $store.getters.getTodo"
            :key="key"
            style="margin-bottom:5px;"
          >
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              style="float:left;"
            />
            <br>
            <button class="btn btn-secondary" @click=" {{this.$store.dispatch('deleteItemTodo', item.id  );}} ">Sil</button>
            <p style="float:right;">{{ item.listItemTodo }}</p>
          </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="title">
          <p style="margin-left:140px">Acil Yapılacaklar</p>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-danger"
            v-for="(item, key) in $store.getters.getUrgent"
            :key="key"
            style="margin-bottom:5px;"
          >
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              style="float:left;"
            />
            <br>
            <button class="btn btn-secondary"  @click=" {{this.$store.dispatch('deleteItemUrgent', item.id  );}} ">Sil</button>
            <p style="float:right;">{{ item.listItemUrgent }}</p>
          </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="title">
          <p style="margin-left:130px">Uzun Vadeli Planlar</p>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-secondary"
            v-for="(item, key) in $store.getters.getPlan"
            :key="key"
            style="margin-bottom:5px;"
          >
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              style="float:left;"
            />
            <br>
            <button class="btn btn-secondary"  @click=" {{this.$store.dispatch('deleteItemPlan', item.id  );}} ">Sil</button>
            <p style="float:right;">{{ item.listItemPlan }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Add from "../components/Add";

export default {
  name: "Home",

  data() {
    return {
    };
  },
  components: {
    Add,
    Header,
  },
  methods: {},
};
</script>
<style>
.title {
  color: #ef9b0f;
  background-color: #fff;
  border-style: double;
  border-color: #ef9b0f;
  border-radius: 25px;
  font-size: 25px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
