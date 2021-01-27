<template>
  <div id="container">
    <div id="content">
      <div id="aside" style="width: 256px" ref="aside">
        <Menu :collapsed="collapsed" />
      </div>
      <div id="main">
        <div id="header">
          <a-button @click="toggleCollapsed" class="toggle-collapsed" >
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
      !collapsed?  this.$refs.aside.style.width='80px' :  this.$refs.aside.style.width='256px'
    },

    toggleCollapsed() {
      this.toggleWidth(this.collapsed)
      this.collapsed = !this.collapsed;
    },
  },
}
</script>
<style scoped lang="scss">
.ant-btn:hover, .ant-btn:focus {
  color: #828282;
}
.toggle-collapsed {
  font-size: 20px;
  border: 0;
  margin-left: 4px;
  width: 50px;
  height: 64px;
}

#container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#header {
  height: 64px;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
#content {
  flex: 1;
  display: flex;
}


#main {
  flex: 1;
}
</style>
