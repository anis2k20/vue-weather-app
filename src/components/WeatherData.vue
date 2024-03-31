<script setup>
import axios from 'axios'
import { Icon } from '@iconify/vue';
import {ref} from 'vue'
const data = ref(null)
const tempC = ref(null)
const tempF = ref(null)
const localTime = ref(null)
const isDay = ref(null)
const condition = ref(null)
const conditionIcon = ref(null)

  try{
      const res = await axios.get('https://api.weatherapi.com/v1/current.json?key=9fcd76cb0e8d442e859110234243103&q=Dhaka')
      data.value = await res.data
    }
  catch (e){
      console.error(e)
    }

tempC.value = data.value.current.temp_c
tempF.value = data.value.current.temp_f
localTime.value = data.value.location.localtime
isDay.value = data.value.current.is_day
condition.value = data.value.current.condition.text
conditionIcon.value = data.value.current.condition.icon

</script>

<template>
  <div class="bg-gray-100 h-screen w-full flex flex-col flex-wrap justify-center items-center gap-10 sm:gap-8">
<!--top -->
    <div class="">
      <h1 class="text-3xl sm:7xl font-bold font-poppins bg-white shadow-md sm:px-8 p-4 rounded text-primary">Vue Weather App </h1>
    </div>

<!--middle -->
    <div class="flex flex-wrap justify-center gap-4">
<!--  Left -->
      <div class="p-6 w-80 rounded-lg bg-white space-y-6 px-8 shadow-lg">
        <h4 class="font-semibold text-center ">Dhaka, Bangladesh</h4>

        <div class="flex justify-center gap-3 items-center">
          <h2 class="text-7xl font-bold text-primary">{{tempC}}°</h2>
          <div class="space-y-2">
            <h4 class="font-semibold text-primary bg-primary/20 px-2 rounded cursor-pointer">C</h4>
            <h4 class="font-semibold px-2 cursor-pointer text-primary/30  rounded">F</h4>
          </div>
        </div>

        <div class="flex justify-center content-stretch items-center rounded gap-2 bg-primary/10 p-2">
          <Icon icon="noto:sun-behind-small-cloud" class="text-4xl" />
          <span class="text-xl">{{condition}}</span>
        </div>

      </div>
<!--  Right -->
      <div class="p-6 bg-white  shadow-lg rounded-lg w-80 flex flex-col justify-center items-center">
        <h2 class="text-7xl font-bold text-primary">09:23</h2>
        <span class="text-2xl font-semibold">03-11-2024</span>
      </div>

    </div>

<!--bottom -->
    <div class="flex flex-wrap justify-center gap-4">
      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
       <div class="bg-white p-2 rounded-b-lg">
         <div class="flex justify-center items-center gap-2">
           <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
           <span class="font-semibold text-xl">{{tempC}}</span>
         </div>
         <h6 class="text-xs font-medium">Mostly cloudy</h6>
       </div>

      </div>

      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
        <div class="bg-white p-2 rounded-b-lg">
          <div class="flex justify-center items-center gap-2">
            <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
            <span class="font-semibold text-xl">{{tempC}}</span>
          </div>
          <h6 class="text-xs font-medium">Mostly cloudy</h6>
        </div>

      </div>

      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
        <div class="bg-white p-2 rounded-b-lg">
          <div class="flex justify-center items-center gap-2">
            <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
            <span class="font-semibold text-xl">{{tempC}}</span>
          </div>
          <h6 class="text-xs font-medium">Mostly cloudy</h6>
        </div>

      </div>

      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
        <div class="bg-white p-2 rounded-b-lg">
          <div class="flex justify-center items-center gap-2">
            <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
            <span class="font-semibold text-xl">{{tempC}}</span>
          </div>
          <h6 class="text-xs font-medium">Mostly cloudy</h6>
        </div>

      </div>

      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
        <div class="bg-white p-2 rounded-b-lg">
          <div class="flex justify-center items-center gap-2">
            <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
            <span class="font-semibold text-xl">{{tempC}}</span>
          </div>
          <h6 class="text-xs font-medium">Mostly cloudy</h6>
        </div>

      </div>

      <div class="w-24 text-center shadow-lg border border-black/10 rounded-lg">
        <div class="bg-primary p-1 text-center rounded-t-lg text-white">
          <span>SAT. 20</span>
        </div>
        <div class="bg-white p-2 rounded-b-lg">
          <div class="flex justify-center items-center gap-2">
            <Icon icon="noto:sun-behind-small-cloud" class="text-xl"></Icon>
            <span class="font-semibold text-xl">{{tempC}}</span>
          </div>
          <h6 class="text-xs font-medium">Mostly cloudy</h6>
        </div>

      </div>
    </div>

  </div>
</template>