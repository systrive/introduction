exports.ids=[3],exports.modules=Array(21).concat([function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},,,function(n,e){},,,,,,,function(n,e,t){n.exports=t.p+"img/custom-materials-cover.b235a0c5.png"},function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCAQMAAADZmpKrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExUReby/0dwTKwLq5QAAAACdFJOUxMAF3yMqgAAAJhJREFUKM/F0rERwyAQBMCTCRS6BEqRO7NK+1IogVCBhjen98wRMLYzE4hNJMHfwd3LrT8M7g3IoQqkkAEIdWCjGpWpg1qpSiWqUAvFV8HN90vPrgvYDC2UDWfoPuoIrYYaSqNKaBkVPwPm2t96fNG/1q/n+3zL2Vxm89N0Z7NXMkprSFCpKmmlr0aoJWrO0CY1TK3rX2QTX6Iiki+ByoNaAAAAAElFTkSuQmCC"},function(n,e,t){n.exports=t.p+"img/custom-materials-container.8932b523.png"},function(n,e,t){var i=t(21);(n.exports=t(5)(!0)).push([n.i,"\n.custom-materials .wrapper-container {\n  background-color: #f6f6f6;\n  background-image: url("+i(t(33))+");\n  background-size: 'cover';\n}\n.custom-materials .wrapper {\n  position: relative;\n  height: 500px;\n  overflow: hidden;\n  max-width: 1190px;\n  margin: 0 auto;\n}\n.custom-materials .feature {\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url("+i(t(32))+");\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n  z-index: 2;\n  top: 0;\n  right: 70%;\n  position: absolute;\n}\n.custom-materials .title {\n  color: #fff;\n  font-size: 36px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.custom-materials .line {\n  height: 2px;\n  width: 140px;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin: 20px 0;\n}\n.custom-materials .line-header {\n  height: 2px;\n  width: 33px;\n  background-color: #fff;\n}\n.custom-materials .desc {\n  font-size: 16px;\n  color: #fff;\n  line-height: 26px;\n  max-width: 280px;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n}\n.custom-materials .cover {\n  position: absolute;\n  left: 40%;\n  bottom: 0;\n  z-index: 1;\n}\n.custom-materials .cover-image {\n  max-height: 430px;\n  display: block;\n}\n","",{version:3,sources:["/Users/systrive/Desktop/systrive/introduction/app/web/component/app/index/custom-materials.vue"],names:[],mappings:";AAAA;EACE,0BAA0B;EAC1B,gDAA4D;EAC5D,yBAAyB;CAC1B;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,gDAA0D;EAC1D,6BAA6B;EAC7B,gCAAgC;EAChC,WAAW;EACX,OAAO;EACP,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,wCAAwC;CACzC;AACD;EACE,YAAY;EACZ,aAAa;EACb,2CAA2C;EAC3C,eAAe;CAChB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,wCAAwC;CACzC;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB",file:"custom-materials.vue",sourcesContent:[".custom-materials .wrapper-container {\n  background-color: #f6f6f6;\n  background-image: url('img/custom-materials-container.png');\n  background-size: 'cover';\n}\n.custom-materials .wrapper {\n  position: relative;\n  height: 500px;\n  overflow: hidden;\n  max-width: 1190px;\n  margin: 0 auto;\n}\n.custom-materials .feature {\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url('img/custom-materials-feature.png');\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n  z-index: 2;\n  top: 0;\n  right: 70%;\n  position: absolute;\n}\n.custom-materials .title {\n  color: #fff;\n  font-size: 36px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.custom-materials .line {\n  height: 2px;\n  width: 140px;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin: 20px 0;\n}\n.custom-materials .line-header {\n  height: 2px;\n  width: 33px;\n  background-color: #fff;\n}\n.custom-materials .desc {\n  font-size: 16px;\n  color: #fff;\n  line-height: 26px;\n  max-width: 280px;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n}\n.custom-materials .cover {\n  position: absolute;\n  left: 40%;\n  bottom: 0;\n  z-index: 1;\n}\n.custom-materials .cover-image {\n  max-height: 430px;\n  display: block;\n}\n"],sourceRoot:""}])},function(n,e,t){var i=t(34);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var A=t(4).default;n.exports.__inject__=function(n){A("218fc602",i,!1,n)}},function(n,e,t){n.exports=t.p+"img/visual-assembly-cover.52ab03e7.png"},function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCAQMAAADZmpKrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExUReby/0dwTKwLq5QAAAACdFJOUxMAF3yMqgAAAJhJREFUKM/F0rERwyAQBMCTCRS6BEqRO7NK+1IogVCBhjen98wRMLYzE4hNJMHfwd3LrT8M7g3IoQqkkAEIdWCjGpWpg1qpSiWqUAvFV8HN90vPrgvYDC2UDWfoPuoIrYYaSqNKaBkVPwPm2t96fNG/1q/n+3zL2Vxm89N0Z7NXMkprSFCpKmmlr0aoJWrO0CY1TK3rX2QTX6Iiki+ByoNaAAAAAElFTkSuQmCC"},function(n,e,t){n.exports=t.p+"img/visual-assembly-container.9de4306f.png"},function(n,e,t){var i=t(21);(n.exports=t(5)(!0)).push([n.i,"\n.visual-assembly .wrapper-container {\n  position: relative;\n  height: 500px;\n  background-color: #f6f6f6;\n  background-image: url("+i(t(38))+");\n  background-size: cover;\n}\n.visual-assembly .cover {\n  position: absolute;\n  left: 28%;\n  bottom: 0;\n  z-index: 1;\n  height: 546px;\n  margin-top: -46px;\n}\n.visual-assembly .cover-image {\n  max-height: 546px;\n  display: block;\n}\n.visual-assembly .wrapper {\n  position: relative;\n  height: 500px;\n  max-width: 1190px;\n  margin: 0 auto;\n  overflow-x: hidden;\n}\n.visual-assembly .feature {\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url("+i(t(37))+");\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n  z-index: 2;\n  top: 0;\n  right: 70%;\n  position: absolute;\n}\n.visual-assembly .title {\n  color: #fff;\n  font-size: 36px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.visual-assembly .line {\n  height: 2px;\n  width: 140px;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin: 20px 0;\n}\n.visual-assembly .line-header {\n  height: 2px;\n  width: 33px;\n  background-color: #fff;\n}\n.visual-assembly .desc {\n  font-size: 16px;\n  color: #fff;\n  max-width: 280px;\n  line-height: 26px;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n}\n","",{version:3,sources:["/Users/systrive/Desktop/systrive/introduction/app/web/component/app/index/visual-assembly.vue"],names:[],mappings:";AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,0BAA0B;EAC1B,gDAA2D;EAC3D,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,cAAc;EACd,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,gDAAyD;EACzD,6BAA6B;EAC7B,gCAAgC;EAChC,WAAW;EACX,OAAO;EACP,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,wCAAwC;CACzC;AACD;EACE,YAAY;EACZ,aAAa;EACb,2CAA2C;EAC3C,eAAe;CAChB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;CACzC",file:"visual-assembly.vue",sourcesContent:[".visual-assembly .wrapper-container {\n  position: relative;\n  height: 500px;\n  background-color: #f6f6f6;\n  background-image: url('img/visual-assembly-container.png');\n  background-size: cover;\n}\n.visual-assembly .cover {\n  position: absolute;\n  left: 28%;\n  bottom: 0;\n  z-index: 1;\n  height: 546px;\n  margin-top: -46px;\n}\n.visual-assembly .cover-image {\n  max-height: 546px;\n  display: block;\n}\n.visual-assembly .wrapper {\n  position: relative;\n  height: 500px;\n  max-width: 1190px;\n  margin: 0 auto;\n  overflow-x: hidden;\n}\n.visual-assembly .feature {\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url('img/visual-assembly-feature.png');\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n  z-index: 2;\n  top: 0;\n  right: 70%;\n  position: absolute;\n}\n.visual-assembly .title {\n  color: #fff;\n  font-size: 36px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.visual-assembly .line {\n  height: 2px;\n  width: 140px;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin: 20px 0;\n}\n.visual-assembly .line-header {\n  height: 2px;\n  width: 33px;\n  background-color: #fff;\n}\n.visual-assembly .desc {\n  font-size: 16px;\n  color: #fff;\n  max-width: 280px;\n  line-height: 26px;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n}\n"],sourceRoot:""}])},function(n,e,t){var i=t(39);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var A=t(4).default;n.exports.__inject__=function(n){A("4cd0d085",i,!1,n)}},function(n,e,t){n.exports=t.p+"img/product-feature-cover.dd0edf38.png"},function(n,e,t){var i=t(21);(n.exports=t(5)(!0)).push([n.i,"\n.wrapper-container[data-v-5f052c94] {\n  background-color: #f6f6f6;\n}\n.wrapper[data-v-5f052c94] {\n  position: relative;\n  background-color: #f6f6f6;\n  height: 500px;\n  max-width: 1190px;\n  margin: 0 auto;\n}\n.feature[data-v-5f052c94] {\n  margin-left: 50%;\n  margin-right: 10%;\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url(https://img.alicdn.com/tfs/TB1fFH5pAyWBuNjy0FpXXassXXa-66-66.png);\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n}\n.title[data-v-5f052c94] {\n  color: #3080FE;\n  font-size: 36px;\n}\n.line[data-v-5f052c94] {\n  height: 2px;\n  width: 140px;\n  background-color: #fff;\n  margin: 20px 0;\n}\n.line-header[data-v-5f052c94] {\n  height: 2px;\n  width: 33px;\n  background-color: #3080FE;\n}\n.desc[data-v-5f052c94] {\n  font-size: 16px;\n  color: #6D7A82;\n  max-width: 400px;\n  line-height: 26px;\n}\n.hover[data-v-5f052c94] {\n  position: relative;\n  -webkit-transform: translateX(-40%) translateY(-100%);\n          transform: translateX(-40%) translateY(-100%);\n}\n.cover-image[data-v-5f052c94] {\n  max-height: 430px;\n  display: block;\n  background-image: url("+i(t(41))+");\n  width: 908px;\n  height: 439px;\n}\n","",{version:3,sources:["/Users/systrive/Desktop/systrive/introduction/app/web/component/app/index/product-feature.vue"],names:[],mappings:";AAAA;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,cAAc;EACd,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,wFAAwF;EACxF,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,sDAA8C;UAA9C,8CAA8C;CAC/C;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,gDAAuD;EACvD,aAAa;EACb,cAAc;CACf",file:"product-feature.vue",sourcesContent:[".wrapper-container {\n  background-color: #f6f6f6;\n}\n.wrapper {\n  position: relative;\n  background-color: #f6f6f6;\n  height: 500px;\n  max-width: 1190px;\n  margin: 0 auto;\n}\n.feature {\n  margin-left: 50%;\n  margin-right: 10%;\n  padding-top: 160px;\n  padding-bottom: 160px;\n  padding-left: 30px;\n  background-image: url(https://img.alicdn.com/tfs/TB1fFH5pAyWBuNjy0FpXXassXXa-66-66.png);\n  background-repeat: no-repeat;\n  background-position: 10px 120px;\n}\n.title {\n  color: #3080FE;\n  font-size: 36px;\n}\n.line {\n  height: 2px;\n  width: 140px;\n  background-color: #fff;\n  margin: 20px 0;\n}\n.line-header {\n  height: 2px;\n  width: 33px;\n  background-color: #3080FE;\n}\n.desc {\n  font-size: 16px;\n  color: #6D7A82;\n  max-width: 400px;\n  line-height: 26px;\n}\n.hover {\n  position: relative;\n  transform: translateX(-40%) translateY(-100%);\n}\n.cover-image {\n  max-height: 430px;\n  display: block;\n  background-image: url('img/product-feature-cover.png');\n  width: 908px;\n  height: 439px;\n}\n"],sourceRoot:""}])},function(n,e,t){var i=t(42);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var A=t(4).default;n.exports.__inject__=function(n){A("1796e78b",i,!1,n)}},function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return A});var i=function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"overview"},[this._ssrNode('<div class="wrapper-container"><div class="bg-image2"></div> <div class="wrapper"><div class="bg-image"><div class="bg-image-mask"></div></div> <div class="wrapper-body"><div class="software-intro"><div class="title">\n                        阅文 <span class="subtitle">兵临城下</span></div> <div class="slogan">让前端工程变的轻松便捷</div> <div><a href="#">\n                            立即开始\n                        </a></div></div> <div class="software"></div></div></div></div>')])},A=[];i._withStripped=!0},function(n,e,t){n.exports=t.p+"img/overview.a11c9a59.png"},function(n,e,t){n.exports=t.p+"img/overview-back.a832932c.jpg"},function(n,e,t){var i=t(21);(n.exports=t(5)(!0)).push([n.i,"\n.overview .wrapper-container {\n  margin-bottom: -400px;\n  height: 1150px;\n  position: relative;\n}\n.overview .bg-image2 {\n  width: 1400px;\n  height: 782px;\n  border-radius: 391px;\n  background: -webkit-linear-gradient(315deg, #5e88ff 0%, #6f30fe 100%);\n  background: linear-gradient(135deg, #5e88ff 0%, #6f30fe 100%);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  box-shadow: 2px 2px 60px rgba(0, 0, 0, 0.06);\n  position: absolute;\n  left: 35%;\n  bottom: 550px;\n  z-index: 1;\n}\n.overview .wrapper {\n  height: 750px;\n  background-color: #f6f6f6;\n  position: relative;\n  width: 100%;\n  margin: 0 200px 0 0;\n}\n.overview .bg-image {\n  position: absolute;\n  width: 100%;\n  height: 750px;\n  background-size: cover;\n  background-image: url("+i(t(46))+");\n}\n.overview .bg-image-mask {\n  width: 100%;\n  height: 750px;\n  background: -webkit-linear-gradient(315deg, rgba(94, 136, 255, 0.85) 0%, rgba(111, 48, 254, 0.85) 100%) /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */;\n  background: linear-gradient(135deg, rgba(94, 136, 255, 0.85) 0%, rgba(111, 48, 254, 0.85) 100%) /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */;\n}\n.overview .wrapper-body {\n  max-width: 1190px;\n  height: 750px;\n  position: relative;\n  margin: 0 auto;\n  z-index: 2;\n}\n.overview .software-intro {\n  position: absolute;\n  left: 5%;\n  padding-top: 230px;\n  z-index: 3;\n}\n.overview .title {\n  font-size: 46px;\n  color: #fff;\n  font-weight: 500px;\n  line-height: 66px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  margin-bottom: 16px;\n}\n.overview .subtitle {\n  font-size: 16px;\n  font-weight: normal;\n}\n.overview .slogan {\n  font-size: 24px;\n  color: #fff;\n  line-height: 34px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.overview .software-detail {\n  padding-top: 24px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 300px;\n  width: 200px;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.overview .software {\n  background-image: url("+i(t(45))+");\n  width: 723px;\n  height: 574px;\n  background-size: 723px 574px;\n  position: absolute;\n  top: 100px;\n  left: 38%;\n}\n","",{version:3,sources:["/Users/systrive/Desktop/systrive/introduction/app/web/component/app/index/overview.vue"],names:[],mappings:";AAAA;EACE,sBAAsB;EACtB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,cAAc;EACd,qBAAqB;EACrB,sEAA8D;EAA9D,8DAA8D;EAC9D,kCAA0B;UAA1B,0BAA0B;EAC1B,6CAA6C;EAC7C,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,WAAW;CACZ;AACD;EACE,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,gDAA+C;CAChD;AACD;EACE,YAAY;EACZ,cAAc;EACd,+JAAuJ;EAAvJ,uJAAuJ;CACxJ;AACD;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,wCAAwC;EACxC,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;CACzC;AACD;EACE,kBAAkB;EAClB,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;UAApB,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,0BAA+B;EAA/B,uCAA+B;UAA/B,+BAA+B;EAC/B,0BAAoB;EAApB,4BAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,gDAA0C;EAC1C,aAAa;EACb,cAAc;EACd,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,UAAU;CACX",file:"overview.vue",sourcesContent:[".overview .wrapper-container {\n  margin-bottom: -400px;\n  height: 1150px;\n  position: relative;\n}\n.overview .bg-image2 {\n  width: 1400px;\n  height: 782px;\n  border-radius: 391px;\n  background: linear-gradient(135deg, #5e88ff 0%, #6f30fe 100%);\n  transform: rotate(-45deg);\n  box-shadow: 2px 2px 60px rgba(0, 0, 0, 0.06);\n  position: absolute;\n  left: 35%;\n  bottom: 550px;\n  z-index: 1;\n}\n.overview .wrapper {\n  height: 750px;\n  background-color: #f6f6f6;\n  position: relative;\n  width: 100%;\n  margin: 0 200px 0 0;\n}\n.overview .bg-image {\n  position: absolute;\n  width: 100%;\n  height: 750px;\n  background-size: cover;\n  background-image: url('img/overview-back.jpg');\n}\n.overview .bg-image-mask {\n  width: 100%;\n  height: 750px;\n  background: linear-gradient(135deg, rgba(94, 136, 255, 0.85) 0%, rgba(111, 48, 254, 0.85) 100%) /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */;\n}\n.overview .wrapper-body {\n  max-width: 1190px;\n  height: 750px;\n  position: relative;\n  margin: 0 auto;\n  z-index: 2;\n}\n.overview .software-intro {\n  position: absolute;\n  left: 5%;\n  padding-top: 230px;\n  z-index: 3;\n}\n.overview .title {\n  font-size: 46px;\n  color: #fff;\n  font-weight: 500px;\n  line-height: 66px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  margin-bottom: 16px;\n}\n.overview .subtitle {\n  font-size: 16px;\n  font-weight: normal;\n}\n.overview .slogan {\n  font-size: 24px;\n  color: #fff;\n  line-height: 34px;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n}\n.overview .software-detail {\n  padding-top: 24px;\n  display: flex;\n  flex-direction: row;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 300px;\n  width: 200px;\n  justify-content: space-between;\n  align-items: center;\n}\n.overview .software {\n  background-image: url('img/overview.png');\n  width: 723px;\n  height: 574px;\n  background-size: 723px 574px;\n  position: absolute;\n  top: 100px;\n  left: 38%;\n}\n"],sourceRoot:""}])},function(n,e,t){var i=t(47);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var A=t(4).default;n.exports.__inject__=function(n){A("71be17df",i,!1,n)}},function(n,e,t){"use strict";var i=t(24),A=t.n(i),a=t(44),o=t(1);var r=function(n){var e;(e=t(48)).__inject__&&e.__inject__(n)},s=Object(o.a)(A.a,a.a,a.b,!1,r,null,"a6e323dc");s.options.__file="app/web/component/app/index/overview.vue",e.default=s.exports},function(n,e,t){(n.exports=t(5)(!0)).push([n.i,"\n.index .home-page {\n  background: #fff;\n  overflow: hidden;\n  width: 100%;\n}\n","",{version:3,sources:["/Users/systrive/Desktop/systrive/introduction/app/web/component/app/index/index.vue"],names:[],mappings:";AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;CACb",file:"index.vue",sourcesContent:[".index .home-page {\n  background: #fff;\n  overflow: hidden;\n  width: 100%;\n}\n"],sourceRoot:""}])},function(n,e,t){var i=t(50);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var A=t(4).default;n.exports.__inject__=function(n){A("24c24643",i,!1,n)}},,function(n,e,t){"use strict";t.r(e);var i=t(49),A=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"product-feature"},[n._ssrNode('<div class="wrapper-container" data-v-5f052c94><div class="wrapper" data-v-5f052c94><div class="feature" data-v-5f052c94><div class="title" data-v-5f052c94>'+n._ssrEscape(n._s(n.feature.title))+'</div> <div class="line" data-v-5f052c94><div class="line-header" data-v-5f052c94></div></div> <div class="desc" data-v-5f052c94>'+n._ssrEscape(n._s(n.feature.desc))+'</div></div> <div class="hover" data-v-5f052c94><img alt="特点图"'+n._ssrAttr("src",n.feature.coverImg)+' class="cover-image" data-v-5f052c94></div></div></div>')])};A._withStripped=!0;var a=t(1);var o=function(n){var e;(e=t(43)).__inject__&&e.__inject__(n)},r=Object(a.a)({props:{feature:{}}},A,[],!1,o,"data-v-5f052c94","3d86dd0f");r.options.__file="app/web/component/app/index/product-feature.vue";var s=r.exports,p=function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"visual-assembly"},[this._ssrNode('<div class="wrapper-container"><div class="cover"><img alt="特点图"'+this._ssrAttr("src",t(36))+' class="cover-image"></div> <div class="wrapper"><div class="feature"><div class="title">区块可视化组装</div> <div class="line"><div class="line-header"></div></div> <div class="desc">\n                    海量物料自由搭配，轻松完成页面组合可视化操作更得心应手\n                </div></div></div></div>')])};p._withStripped=!0;var c=function(n){var e;(e=t(40)).__inject__&&e.__inject__(n)},d=Object(a.a)(null,p,[],!1,c,null,"28731d4a");d.options.__file="app/web/component/app/index/visual-assembly.vue";var l=d.exports,C=function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"custom-materials"},[this._ssrNode('<div class="wrapper-container"><div class="wrapper"><div class="feature"><div class="title">物料自定义接入</div> <div class="line"><div class="line-header"></div></div> <div class="desc">\n                    官方提供海量的物料，覆盖多种业务场景，也支持物料自定义接入，定制物料源\n                </div></div> <div class="cover"><img alt="特点图"'+this._ssrAttr("src",t(31))+' class="cover-image"></div></div></div>')])};C._withStripped=!0;var g=function(n){var e;(e=t(35)).__inject__&&e.__inject__(n)},u=Object(a.a)(null,C,[],!1,g,null,"54b7c0e9");u.options.__file="app/web/component/app/index/custom-materials.vue";var f=u.exports,m=t(9),v={components:{Overview:i.default,ProductFeature:s,VisualAssembly:l,CustomMaterials:f,LayoutFooter:m.a},data:function(){return{productFeature1:{title:"模板自定义创建",desc:"提供多种垂直领域模板，快速创建项目，支持风格切换，满足个性化需求",coverImg:"./img/product-feature1.png",style:{width:"908px",height:"439px"}},productFeature2:{title:"布局自定义生成",desc:"模板内置布局，同时提供交互式的定制功能生产专属布局",coverImg:"./img/product-feature2.png",style:{width:"620px",height:"451px"}},productFeature3:{title:"项目仪表盘插件化",desc:"丰富多样的项目信息面板，页面信息，路由信息依赖管理等，配置专属的Iceworks界面",coverImg:"./img/product-feature3.png",style:{width:"640px",height:"430px"}}}}},x=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"index"},[n._ssrNode('<div class="home-page">',"</div>",[t("overview"),n._ssrNode(" "),t("product-feature",{attrs:{feature:n.productFeature1}}),n._ssrNode(" "),t("visual-assembly"),n._ssrNode(" "),t("product-feature",{attrs:{feature:n.productFeature2}}),n._ssrNode(" "),t("custom-materials"),n._ssrNode(" "),t("product-feature",{attrs:{feature:n.productFeature3}})],2)])};x._withStripped=!0;var B=function(n){var e;(e=t(51)).__inject__&&e.__inject__(n)},h=Object(a.a)(v,x,[],!1,B,null,"0cd630ee");h.options.__file="app/web/component/app/index/index.vue";e.default=h.exports}]);