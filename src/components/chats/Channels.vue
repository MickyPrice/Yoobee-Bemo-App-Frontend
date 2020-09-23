<template>
    <section class="channels">


        <Channel />
        <Channel :unread="true" />
        <Channel />

        <!-- <router-link v-for="i in 10" :key="i" class="channel" to="/chat/test">
            <div class="channel__details">
                <img class="channel__image" src="https://thumbs.gfycat.com/ShabbyEagerBarebirdbat-max-1mb.gif" aria-hidden="true">
                <div>
                    <h3 class="channel__title">Andy Samberg</h3>
                    <p class="channel__message">Ya mom says hi! Jinx!</p>
                </div>
            </div>
            <time class="channel__time">5:30 PM</time>
        </router-link> -->




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
    overflow-x: hidden;
    width: 100%;
    border-top: 0.7px solid $white-300; 
}
</style>