<template>
  <section>
    <Title title="项目经历" icon="icon-Blog" />
    <div v-for="(projectItem, projectIndex) in projectList" class="px-2 pb-1">
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
import { defineComponent, getCurrentInstance, reactive } from 'vue'
export default defineComponent({
  name: 'SoftwareExperience',
})
</script>

<script setup>
const proxy = getCurrentInstance()?.proxy

const projectList = reactive([
  {
    projectName: '智能应用平台定制化改造',
    cycle: 'TCL-中环材料 / 2025.02 - 至今',
    technologyStack: ['Nest.js', 'React', 'TypeScript', 'Docker'],
    projectBackground:
      '基于某开源智能应用平台，结合公司内部业务需求进行界面风格调整与功能改造，提升平台适用性与易用性。',
    duty: [
      '调整系统配色与交互样式，统一视觉体验；',
      '优化部分功能逻辑，增强权限控制粒度；',
      '对接后端服务，满足定制化配置与部署需求；',
    ],
  },
  {
    projectName: '炉炉互联系统',
    cycle: 'TCL-中环材料 / 2024.08 - 至今',
    technologyStack: ['Vue2', 'Webpack', 'Element UI', 'Vue-CLI'],
    projectBackground:
      '该系统聚焦异常工艺过程监控，通过异常数据预警、红线报警、自动推送等功能，实现炉台运行状态全面监控。同时引入炉台好坏自驱学习模型，助力降本增效。',
    duty: [
      '负责系统前端架构设计与页面开发，实现关键功能可视化呈现；',
      '推动前后端联调与数据交互设计，确保数据流转高效稳定；',
      '负责项目进度管理、需求拆解与跨部门沟通，确保开发节奏与业务目标一致；',
    ],
  },
  {
    projectName: '视觉模型系统',
    cycle: 'TCL-中环材料 / 2024.08 - 2025.04',
    technologyStack: ['TypeScript', 'AutoImport', 'UnoCSS', 'Vite4'],
    projectBackground:
      '用于展示视觉模型图片与识别结果，提升模型数据可视化与交互效率。',
    duty: [
      '实现模型图片与识别数据的展示与交互功能；',
      '支持模型数据实时更新与历史数据回溯浏览；',
      '使用 ECharts 实现多图表可视化展示；',
      '优化页面性能，提升系统稳定性与加载速度；',
    ],
  },
  {
    projectName: '工艺 SOP 参数监控系统',
    cycle: 'TCL-中环材料 / 2024.08 - 2025.03',
    technologyStack: [
      'Vue3',
      'TypeScript',
      'AutoImport',
      'UnoCSS',
      'Vite4',
      'ECharts',
    ],
    projectBackground:
      '实现工艺参数的实时监控、预警与可视化，辅助工艺人员进行过程管控。',
    duty: [
      '使用 ECharts 实现多图表可视化展示；',
      '集成实时推送功能，确保数据时效性与准确性；',
    ],
  },
  // {
  //   projectName: 'FDC 系统前端设计开发',
  //   cycle: 'TCL-中环材料 / 2024.06 - 2024.11',
  //   technologyStack: ['Vue3', 'TypeScript', 'AutoImport', 'UnoCSS', 'Vite4'],
  //   projectBackground:
  //     '面向参数采集与过程控制的前端系统，聚焦数据可视化与性能优化。',
  //   duty: [
  //     '主导系统前端架构设计与技术栈升级；',
  //     '推行组件化开发、路由懒加载与代码分割；',
  //     '开发参数配置、监控展示等核心模块；',
  //   ],
  // },
  {
    projectName: 'PMS 系统前端设计开发',
    cycle: 'TCL-中环材料 / 2024.01 - 至今',
    technologyStack: ['Vue2', 'Webpack', 'UnoCSS', 'Vue3', 'Vant UI', 'Uniapp'],
    projectBackground: '涵盖 PC + PDA 双端系统，提升生产执行流程管理效率。',
    duty: [
      '负责 PC 与 PDA 端前端开发，设计统一交互体验；',
      '开发串口监听组件，实现设备数据采集；',
      '优化前后端联调机制，提升系统响应与同步速度；',
    ],
  },
  {
    projectName: '环晔 MES 系统',
    cycle: 'TCL-中环材料 / 2023.08 - 2024.01',
    technologyStack: ['Vue2', 'Element UI'],
    projectBackground:
      '推动清洗工序、料签打印等产线业务线上化，提升产线透明度与管理效率。',
    duty: [
      '负责 PC 端界面整体设计与实现，提升用户操作体验；',
      '与后端联调接口，确保数据交互准确高效；',
      '现场对接业务需求，测试系统',
      '实现 56 项功能模块，包括打签、破碎、封托等工序环节；',
    ],
  },
  // 以下为你上一家公司（信永中和）项目 ↓↓↓
  {
    projectName: '智能合并报表及附注审核工具',
    cycle: '信永中和 / 2023.03 - 2023.08',
    technologyStack: ['Vue3', 'Vite4', 'D3', 'TypeScript', 'Pinia', 'VueUse'],
    projectBackground:
      '自动化处理合并报表及附注，降低人工投入并提升数据质量，实现工具产品化。',
    duty: [
      '基于 D3 绘制流程图，提升流程可视化表达；',
      '开发用户指引与页内 tab 组件（keep-alive 实现）；',
      '负责模块划分、路由设计、产品对接与 code review；',
    ],
  },
  {
    projectName: 'SW-GPT 内网智能问答服务',
    cycle: '信永中和 / 2023.05 - 2023.06',
    technologyStack: ['Vue3', 'Ping++', 'ChatGPT'],
    projectBackground:
      '基于 ChatGPT API 构建的内网定制化问答系统，提升内部知识获取效率。',
    duty: [
      '调研并二次开发 chatgpt-web-share 项目；',
      '集成内网登录系统，实现用户权限管理；',
      '接入 Ping++ 实现计费功能模块；',
    ],
  },
  {
    projectName: '银行贷款分析系统',
    cycle: '信永中和 / 2023.02 - 2023.03',
    technologyStack: ['Vue3', 'Element Plus', 'Socket.io', 'Nest.js'],
    projectBackground: '提供多银行年度数据上传与分析，输出分析报告与图表展示。',
    duty: [
      '实现大文件切片上传与实时进度推送（Socket.io）；',
      '使用 Nest.js 编写中间件服务并对接第三方分析平台；',
      '负责模块划分、接口联调与业务对接；',
    ],
  },
  {
    projectName: 'H-GZ-F 数据分析平台',
    cycle: '信永中和 / 2022.08 - 2022.12',
    technologyStack: ['React', 'ECharts', 'em'],
    projectBackground:
      '基于第三方分析产品二次开发的数据展示平台，支持大屏适配与图表展示。',
    duty: [
      '实现 em 单位的大屏适配方案；',
      '重构侧边栏与图表组件；',
      '负责任务分配、进度把控与业务联动；',
    ],
  },
  // {
  //   projectName: '流程挖掘系统',
  //   cycle: '信永中和 / 2020.12 - 2021.02',
  //   technologyStack: ['Vue2', 'Element', 'ECharts', 'D3', 'Vue CLI'],
  //   projectBackground:
  //     '用于流程分析与图表呈现的数据挖掘工具，支持自定义图表配置展示。',
  //   duty: [
  //     '负责项目搭建、路由设计与拖拽上传模块开发；',
  //     '封装基于 vue-grid-layout 的自适应画布；',
  //     '设计并实现图表配置交互方案，实现图表类型动态切换与数据绑定；',
  //   ],
  // },
])
</script>
