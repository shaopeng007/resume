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
      <div>
        <strong>项目描述：</strong>
        <span>{{ projectItem.projectBackground }}</span>
      </div>
      <div>
        <strong>技术栈：</strong>
        <span>{{ projectItem.technologyStack.join('、') }}</span>
      </div>
      <ul class="mx-3">
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
    projectBackground: '针对合并报表及附注的自动化处理校验，大幅降低项目组工时投入，提高数据质量，以效率工具为基础，将其产品化，功能覆盖合并报表及附注处理重要环节，并实现项目组协同工作；',
    duty: [
      '基于D3绘制阶段流程图；',
      '负责开发用户指引组件；',
      '基于keep-alive的页内tab组件；',
      '披露表相关功能模块开发；',
      '负责产品对接，项目排期，模块划分，路由设计，code-review；',
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
    projectBackground: '基于ChatGPT-API实现定制化内网ChatGPT服务；',
    duty: [
      '调研chatgpt-web-share项目，本地部署二次开发',
      '对接内网登录，实现用户管理；',
      '基于pingpp开发付费功能',
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
    projectBackground: '对不同银行的不同年度下的各个模板进行数据上传和数据分析，展示数据分析结果和报告；',
    duty: [
      '基于slice进行大文件切片上传；',
      '基于Socket-io实现长链接，实时更新上传进度和分析进度；',
      '基于Nest.js框架开发中间件，对接第三方数据分析系统，整理汇总数据并给前端提供API；',
      '负责整个项目业务对接，路由设计，模块划分等工作；',
    ]
  },
  {
    projectName: 'h-gz-f',
    cycle: '202208-202212',
    technologyStack: [
      'React',
      'em',
      'Echatrs',
    ],
    projectBackground: '根据已有数据进行展示数据分析结果，依赖第三方数据分析产品，二次开发展示；',
    duty: [
      '大屏适配em选型，并落地实现；',
      '二次开发相关业务组件，重构侧边栏组件；',
      '负责业务对接、模块划分、任务分配、进度把控等工作；',
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
    projectBackground: '流程挖掘系统是一套基于指定数据，分析数据的产品，根据用户上传的数据，分析数据展示数据流程和各个流程信息，并且可以指定不同数据的展示方式(各种图表展示)；',
    duty: [
      '负责业务对接、项目搭建、路由设计；',
      '负责开发文件拖拽上传和数据列设置模块；',
      '负责开发可拖拽自适应画布，基于vue-grid-layout二次封装实现自定义拖拽画布；',
      '配合产品、后端同事设计图表配置交互方案，开发图表配置功能，通过选择图表类型，配置图表属性和数据，进行数据展示；',
    ]
  },
])
</script>
