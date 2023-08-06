<template>
  <section>
    <Title title="工作经历" icon="icon-shishizhongxin"/>
    <div
      v-for="(companyItem, companyIndex) in companyList"
      class="pb-1"
    >
    <p class="flex justify-between">
      <strong class="text-base">{{ companyItem.companyName }}</strong>
      <strong>{{ companyItem.cycle }}</strong>
    </p>
    <div class="px-2">
      <p>
        <span class="font-medium">部门：</span>
        <span>{{ companyItem.branch }}</span>
      </p>
      <p>
        <span class="font-medium">职称：</span>
        <span>{{ companyItem.title }}</span>
      </p>
      <ul class="mx-3">
        <li v-for="routineWorkItem in companyItem.routineWork">
          {{ routineWorkItem }}
        </li>
      </ul>
    </div>
    </div>
  </section>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
reactive
} from 'vue'
export default defineComponent({
  name: 'WorkExperience'
})
</script>

<script setup>
const proxy = getCurrentInstance()?.proxy

const companyList = reactive([
  {
    companyName: '信永中和',
    cycle: '2018年7月-至今',
    branch: '大数据技术部',
    title: '项目经理',
    routineWork: [
      '负责制定前端规范，封装公共组件，项目日常开发，code-review；',
      '负责需求对接、模块划分、开发排期、进度掌控、输出架构方案、推动项目进程等项目管理工作；',
      '调研新技术，与时俱进，并落地实现；',
      '开发脚手架，构建VSCode插件，维护脚手架模板，提高开发效率；',
      '辅导协助新人完成开发任务；',
    ],
  },
  // {
  //   companyName: '信永中和',
  //   cycle: '2018年7月-2019年7月',
  //   branch: '大数据技术部',
  //   title: '前端开发实习生',
  //   routineWork: [
  //     '项目日常开发，组件封装；',
  //     '大数据官网维护；',
  //   ],
  // },
])
</script>
