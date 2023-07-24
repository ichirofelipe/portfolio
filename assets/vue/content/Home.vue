<template>
    <div class="p-5">
        
        <Banner />
        <SectionBlock 
            title="Projects" 
            :blocks="projectLinks"/>


    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import SectionBlock from '../components/SectionBlock.vue';
import { projectLinks } from '../../data/projects.json';

export default {
    name: 'Home',
    components: {
        Banner,
        SectionBlock
    },
    data() {
        return {
            projectLinks: projectLinks
        }
    },
    mounted() {
        console.log(projectLinks)
    }
}
</script>