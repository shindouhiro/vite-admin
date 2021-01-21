<template>
    {{ a?.b}}
</template>
<script>
export default {
    data() {
        return {
            a: {
                b: 123,
                d: 456
            }
        }
    },
    methods: {

    }
}
</script>
