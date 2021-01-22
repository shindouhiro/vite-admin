<template>
    <div class="control">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="CONTROL_MENU"></i>
    </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {

    computed: {
        ...mapState(['isCollapse'])
    },
    methods: {
        ...mapMutations(['CONTROL_MENU']),
    }
}
</script>

<style lang="scss" scoped>
    .el-icon-s-fold,
    .el-icon-s-unfold {
        font-size: 40px;
    }
</style>
