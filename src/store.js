import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        productos: [
            { id: '0001', nombre: 'Sekiro', stock: 100, precio: 30000, color: 'red', destacado: 'true' },
            { id: '0002', nombre: 'Fifa 21', stock: 100, precio: 25000, color: 'blue', destacado: 'false' },
            { id: '0003', nombre: 'Gears of War 4', stock: 100, precio: 15000, color: 'green', destacado: 'true' },
            { id: '0004', nombre: 'Mario Tennis Ace', stock: 100, precio: 35000, color: 'yellow', destacado: 'false' },
            { id: '0005', nombre: 'Bloodborne', stock: 100, precio: 10000, color: 'blue', destacado: 'false' },
            { id: '0006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000, color: 'red', destacado: 'true' },
        ]
    },
    getters: {
        productosConStock: state => {
            return state.productos.filter((producto) => { return producto.stock > 0 })
        },
        productoDisponiblePorId: (state, getters) => (id) => {
            return getters.productosConStock.filter((producto) => {
                return producto.id == id
            })
        },
        stockTotal: (state, getters) => {
            var suma = 0;
            return getters.productosConStock.forEach((producto) => {
                    suma += producto.stock
                    return suma
                })
                /*var suma = 0;
                this.productos.forEach(e => {
                    suma += e.stock;
                });
                return suma*/
        }
    },
    mutations: {},
    actions: {}
});

export default store;