<template>
    <div class="container text-center  mt-5 mb-5">
    <h1 class="mt-5 title  "> Lotus 2012 </h1>
     <div class="table-responsive my-5">
      
      <!-- The table component -->
       <Table :fields='fields' :kimiquotes ="kimiquotes"></Table>
     </div>
 
</div>
</template>

<script>
// Importing the table component
import Table from './components/Table.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    Table
  },
  data() {
    return {
      kimiquotes: [],
    };
  },
  created() {
          axios.get('https://kimiquotes.herokuapp.com/quotes/2012').then((response) => {
              //console.log(response);
              this.kimiquotes = response.data;
    });
  },
   setup(){
     
     const fields = [
      'id','quote','year'
    ]
    return{fields}
  },

}
</script>
