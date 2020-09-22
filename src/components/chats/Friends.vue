<template>
    <section class="friends">
        <button class="friends__item">
            <div class="friends__image">
                <svg class="newChat__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            </div>
            <span class="friends__name">Start Chat</span>
        </button>
        <button v-for="(user, index) in friends" :key="index" class="friends__item">
            <img class="friends__image" :src="user.image" aria-hidden="true">
            <span class="friends__name">{{ user.name }}</span>
        </button>
    </section>  
</template>


<script>
export default {
    data: function() {
        return {
            friends: [
                {
                    name: "Jane Doe",
                    image: "https://api.adorable.io/avatars/50/friend101.png"
                },{
                    name: "Jane Doe",
                    image: "https://api.adorable.io/avatars/50/friend102.png"
                },{
                    name: "Jane Doe",
                    image: "https://api.adorable.io/avatars/50/friend103.png"
                },
            ]
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.friends {
    border-bottom: 0.7px solid $white-300; 
    padding: $padding-20 0;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-basis: content;
    flex-shrink: 0;
    align-items:flex-start;
    &__item {
        background: none;
        border: none;
        text-align: center;
        display: block;
        margin-right: $padding-10;
        text-overflow: ellipsis;
        flex: 0 0 80px;
        &:focus, &:hover {
            outline: none;
            opacity: 0.6;
        }
    }
    &__image {
        width: 50px;
        height: 50px;
        margin: 0 auto 10px auto;
        object-position: center;
        object-fit: cover;
        border-radius: 100%;
        background-color: $white-300;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__name, .newChat__text {
        color: $black;
        padding: 0 5px;
        opacity: 0.9;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &__svg {
        width: 30px;
        opacity: 0.5;
        color: $black;
    }
}


</style>