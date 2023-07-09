<template>
  <header class="p-5 flex container mx-auto">
    <a href="" class="logo text-4xl font-bold">
      ichirofelipe
    </a>

    <div class="socials flex items-baseline space-x-6 p-5 justify-end">
      <a href="">
        <font-awesome-icon icon="fa-brands fa-github-alt" class="text-3xl text-white" />
      </a>
      <a href="">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="text-3xl text-white" />
      </a>
      <a href="">
        <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl text-white" />
      </a>

      <img class="me" :src="me" alt="Ichiro Felipe">
    </div>
  </header>
</template>

<script>
import me from '@assets/images/menobg.png';

export default {
    name: 'Header',
    data() {
      return {
        me: me,
      }
    }
}
</script>