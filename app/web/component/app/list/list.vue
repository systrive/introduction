<template lang="html">
    <div class="list-container">
        <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Row class="list" v-for="(item, index) in data" :key="index">
            <Col span="4">
                <div class="image-wrap">
                    <img
                        class="image"
                        alt="condition"
                        src="./img/detection-1.png"
                    />
                    <br />
                    <span>{{ item.condition }}</span>
                </div>
            </Col>
            <Col class="col-content" span="16">
                <span :class="[item.validate ? 'success-status' : 'fail-status']">
                    <Icon :type="item.validate ? 'checkmark-circled' : 'close-circled'" />
                    <span class="item-status-text">
                      {{ item.validate ? '符合文案' : '不符合文案' }}
                    </span>
                </span>
                <div class="item-description">
                    {{ item.description }}
                </div>
            </Col>
            <Col span="4">
                <div class="operation-wrap" style={styles.operationWrap}>
                    <a href="#" target="_blank">
                      {{ item.operation }}
                    </a>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import { Steps, Step, Row, Col, Icon } from 'iview'
export default {
    data () {
        return {
            data: [
                {
                    condition: '校验条件',
                    validate: true,
                    url: './img/detection-1.png',
                    operation: '查看',
                    description:
                      '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
                  },
                  {
                    condition: '校验条件',
                    validate: false,
                    url: './img/detection-2.png',
                    operation: '解决方式链接',
                    description:
                      '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
                  },
                  {
                    condition: '身份认证',
                    validate: true,
                    url: './img/detection-3.png',
                    operation: '查看',
                    description:
                      '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
                  },
                  {
                    condition: '非卖家',
                    validate: false,
                    url: './img/detection-2.png',
                    operation: '解决方式链接',
                    description:
                      '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
                  },
                  {
                    condition: '18岁以上',
                    validate: false,
                    url: './img/detection-2.png',
                    operation: '解决方式链接',
                    description:
                      '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
                  },
            ]
        }
    },
    components: {
        Steps,
        Step,
        Row,
        Col,
        Icon
    }
}
</script>

<style lang="less">
    .list-container {
        padding: 50px 0 0 100px;
        .ivu-steps-horizontal {
            display: flex;
        }
        .list {
            background-color: rgb(249, 249, 249);
            margin-top: 32px;
            padding: 20px 40px;
        }
        .image-wrap {
            text-align: center;
            .image {
                width: 64px;
                height: 64px;
                border-radius: 50px;
                margin-bottom: 12px;
            }
        }
        .col-content {
            padding: 10px 50px 0px;
        }
        .success-status {
            color: #1be25c;
        }
        .fail-status {
            color: #f33;
            font-size: 16px;
        }
        .item-status-text {
            margin-left: 10px;
        }
        .item-description {
            color: #666;
            margin-top: 20px;
            max-width: 309px;
        }
        .operation-wrap {
            margin-top: 40px;
            text-align: center;
        }
    }
</style>
