<template>
    <div class="block">
       <div class="block-image mb-2">
            <img :src="imagePath" :alt="title" />
            <div class="block-description flex justify-center items-center">
                <p class="font-bold text-xl leading-7">{{ description }}</p>
            </div>
       </div>
       <div class="block-info">
            <h4 class="font-bold text-2xl mb-1">{{ title }}</h4>
            <ul class="flex space-x-3">
                <li class="text-sm" v-for="(tech, index) in technologies"
                    :index="index">
                    {{ tech }}
                </li>
            </ul>
       </div>
    </div>
</template>

<script>
export default {
    name: 'BlockImage',
    props: {
        image: String,
        title: String,
        description: String,
        technologies: Array
    },
    data() {
        return {
            imagePath: require(`@assets/images${this.image}`).default
        }
    },
    mounted() {
        console.log(this.imagePath)
    }
}
</script>