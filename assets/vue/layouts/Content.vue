<template>
    <section id="content-section" class="mx-auto container content">
        <div class="floating-shapes floating-shapes--circle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="floating-shapes floating-shapes--circle right bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div id="floaters" class="relative"></div>
        
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    name: 'Content'
}
</script>