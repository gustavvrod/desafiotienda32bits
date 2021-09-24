<template>
    <div>
        <v-row justify="center" class="mt-12">
            <v-col cols="11">
                <h1>{{titulo}}</h1>
                <h2> {{subtitulo}} </h2>
            </v-col>
        </v-row>

    </div>
</template>
<script>

export default {
    data(){
        return{
            titulo: '32bits',
            subtitulo: 'Juegos de PC y consolas'
        }
    }
}
</script>
