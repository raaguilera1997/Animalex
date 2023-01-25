<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-lg">
      <q-intersection
        v-for="index in list.length"
        :key="index"
        transition="scale"
        class="col-6"
      >
        <q-card class="my-card q-pa-md " style="width:100%;height: 40vh " @click="router.push({path:'category'})">
          <q-img v-if="index==1" src="~assets/birds.jpg" style="width: 100%;height: 70%"/>
          <q-img v-if="index==2" src="~assets/fish.jpg" style="width: 100%;height: 70%"/>
          <q-img v-if="index==3" src="~assets/dogs.jpg" style="width: 100%;height: 70%"/>
          <q-img v-if="index==4" src="~assets/roters.jpg" style="width: 100%;height: 70%"/>
          <q-card-section>
            <div class="text-h6" >{{ list[index-1].title }}</div>
            <div class="text-caption  text-grey-7" style="font-weight: bold">
              {{ list[index-1].descripcion }}
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, computed, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const list = ref(
    [
      {
        id: 1,
        title: 'Aves',
        descripcion: 'Accesorios,aves de diferentes tipos, comida y mucho más....'
      },
      {
        id: 2,
        title: 'Peces',
        descripcion: 'Accesorios,peces,peceras,comidas y mucho más....'
      },
      {
        id: 3,
        title: 'Perros',
        descripcion: 'Accesorios,comidas,juguetes y mucho más....'
      },
      {
        id: 4,
        title: 'Roedores',
        descripcion: 'Accesorios,animales,comidas, y mucho más....'
      }

    ]
  )
  function convertString(select) {
    let selected = {...select}
    let result = {}
    Object.keys(selected).map(x => {
      if (typeof selected[x] === 'object') {
        result[x] = JSON.stringify(selected[x])
      } else {
        result[x] = selected[x]
      }
    })
    debugger
    return result
  }



</script>
<style lang="scss" scoped>
  .example-item{
    height: 40%;
    width: 40%;
  }


  .my-card:hover{
    /*transform: translateZ(50px)scale(0.95);*/

    margin-top: -5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .my-card{
    /*transform: translateZ(50px)scale(0.95);*/
    transition-duration: 0.5s
  }
</style>
