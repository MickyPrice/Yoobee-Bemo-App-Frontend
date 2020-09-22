<template>
    <div class="chats">
        <Layout>
            <h1 class="heading__base chats__heading">Chats</h1>
            <SearchBar name="search" placeholder="Search" type="search"/>
            <div class="chats__friends">
                <Friends class="chats__friendsList" />
            </div>
            <Channels />
        </Layout>
        <Navigation :darkTheme="true" gradientColour="#FFF" />
    </div>
</template>

<script>
import Layout from "@/components/layout/Layout";
import Navigation from "@/components/navigation/Navigation";
import SearchBar from "@/components/form/FormInput";
import Friends from "@/components/chats/Friends";
import Channels from "@/components/chats/Channels";

export default {
    components: {
        Layout,
        Navigation,
        SearchBar,
        Friends,
        Channels
    }    
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.chats {
    &__heading {
        color: $purple-500;
        font-weight: bold;
    }

    &__friends {
        position: relative;
        height: 140px;
    }
    &__friendsList {
        position: absolute;
        left:0;right:0;
    }
}
</style>