<template>
    {{ a?.b}}
    <a-button>123</a-button>
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
