<template>
  <div id="container">
    <div id="content">
      <transition name="fade">
      <div id="aside" style="width: 250px" ref="aside">
        <Menu :collapsed="collapsed" />
      </div>
      </transition>
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
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    Menu: defineAsyncComponent(() => import("/@/components/Menu/index.vue")),
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleWidth(collapsed) {
      let aside = this.$refs.aside.style.width
      !collapsed? aside='80px' : aside='250px'
    },

    toggleCollapsed() {
      this.toggleWidth(this.collapsed)
      this.collapsed = !this.collapsed;
    },
  },
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
