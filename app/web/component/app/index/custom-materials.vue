<template>
    <div class="custom-materials">
        <div class="wrapper-container">
            <div class="wrapper">
                <div class="feature">
                    <div class="title">物料自定义接入</div>
                    <div class="line">
                        <div class="line-header"></div>
                    </div>
                    <div class="desc">
                        官方提供海量的物料，覆盖多种业务场景，也支持物料自定义接入，定制物料源
                    </div>
                </div>
                <div class="cover">
                    <img
                    class="cover-image"
                    alt="特点图"
                    src="./img/custom-materials-cover.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.custom-materials {
    .wrapper-container {
        background-color: #f6f6f6;
        background-image: url('./img/custom-materials-container.png');
        background-size: 'cover',
    }
    .wrapper {
        position: relative;
        height: 500px;
        overflow: hidden;
        max-width: 1190px;
        margin: 0 auto;
    }
    .feature {
        padding-top: 160px;
        padding-bottom: 160px;
        padding-left: 30px;
        background-image: url('./img/custom-materials-feature.png');
        background-repeat: no-repeat;
        background-position: 10px 120px;
        z-index: 2;
        top: 0;
        right: 70%;
        position: absolute;
    }
    .title {
        color: #fff;
        font-size: 36px;
        text-shadow: 0 0 3px rgba(0,0,0,0.3);
    }
    .line {
        height: 2px;
        width: 140px;
        background-color: rgba(255,255,255,0.4);
        margin: 20px 0;
    }
    .line-header {
        height: 2px;
        width: 33px;
        background-color: #fff;
    }
    .desc {
        font-size: 16px;
        color: #fff;
        line-height: 26px;
        max-width: 280px;
        text-shadow: 0 0 1px rgba(0,0,0,0.3);
    }
    .cover {
        position: absolute;
        left: 40%;
        bottom: 0;
        z-index: 1;
    }
    .cover-image {
        max-height: 430px;
        display: block;
    }
}
</style>
