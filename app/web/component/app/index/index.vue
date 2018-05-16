<template>
    <div class="index">
        <div className="home-page">
            <overview></overview>
            <product-feature :feature="productFeature1"></product-feature>
            <visual-assembly></visual-assembly>
            <product-feature :feature="productFeature2"></product-feature>
            <custom-materials></custom-materials>
            <product-feature :feature="productFeature3"></product-feature>
            <!-- <layout-footer></layout-footer> -->
        </div>
    </div>
</template>
<script type="text/babel">
import Overview from './overview'
import ProductFeature from './product-feature'
import VisualAssembly from './visual-assembly'
import CustomMaterials from './custom-materials'
import LayoutFooter from '../../layout/app/footer/footer'
export default {
    components: {
        Overview,
        ProductFeature,
        VisualAssembly,
        CustomMaterials,
        LayoutFooter
    },
    data () {
        return {
            productFeature1: {
                title: '模板自定义创建',
                desc: '提供多种垂直领域模板，快速创建项目，支持风格切换，满足个性化需求',
                coverImg: './img/product-feature1.png',
                style: {
                    width: 1816 / 2 + 'px',
                    height: 878 / 2 + 'px'
                }
            },
            productFeature2: {
                title: '布局自定义生成',
                desc: '模板内置布局，同时提供交互式的定制功能生产专属布局',
                coverImg: './img/product-feature2.png',
                style: {
                    width: 1240 / 2 + 'px',
                    height: 902 / 2 + 'px'
                }
            },
            productFeature3: {
                title: '项目仪表盘插件化',
                desc: '丰富多样的项目信息面板，页面信息，路由信息依赖管理等，配置专属的Iceworks界面',
                coverImg: './img/product-feature3.png',
                style: {
                    width: 1280 / 2 + 'px',
                    height: 860 / 2 + 'px'
                }
            }
        }
    }
};
</script>
<style lang="less">
    .home-page {
        background: #fff;
        overflow: hidden;
    }
</style>
