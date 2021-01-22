<template>
    <div id="container">
        <div id="content">
            <div id="aside">
                <Menu />
            </div>
            <div id="main">
                <div id="header">
                    <Header />
                </div>
                <div>
                    main
                    <!-- <router-view></router-view> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Menu: defineAsyncComponent(() => import("./components/Menu/index.vue")),
        Header: defineAsyncComponent(() => import("./components/Header/index.vue")),
    }
}
</script>
 <style lang="scss" scoped>
    #content {
        display: flex;
        #header{
            height: 64px;
            background: palevioletred;
        }
        #main {
            flex: 1;
            background: skyblue;
        }
    }
</style>
