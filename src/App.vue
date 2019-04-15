<template>
<body class="bg-grey-lightest dark-mode:bg-absolute-black overflow-hidden font-sans leading-normal tracking-normal">
  <div class="container mx-auto">
    <navbar/>
    <div class="container mx-auto">
      <div class="px-5 py-5 w-full h-full h-screen dark-mode:bg-black bg-white rounded overflow-hidden shadow-lg">
        <router-view></router-view>
      </div>
    </div>
  </div>
</body>
</template>
<script>
import "./assets/style.css";
import Navbar from "@/components/Navbar/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
