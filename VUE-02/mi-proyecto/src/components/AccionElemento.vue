<template>
    <button @click="accion2">{{texto}}</button>
</template>

<script>
export default {
    name: 'AccionElemento',
    props: {
        texto: String
    },
    methods: {
        accion2(){
            this.$emit('evento');
        }
    }
}
</script>

<style scoped>
    button {
        margin-left: 15px;
    }
</style>