<template>
      <v-app>
        <v-app-bar app color="teal darken-1" dark dense>
          <div class="d-flex align-center">
            <v-btn :to="{name: 'inicio'}" text class="mr-2">32</v-btn>
          </div>

          <v-spacer></v-spacer>

          <v-btn :to="{name: 'inicio'}" text><span class="mr-2">Inicio</span><v-icon>mdi-home</v-icon></v-btn>
          <v-btn :to="{name: 'busquedas'}" text><span class="mr-2">Busquedas</span><v-icon>mdi-search-web</v-icon></v-btn>
          <v-btn :to="{name: 'ventas'}" text><span class="mr-2">Ventas</span><v-icon>mdi-wechat</v-icon></v-btn>
          <v-btn :to="{name: 'total'}" text><span class="mr-2">Total</span><v-icon>mdi-wechat</v-icon></v-btn>
        </v-app-bar>
        <v-main>
          <transition name="vista">
            <router-view></router-view>
          </transition>
        </v-main>
  </v-app>
</template>

<script>

</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity 1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
