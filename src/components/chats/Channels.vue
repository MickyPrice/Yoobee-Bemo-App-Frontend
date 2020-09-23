<template>
    <section class="channels">

        <Channel />
        <Channel :unread="true" />
        <Channel />
        <Channel />
        <Channel />
        <Channel />

    </section>
</template>

<script>
import Channel from "@/components/chats/ChannelItem";


export default {
    components: {
        Channel
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.channels {
    padding: 20px 0 100px 0;
    margin-top: 140px;
    overflow-x: hidden;
    width: 100%;
    border-top: 0.7px solid $white-300; 
}
</style>