<template>
  <nav class="container mx-auto flex items-center justify-between flex-wrap py-6">
    <div class="flex items-center flex-no-shrink mr-6">
      <div class="p-2 mt-1">
        <feather-icon class="dark-mode:text-white" :name="logo"/>
      </div>
      <span class="font-semibold font-sans text-2xl dark-mode:text-white">Nutmeg</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-grey border-grey-light hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <navbar-control/>
  </nav>
</template>
<script>
import FeatherIcon from "@/components/Feather/FeatherIcon";
import NavbarControl from "@/components/Navbar/NavbarControl";

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

export default {
  name: "Navbar",
  components: {
    FeatherIcon,
    NavbarControl
  },
  computed: {
    logo: function() {
      const logos = ['clipboard', 'coffee', 'edit-2']
      return logos.randomElement()
    }
  }
};
</script>
