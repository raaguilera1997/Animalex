<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-x-xl ">
      <q-intersection
        v-for="index in list.length"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm my-card  q-pa-lg" style="width:50vh;height: 50vh ">
          <q-img v-if="index==1" src="~assets/aves.jpg" style="width: 100%;height: 60%"/>
          <q-img v-if="index==2" src="~assets/peces.jpg" style="width: 100%;height: 60%;margin-top: 22px"/>
          <q-img v-if="index==3" src="~assets/perros.jpg" style="width: 100%;height: 60%"/>
          <q-img v-if="index==4" src="~assets/roedores.jpg" style="width: 100%;height: 60%"/>
          <q-card-section>
            <div class="text-h6" :class="index==1?'q-pt-md':''">{{ list[index-1].title }}</div>
            <div class="text-caption text-justify text-grey">
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
