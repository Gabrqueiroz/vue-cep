<template>
    
    <div>
        <h1 v-text="title"> </h1>
        <form @submit.prevent ="onSubmit">
            <input type="text" placeholder="Informe o Cep" v-model="cep" >
            <button type="submit">Buscar</button>
        </form>
        <br>

        <div v-if="error != ''">
            {{error}}
        </div>

        <div v-if="preloader"> 
            Carregando ...
            <br>
            <img src="../assets/preloader.gif">
            
        </div>
        <br>
      
        
        <!-- Propiedades Nescessarias no Json  Logradouro, bairro, localidade e uf -->
       <div v-show="addres.bairro ">
        <p><b>Logradouro:</b>{{addres.logradouro}}</p>
        <p><b>Bairro:</b>{{addres.bairro}}</p>
        <p><b>Localidade:</b>{{addres.localidade}}</p>
        <p><b>Uf:</b>{{addres.uf}}</p>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Buscar Cep usando ViaCep',
            cep: '',
            addres:{
                bairro : ''
            } ,
            preloader: false,
            error:'',
        } 
    } , methods:{
        
        onSubmit(){
            this.error = ''
            this.addres ={}
            this.preloader = true
            this.$viaCep.buscarCep(this.cep) //Requisisão API ViaCep
            .then((obj) => {
            this.addres = obj
          
    },
 error => {
    //console.log(Error)
   this.error = 'Cep Errado'

 })
   .finaly(()=>{
          this.preloader = false
    })
        }   
             }
    
    }

      
</script>

<style>

</style>









