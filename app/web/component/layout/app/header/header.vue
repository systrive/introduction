<template>
    <header class="header">
        <Menu ref="menu" mode="horizontal" :theme="theme1" @on-select="menuSelect">
            <menu-item class="logo" name="/">
                <div>
                    LOGO
                </div>
            </menu-item>
            <div class="menu">
                <menu-item name="/list">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </menu-item>
                <menu-item name="/strategy">
                    <Icon type="ios-paper"></Icon>
                    参谋分析
                </menu-item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <menu-item name="3-1">新增和启动</menu-item>
                    <menu-item name="3-2">活跃分析</menu-item>
                    <menu-item name="3-3">时段分析</menu-item>
                </Submenu>
                <menu-item name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </menu-item>
                <Select v-model="language" style="width:100px">
                    <Option v-for="item in languages" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </Menu>
    </header>
</template>
<script type="text/babel">
    import { Button, Table, Menu, MenuItem, Icon, Submenu, MenuGroup, Select, Option } from 'iview';
import { log } from 'util';
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
        },
        mounted () {
            this.update()
        },
        methods: {
            menuSelect (e) {
                this.$router.push(e)
            },
            update () {
                let activeMenu = this.$route.path
                this.$nextTick(() => {
                    console.log(activeMenu)
                    this.$refs.menu.updateActiveName(activeMenu || '/')
                })
            }
        }
    }
</script>

<style lang="less">
  @import "./header.less";
</style>
