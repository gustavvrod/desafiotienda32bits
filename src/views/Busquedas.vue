<template>
    <div>
    <v-row justify="center" class="my-8">
      <v-col cols="11"> 
        <h2>Busqueda por producto disponible</h2>
        <input class="my-2" type="text" v-model="busquedaPorId" :style="{background:'lightblue'}" placeholder="Ingrese el codigo a buscar...">
        <ul v-if="productoDisponiblePorId.length >0">
            <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
                <label v-text="producto.nombre"></label>
            </li>
        </ul>
        <hr>
            <h4 class="my-4">Cantidad de juegos totales registrados: {{productos.length}} </h4>
        <hr>
            <h4 class="my-4">Cantidad de stock total de juegos: {{stockTotal}} </h4>
        <hr>
        <Listado/>
      </v-col>
    </v-row>
    </div>
</template>

<script>

import {mapGetters, mapState} from 'vuex'
import Listado from '../components/Listado'
export default {
    data(){
        return{
            busquedaPorId: '',
        }
    },
    components:{ Listado },
    computed:{
        ...mapState([
            'productos'
        ]),
        ...mapGetters([
            'stockTotal',
        ]),
        productoDisponiblePorId(){
            return this.$store.getters.productoDisponiblePorId(this.busquedaPorId)
        },

        stockTotal(){
            var suma = 0;
            this.productos.forEach(e =>{
                suma += e.stock;
            });
            return suma
        }
    },
}
</script>