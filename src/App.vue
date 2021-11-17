<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>

            <ul class="navbar-list">

              <li class="navbar-item">
                <router-link href="" class="navbar-link" to="/">Home</router-link>
              </li>

              <li class="navbar-item">
                <router-link href="" class="navbar-link" to="/example">Example</router-link>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!--    <footer></footer>-->
  </div>
</template>

<script>

export default {}
</script>

<style>

</style>
