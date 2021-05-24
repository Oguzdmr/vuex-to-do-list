<template>
    <div id="header">
        <nav class="navbar navbar-expand-lg" style="background-color:#ef9b0f;">
  <p class="navbar-brand" style="color:#fff;"> Yapılacaklar Listesi</p>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:localStorage.getItem('Name')
        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
#header{
    margin-bottom: 20px;
}
</style>