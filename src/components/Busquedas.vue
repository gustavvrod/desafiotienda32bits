<template>
    <div>
        <h2>Busqueda por producto disponible</h2>
        <input type="text" v-model="busquedaPorId">
        <ul v-if="productoDisponiblePorId.length >0">
            <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
                <label v-text="producto.nombre"></label>
            </li>
        </ul>
        <hr>
            <h4>Cantidad de titulos ingresados: {{productos.length}} </h4>
        <hr>
            <h4>Cantidad de stock total: {{stockTotal}} </h4>
        <hr>
        <Listado/>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Listado from '../components/Listado'
export default {
    data(){
        return{
            busquedaPorId: '',
            stockJuegos:'',
        }
    },
    components:{ Listado },
    computed:{
        ...mapState([
            'productos'
        ]),
        ...mapGetters([
            'productosConStock', 'stockTotal',
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