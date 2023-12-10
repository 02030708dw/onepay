<template>
  <div id="app">
    <div class="drop-area">
      <Header />
      <Content />
      <Pop />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
import Pop from "@/components/Pop";
export default {
  components: {
    Header,
    Content,
    Pop,
  },
};
</script>

<style></style>
