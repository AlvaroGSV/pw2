<template>
  <div>
      <h1>Agregar personas</h1>
        <b-form @submit.prevent="guardarPersona">
            <Input
               v-model="persona.nombre"
               label="Nombre"
               id="nombre"
               placeholder="Ingrese nombre de la persona"
               mensajeError="El nombre es obligatorio"
               :error="erroresValidacion && !validacionNombre"
               class="mb-2"
            />
             <Input
               v-model="persona.direccion"
               label="Dirección"
               id="direccion"
               maxlength="150"
               placeholder="Ingrese la dirección de la persona"
               class="mb-2"
            />
             <Input
               v-model="persona.telefono"
               label="Teléfono"
               id="telefono"
               maxlength="10"
               placeholder="Ingrese el teléfono de la persona"
            />

            <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
        </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'

export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            persona: {
                nombre: '',
                direccion: '',
                telefono: ''
            },
            erroresValidacion: false
        }
    },
    computed: {
        validacionNombre() {
            return (
                this.persona.nombre !== undefined &&
                this.persona.nombre.trim() !== ''
            )    
        }
    }, 
    methods: {
        ...mapActions(['crearPersona']),
        guardarPersona() {
            if(this.validacionNombre) {
                this.erroresValidacion = false
                console.log(this.persona);
                this.crearPersona({
                    params: this.persona,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                        });

                        this.$router.push({
                            name: 'Home'
                        })
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje,
                        });
                    }
                })
            } else {
                this.erroresValidacion = true
            }
        }
    }
}
</script>

<style>

</style>