<template>
    <div class="section-container relative py-14">
        <div class="block-header mb-14">
            <h3 class="text-5xl font-bold">{{ title }}</h3>
        </div>
        <div class="block-container grid lg:grid-cols-3 grid-cols-2 gap-16">
            <BlockImage
                v-for="(block, index) in blocks"
                :index="index"
                :image="block.image"
                :title="block.title"
                :description="block.description"
                :technologies="block.technologies"
            />
        </div>
    </div>
</template>

<script>
import BlockImage from "./BlockImage.vue"

export default {
    name: 'SectionBlock',
    components: {
        BlockImage
    },
    props: {
        title: String,
        blocks: Object
    }
}
</script>