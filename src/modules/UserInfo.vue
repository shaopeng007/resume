<template>
  <section>
    <!-- class="sm:flex justify-between flex-row-reverse" -->
    <div >
      <!-- <img class="float-none lg:float-right
      w-24 h-24 
      sm:w-28 sm:h-28
      md:w-32 md:h-32
      lg:w-36 lg:h-36
      
      m-auto mb-10
      lg:m-6 lg:mb-0

      rounded-full " :src="avatar" alt="avatar" /> -->
      <div>
        <h3 class="sm:text-left ">韩少鹏</h3>
        <ul>
          <li v-for="userInfoItem in userInfo" class="flex items-center mb-1">
            <IconFont :icon="userInfoItem.icon" class="text-lg "/>
            <span class="block ml-2">{{ userInfoItem.text }}</span>
          </li>
        </ul>
      </div>
    </div>

  </section>
</template>

<script setup>
import { reactive } from 'vue';

 
// import avatar from '/avatar.pic.jpg'
const userInfo = reactive([
  {
    icon: 'icon-shengri--',
    text: '1993 / 男'
  },
  {
    icon: 'icon--xuexiao',
    text: '本科统招 / 内蒙古大学 / 化学工程（2012-2016）'
  },
  {
    icon: 'icon-browser',
    text: '在线简历：https://ggupzhh.github.io/resume/'
  },
  {
    icon: 'icon-WEBqianduan',
    text: '期望职位：Java后端开发工程师 / 技术经理'
  },
  {
    icon: 'icon-shouji3',
    text: '手机：158xxxxxxxx'
  },
  {
    icon: 'icon-weixin1',
    text: '微信：xxxxx'
  },
  {
    icon: 'icon-youxiang',
    text: '邮箱：xxxx@gmail.com'
  },
])
</script>
