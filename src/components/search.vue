<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim.lazy="searchName"/>
      <button @click="searchAll">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapActions} from 'vuex'
  import  {SEARCH_NAME} from "@/store/mutations_names"
  export default {
    name: "search",
    computed:{
      ...mapState(["searchName"]),
      searchName:{
        get(){
          return this.$store.state.searchName
        },
        set(val){
          this.$store.commit(SEARCH_NAME,{searchName:val})
        }
      }
    },
    methods:{
      ...mapActions(["searchAll"])
    }
  }
</script>

<style scoped>

</style>
