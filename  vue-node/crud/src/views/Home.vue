<template>
  <div class="home">
    <h1>Personas</h1>
     <b-button 
            variant="primary"
            class="float-right mb-3"
            to="/agregar-persona"
        >
            Agregar
        </b-button>
    <Table :fields="campos" :items="allPersonas" :busy="getLoading">
        <template slot="actions" slot-scope="{ item } ">
            <b-button
              size="sm"
              variant="outline-primary"
              @click="onEditar(item)"
            >
              Editar
            </b-button>

            <b-button
              size="sm"
              class="ml-2"
              variant="outline-danger"
              @click="onEliminar(item)"
            >
              Eliminar
            </b-button>
        </template>
    </Table>
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
        { key: 'direccion', label: 'Dirección', formatter: value => {
            return value || "Sin información"
          }},
        { 
          key: 'telefono', 
          label: 'Teléfono',
          formatter: value => {
            return value || "Sin información"
          }
        },
        { key: 'actions', label: 'Acciones'},
      ]
    }
  },
  computed: {
    ...mapGetters(['allPersonas', 'getLoading'])
  },
  methods: {
    ...mapActions(['setPersonas', 'eliminarPersona']),
    onEditar(item) {
      console.log(item);
      this.$router.push({
        name: 'Editar',
        params: {
          id: item.item.id
        }
      })
    },
    onEliminar(item) {
      console.log(item);

      this.$bvModal.msgBoxConfirm('Esta opción no se puede deshacer', {
          title: '¿Esta seguro que desea eliminar?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {

              this.eliminarPersona({
                id: item.item.id,
                onComplete: (response) => {
                  this.$notify({
                    type: 'success',
                    title: response.data.mensaje
                  })
                  setTimeout(() => this.setPersonas(), 1000)
                },
                onError: (error) => {
                  this.$notify({
                    type: 'error',
                    title: error.response.data.mensaje
                  })
                }
              })
            }
          })
          .catch(err => {
            // An error occurred
          })


    }
  },
  mounted() {
    this.setPersonas();
  }
}
</script>
