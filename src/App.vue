<script setup>
import UserInfo from './modules/UserInfo.vue'
import Skills from './modules/Skills.vue'
import SoftwareExperience from './modules/SoftwareExperience.vue'
import WorkExperience from './modules/WorkExperience.vue'
import Summary from './modules/Summary.vue'
import { getCurrentInstance } from 'vue'

const proxy = getCurrentInstance()
console.log(proxy)
</script>

<template>
  <div>
    <UserInfo />
    <Skills />
    <WorkExperience />
    <SoftwareExperience />
    <Summary />
  </div>
</template>
