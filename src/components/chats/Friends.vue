<template>
    <section class="friends">
        <button class="friends__item">
            <div class="friends__image">
                <svg class="friends__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            </div>
            <span class="friends__name">Create Chat</span>
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
                    name: "Tom Hendrikz",
                    image: "https://images.unsplash.com/photo-1539605480396-a61f99da1041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                },{
                    name: "Michael Price",
                    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
                },{
                    name: "Oliver Griffith-Jones",
                    image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                },                {
                    name: "Tom Hendrikz",
                    image: "https://images.unsplash.com/photo-1539605480396-a61f99da1041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                },{
                    name: "Michael Price",
                    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
                },{
                    name: "Oliver Griffith-Jones",
                    image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                },
            ]
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.friends {
    padding: $padding-20 0;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-basis: content;
    flex-shrink: 0;
    align-items:flex-start;
    &::-webkit-scrollbar { display: none; }
    &__item {
        background: none;
        border: none;
        text-align: center;
        display: block;
        margin-right: $padding-10;
        text-overflow: ellipsis;
        flex: 0 0 72px;
        cursor: pointer;
        &:focus, &:hover {
            outline: none;
            opacity: 0.6;
        }
    }
    &__image {
        width: 60px;
        height: 60px;
        margin: 0 auto 10px auto;
        object-position: center;
        object-fit: cover;
        border-radius: 100%;
        background-color: $white-300;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to bottom right, $purple-500, $purple-300);
        color: #FFF;
    }
    &__name {
        color: $black;
        padding: 0 5px;
        opacity: 0.9;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 118%;
        font-family: $font-noto;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
    }
    &__svg {
        width: 30px;
        color: $white-100;
    }
}


</style>