
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Usuário</th>
          <th class="text-left">E-mail</th>
          <th class="text-left">Data de inclusão</th>
          <th class="text-left">Data de alteração</th>
          <th class="text-left">Regras</th>
          <th class="text-left">Status</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="user of users" :key="user.usuario">
          <td>{{ user.usuario }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.data_de_inclusao }}</td>
          <td>{{ user.data_de_alteracao }}</td>
          <td>{{ user.regras }}</td>
          <td>{{ user.status }}</td>

        </tr>
        
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

import User from './services/usuarios'

  export default {

    data(){

      return {
        users: []
      
      }

    },

    mounted(){
      User.listar().then(resposta => {
        console.log("teste")
        console.log(resposta.data.users)
        this.users = resposta.data.users
        
      }) 

    }
  }
</script>