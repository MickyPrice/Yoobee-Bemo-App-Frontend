<template>
    <button class="btn" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
    .btn {
        background-color: $white-300;
        border: none;
        border-radius: $corners-10;
        padding: 10px 40px;
        outline: none;
    }
</style>