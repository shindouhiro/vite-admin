<template>
  <div id="container">
    <div id="content">
      <div id="aside">
        <Menu />
      </div>
      <div id="main">
        <div id="header">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
          header
        </div>
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
  width: 256px;
  background: #001529;

}
#main {
  background: lightyellow;
  flex: 1;
}
</style>
