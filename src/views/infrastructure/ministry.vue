<template>
  <a-tabs v-model="activeKey" type="card" >
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="false">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  data() {
    const panes = [
      { title: '统计概况', content: 'Content of Tab 1', key: '1' },
      { title: '数据明细', content: 'Content of Tab 2', key: '2' },
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,
    };
  },
};
</script>
