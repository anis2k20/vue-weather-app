<script setup>
import axios from 'axios'
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
  <pre>{{data}}</pre>
  <h3>{{tempC}}</h3>

</template>