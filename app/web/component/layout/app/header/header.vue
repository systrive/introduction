<template>
    <header class="header">
        <Menu mode="horizontal" :theme="theme1">
            <div class="logo">
                LOGO
            </div>
            <div class="menu">
                <MenuItem name="1">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </Submenu>
                <MenuItem name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </MenuItem>
                <Select v-model="language" style="width:100px">
                    <Option v-for="item in languages" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </Menu>
    </header>
</template>
<script type="text/babel">
    import { Button, Table, Menu, MenuItem, Icon, Submenu, MenuGroup, Select, Option } from 'iview';
    export default{
      data () {
          return {
              theme1: 'light',
              languages: [
                  {
                      value: 'zh',
                      label: '中文'
                  },
                  {
                      value: 'en',
                      label: 'English'
                  }
              ],
              language: 'zh'
          }
      },
      components: {
          Button,
          Table,
          Menu,
          MenuItem,
          Icon,
          Submenu,
          MenuGroup,
          Select,
          Option
      }
    }
</script>

<style>
  /* @import "./header.less"; */
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    margin-left: 200px;
    font-size: 40px;
}

.menu {
    float: right;
    margin-right: 100px;
    font-size: 16px;
}

.ivu-menu-horizontal {
    height: 80px !important;
    line-height: 80px !important;
}
.ivu-menu-item {
    font-size: 16px;
}
</style>
