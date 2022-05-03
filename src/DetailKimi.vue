<template>
<div class="container text-center  mt-5 mb-5 ">
     <div class="container">
         <div class="row">  

             <div class="col-md-4 offset-md-4">
                    <div class="card text-white teamradio">
                        <div class="d-flex flex-column tapadera">
                                    <h3 class="textradio">"{{ kimiquotes.quote }}"</h3>
                        <div class= "">

                        </div>

                        </div>   
                    </div>
               </div>
         </div>
     </div>
</div>
</template>

<script>
import axios from 'axios'
export default ({

  data() {
    return {
      kimiquotes: [],
    };
  },
  created() {
//hola
          axios.get('https://kimiquotes.herokuapp.com/quote/'+this.$route.params.id).then((response) => {
              //console.log(response);
              this.kimiquotes = response.data;
    });
  },
})
</script>
