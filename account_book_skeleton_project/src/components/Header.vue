<template>
  <div>
    <div id="background">
      <div class="menu">에구머니</div>
      <nav>
        <RouterLink to="#" id="homemenu" class="menu">HOME</RouterLink>
        <RouterLink to="#" id="homemenu" class="menu">거래내역</RouterLink>
        <RouterLink to="#" id="homemenu" class="menu">통계</RouterLink>
      </nav>
    </div>
    <RouterLink to="/history/add" id="quickbutton">+</RouterLink>
  </div>
</template>
<script setup></script>
<style>
* {
  margin: 0;
}

#background {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  background-color: #ffcf10;
  border: 1px solid #ffcf10;
  height: 100px;
}
.menu {
  text-decoration: none;
  font-size: x-large;
  color: aliceblue;
  display: inline-block;
  margin: 30px 30px;
}
nav {
  margin: 0;
  float: right;
}
#quickbutton {
  text-decoration: none;
  color: aliceblue;
  text-align: center;
  font-size: 35px;
  background-color: #ffcf10;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: fixed;
  z-index: 100;
  bottom: 25px;
  right: 25px;
}
</style>
