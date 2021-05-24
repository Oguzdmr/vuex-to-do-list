<template>
  <div id="add">
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Yeni Görev Ekle</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1"
                  >Yeni Görev Açıklaması</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="taskText"
                ></textarea>
              </div>
              <div class="form-group">
                <select class="form-control" v-model="selectedItem">
                  <option>Yapılacaklar</option>
                  <option>Acil Yapılacaklar</option>
                  <option>Uzun Vadeli Planlar</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Kapat
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="addTask"
            >
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "",
      taskText: "",
      listItem: {},
      checked:false
    };
  },
  methods: {
    addTask() {
      if (this.selectedItem === "Yapılacaklar") {
        this.listItem = { listItemTodo: this.taskText , checked : this.checked };
        this.$store.dispatch("addItemTodo", this.listItem);
        console.log(this.$store.state.todo);
      } else if (this.selectedItem === "Acil Yapılacaklar") {
        this.listItem = { listItemUrgent: this.taskText };
        this.$store.dispatch("addItemUrgent", this.listItem);
        console.log(this.$store.state.urgent);
      } else if (this.selectedItem === "Uzun Vadeli Planlar") {
        this.listItem = { listItemPlan: this.taskText };
        this.$store.dispatch("addItemPlan", this.listItem);
        console.log(this.$store.state.plan);
      }

      this.taskText = "";
    },
  },
};
</script>

<style>

</style>
