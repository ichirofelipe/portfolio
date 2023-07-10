<template>
    <div class="flex flex-col justify-between min-h-screen">
        <div>
            <Header />
            <Content />
        </div>
        <Footer />
    </div>

</template>

<script>
import Header from './layouts/Header.vue';
import Content from './layouts/Content.vue';
import Footer from './layouts/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Content,
        Footer
    },
}
</script>