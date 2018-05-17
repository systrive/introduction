<template>
    <div class="strategy-container">
        <Row class="container-block">
            <div class="content-title">项目进度</div>
            <Col span="6">
                <circle-view :percent="10">
                    <span class="demo-Circle-inner" style="font-size:24px">10%</span>
                </circle-view>
            </Col>
            <Col span="6">
                <circle-view :percent="80">
                    <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                </circle-view>
            </Col>
            <Col span="6">
                <circle-view :percent="100" stroke-color="#5cb85c">
                    <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                </circle-view>
            </Col>
            <Col span="6">
                <circle-view :percent="35" stroke-color="#ff5500">
                    <span class="demo-Circle-inner">
                        <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
                    </span>
                </circle-view>
            </Col>
        </Row>
        <Row class="container-block">
            <div class="content-title">活跃用户</div>
            <Col span="12">
                <Progress :percent="25"></Progress>
                <Progress :percent="45" status="active"></Progress>
                <Progress :percent="65" status="wrong"></Progress>
                <Progress :percent="100"></Progress>
                <Progress :percent="25" hide-info></Progress>
            </Col>
            <Col span="12">
            </Col>
        </Row>
    </div>
</template>
<script>
    import { Circle, Icon, Row, Col, Progress } from 'iview'
    export default {
        components: {
            CircleView: Circle,
            Icon,
            Row,
            Col,
            Progress
        },
        data () {
            return {
                activeUser: [
                    { id: 1, page: '微信', amount: '2,80,489', percent: 90 },
                    { id: 2, page: '微博', amount: '1,98,956', percent: 70 },
                    { id: 3, page: '天天快报', amount: '1,90,257', percent: 60 },
                    { id: 4, page: '今日头条', amount: '1,80,745', percent: 50 },
                    { id: 5, page: '一点资讯', amount: '1,24,693', percent: 40 },
                    { id: 6, page: '快手', amount: '8,489', percent: 35 },
                    { id: 7, page: '火山小视频', amount: '5,233', percent: 30 },
                    { id: 8, page: '西瓜视频', amount: '1,688', percent: 20 },
                ]
            }
        }
    }
</script>
<style lang="less">
    .strategy-container {
        padding: 50px 0 0 100px;
        .container-block {
            background-color: #fafafa;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .content-title {
            height: 16px;
            line-height: 16px;
            font-size: 16px;
            color: rgb(51, 51, 51);
            font-weight: bold;
            margin: 0px 0px 20px;
            padding: 0px;
        }
        .circle-title {
            text-aligin: center;
        }
    }
</style>
