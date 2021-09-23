<template>
    <div>
        <h2>Productos disponibles</h2>
        <ul>
            <li v-for="(producto, clave) in productos" :key="clave">
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