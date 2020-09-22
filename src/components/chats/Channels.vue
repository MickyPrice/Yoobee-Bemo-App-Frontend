<template>
    <section class="channels">

        <router-link class="channel channel--unread" to="/chat/test">
            <div class="channel__details">
                <img class="channel__image" src="https://thumbs.gfycat.com/ShabbyEagerBarebirdbat-max-1mb.gif" aria-hidden="true">
                <div>
                    <h3 class="channel__title">Andy Samberg</h3>
                    <p class="channel__message">Ya mom says hi! Jinx!</p>
                </div>
            </div>
            <time class="channel__time">5:30 PM</time>
        </router-link>

        <router-link v-for="i in 10" :key="i" class="channel" to="/chat/test">
            <div class="channel__details">
                <img class="channel__image" src="https://thumbs.gfycat.com/ShabbyEagerBarebirdbat-max-1mb.gif" aria-hidden="true">
                <div>
                    <h3 class="channel__title">Andy Samberg</h3>
                    <p class="channel__message">Ya mom says hi! Jinx!</p>
                </div>
            </div>
            <time class="channel__time">5:30 PM</time>
        </router-link>

    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.channels {
    padding: $padding-20 $padding-20 100px $padding-20;
}
.channel {
    color: $black;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: $margin-20;
    &__image {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
        object-position: center;
        flex-grow: 0;
        margin-right: 10px;
    }
    &__title {
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &__message {
        font-family: "Nunito Sans", sans-serif;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &__details {
        display: flex;
        align-items: center;
    }
    &__time {
        font-weight: light;
        opacity: 0.6;
        flex-shrink: 0;
    }

    &--unread::after {
        content: '';
        position: absolute;
        background-color: $purple-500;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        right: 0;
        top: 50%;
    }
}
</style>