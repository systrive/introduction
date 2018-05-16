<template>
   <div>
     <LayoutHeader></LayoutHeader>
     <LayoutContent>
       <div slot="content"><slot name="main"></slot></div>
     </LayoutContent>
     <!-- <layout-footer></layout-footer> -->
   </div>
</template>
<style>
  body{
    margin: 0 0px;
  }
  a{
    text-decoration: none;
  }
  @import "../../../asset/less/global.less";
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  import LayoutFooter from './footer/footer';
  export default{
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutFooter
    }
  }
</script>
