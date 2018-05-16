<template>
    <footer class="footer">
        <div class="footer-body">
            <div class="logo-container">
                <div className="logo">
                    <router-link to="/" class="logo-text">LOGO</router-link>
                </div>
            </div>
            <div class="copyright">
                © 2018 Theme designed by boowin
                <a
                  href="https://github.com/alibaba/ice"
                  target="_blank"
                  class="copyright-link"
                  rel="noopener noreferrer"
                >
                  ICE
                </a>
            </div>
        </div>
    </footer>
</template>
<style lang="less">
    .footer {
        .logo-container {
            filter: grayscale(100%);
            opacity: 0.3;
        }
    }
</style>
<script type="text/babel">
    export default{}
</script>
