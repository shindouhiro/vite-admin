<template>
    <div style="width: 256px">
        <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" class="menu">
            <a-menu-item key="1">
                <PieChartOutlined />
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <DesktopOutlined />
                <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <InboxOutlined />
                <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <MailOutlined /><span>Navigation One</span></span>
                </template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span>
                        <AppstoreOutlined /><span>Navigation Two</span></span>
                </template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">
                        Option 11
                    </a-menu-item>
                    <a-menu-item key="12">
                        Option 12
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
    props: {
        collapsed: Boolean,
    },
    components: {
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
    },
    data () {
        return {
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
        };
    },
    watch: {
        openKeys (val, oldVal) {
            this.preOpenKeys = oldVal;
        },
    },
};
</script>
<style scoped>
.menu {
    height: 100vh;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #52c41a;
}
.ant-menu-item-selected > a,
.ant-menu-item-selected > a:hove {
    color: #52c41a;
}
</style>
