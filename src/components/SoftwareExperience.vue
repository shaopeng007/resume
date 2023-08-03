<template>
  <section>
    <h2>项目经历</h2>
    <div
      v-for="(projectItem, projectIndex) in projectList"
      class="px-2 pb-1"
    >
      <p class="flex justify-between">
        <strong class="text-base">{{ projectItem.projectName }}</strong>
        <strong>{{ projectItem.cycle }}</strong>
      </p>
      <p>
        <strong>技术栈：</strong>
        <span>{{ projectItem.technologyStack.join('、') }}</span>
      </p>
      <ul>
        <li v-for="dutyItem in projectItem.duty">
          {{ dutyItem }}
        </li>
      </ul>
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
  name: 'SoftwareExperience'
})
</script>

<script setup>
const proxy = getCurrentInstance()?.proxy

const projectList = reactive([
  {
    projectName: '智能合并报表及附注审核工具',
    cycle: '202303-202308',
    technologyStack: [
      'Vue3',
      'Vite4',
      'D3',
      'Typescript',
      'Pinia',
      'VueUse',
    ],
    projectBackground: '针对合并报表及附注的自动化处理校验，大幅降低项目组工时投入，提高数据质量，以效率工具为基础，将其产品化，功能覆盖合并报表及附注处理重要环节，并实现项目组协同工作',
    duty: [
      '基于D3绘制阶段流程图',
      '开发产品指引组件',
      '基于keep-alive的页内tab组件',
      '披露表相关模块开发',
      '产品对接，项目排期，模块划分，路由设计，code-review',
    ]
  },
  {
    projectName: 'SW-GPT服务 ',
    cycle: '202305-202306',
    technologyStack: [
      'Vue3',
      'pingpp',
      'ChatGPT',
    ],
    projectBackground: '私有化-付费chatgpt，根据ChatGPT-API实现定制化内网ChatGPT服务',
    duty: [
      '付费功能开发',
      '技术落地实现',
      '登录功能实现',
    ]
  },
  {
    projectName: '银行贷款分析系统',
    cycle: '202302-20203',
    technologyStack: [
      'Vue3',
      'Element-plus',
      'Socket-io',
      'Nest.js',
    ],
    projectBackground: '对银行不同年度的各个属性进行数据上传和数据分析，使用metabase进行数据分析，',
    duty: [
      '大文件切片上传',
      'socketio对接，实时更新上传进度和分析进度',
      'nest中间件开发，api开发',
      '对接metabase接口数据，数据处理',
    ]
  },
  {
    projectName: 'h-gz-f',
    cycle: '202208-202212',
    technologyStack: [
      'React',
      'em',
      'Metabase',
      'Echatrs',
    ],
    projectBackground: '说点啥',
    duty: [
      '大屏适配em选型，落地实现，业务开发',
      '模块划分，任务分配',
      '修改meatbase组件',
    ]
  },
  {
    projectName: '流程挖掘系统',
    cycle: '202012-202102',
    technologyStack: [
      'Vue2',
      'Element',
      'Echarts',
      'D3',
      'Vue-cli',
    ],
    projectBackground: '是一套基于指定数据，分析数据的产品，根据用户上传的数据，分析数据展示数据流程和各个流程信息，并且可以指定不同数据的展示方式(各种图表展示)',
    duty: [
      '项目搭建，路由设计，业务对接',
      '文件上传和数据设置模块，数据设置：指定列的数据类型 和 表格数据修改 设置数据流程',
      '可拖拽自适应画布，基于 vue-grid-layout 二次开发实现自定义拖拽画布',
      '图表配置展示，通过选择图表类型，配置图表属性和数据，数据筛选和排序',
    ]
  },
])
</script>
