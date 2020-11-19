<template>
  <div class="home">
    <h1>Personas</h1>
    <Table :fields="campos" :items="allPersonas"/>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Clave'},
        { key: 'nombre', label: 'Nombre'},
        { key: 'direccion', label: 'Dirección'},
        { 
          key: 'telefono', 
          label: 'Teléfono',
          formatter: value => {
            return value || "Sin información"
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['allPersonas'])
  },
  methods: {
    ...mapActions(['setPersonas'])
  },
  created() {
    this.setPersonas();
  }
}
</script>
