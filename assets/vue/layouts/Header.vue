<template>
  <header class="p-5 flex container mx-auto">
    <a href="" class="logo text-4xl font-bold">
      ichiro
    </a>

    <!-- DESKTOP SOCIALS -->
    <Teleport to="body" :disabled="!isMobile">
      <div class="socials flex items-baseline space-y-3 lg:space-x-6 lg:space-y-0 p-3 lg:p-5 justify-end">
        <a href="https://github.com/ichirofelipe" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github-alt" class="text-3xl text-white" />
        </a>
        <a href="https://www.linkedin.com/in/ichiro-tanaka-b0188819b/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="text-3xl text-white" />
        </a>
        <a href="https://www.facebook.com/ichiwoah16/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl text-white" />
        </a>

        <img class="me lg:block hidden" :src="me" alt="Ichiro">
      </div>
    </Teleport>
  </header>
</template>

<script>
import me from '@assets/images/menobg.png';

export default {
    name: 'Header',
    data() {
      return {
        me: me,
        isMobile: true
      }
    },
    mounted() {
      this.resizeHandler();
      window.addEventListener("resize", this.resizeHandler);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.resizeHandler);
    },
    methods: {
      resizeHandler() {
        window.outerWidth < 1024
        ? this.isMobile = true
        : this.isMobile = false
      }
    }
}
</script>