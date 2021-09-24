<template>
    <div>
        <h2 class="my-4">Productos disponibles</h2>
        <ul>
            <li class="mb-1" v-for="(producto, clave) in productos" :key="clave">
                <label v-text="`${producto.id} | ${producto.nombre} | ${producto.stock} | ${producto.precio}`" :style="{background: producto.color}"></label> 
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
 computed:{
    ...mapState([
        'productos'
    ]),
},
}
</script>