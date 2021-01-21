<template>
    <div id="container">
        <div id="header">
            header
        </div>
        <div id="content">
            <div id="aside">
                <Menu />
            </div>
            <div id="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Menu: defineAsyncComponent(() => import("/@/components/Menu/index.vue"))
    }
}
</script>
 <style scoped>
    #container {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    #header {
        height: 100px;
        background: lightpink;
        flex-shrink: 0;
    }
    #content {
        flex: 1;
        display: flex;
    }
    #aside {
        background: lightblue;
        width: 200px;
    }
    #main {
        background: lightyellow;
        flex: 1;
    }
</style>
