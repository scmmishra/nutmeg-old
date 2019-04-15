<template>
    <div class="w-full hidden block flex-grow lg:flex lg:items-center lg:w-auto">
          <dash-search/>
          <navbar-menu/>
      </div>
</template>
<script>
import DashSearch from '@/components/Navbar/DashSearch'
import NavbarMenu from '@/components/Navbar/NavbarMenu'

export default {
  name: 'NavbarControl',
  components: {
    DashSearch,
    NavbarMenu
  }
}
</script>
