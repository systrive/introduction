<template>
    <div class="product-feature">
        <div class="wrapper-container">
            <div class="wrapper">
                <div class="feature">
                    <div class="title">{{ feature.title }}</div>
                    <div class="line">
                        <div class="line-header"></div>
                    </div>
                    <div class="desc">{{ feature.desc }}</div>
                </div>
                <div class="hover">
                    <img
                        class="cover-image"
                        alt="特点图"
                        :src="feature.coverImg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            feature: {}
        }
    }
</script>
<style scoped lang="less">
.wrapper-container {
    background-color: #f6f6f6;
}
.wrapper {
    position: relative;
    background-color: #f6f6f6;
    height: 500px;
    max-width: 1190px;
    margin: 0 auto;
}
.feature {
    margin-left: 50%;
    margin-right: 10%;
    padding-top: 160px;
    padding-bottom: 160px;
    padding-left: 30px;
    background-image: url('./img/product-feature-background.png');
    background-repeat: no-repeat;
    background-position: 10px 120px;
}
.title {
    color: #3080FE;
    font-size: 36px;
}
.line {
    height: 2px;
    width: 140px;
    background-color: #fff;
    margin: 20px 0;
}
.line-header {
    height: 2px;
    width: 33px;
    background-color: #3080FE;
}
.desc {
    font-size: 16px;
    color: #6D7A82;
    max-width: 400px;
    line-height: 26px;
}
.hover {
    position: relative;
    transform: translateX(-40%) translateY(-100%);
}
.cover-image {
    max-height: 430px;
    display: block;
    background-image: url('./img/product-feature-cover.png');
    width: 908px;
    height: 439px;
}
</style>
