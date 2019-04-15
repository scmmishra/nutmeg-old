<template>
  <div class="flex">
    <div class="mr-5 self-center">
      <feather-icon
        class="stroke-current text-grey-dark hover:text-grey-darkest dark-mode:hover:text-white"
        :name="`calendar`"
      />
    </div>
    <div class="mr-5 self-center">
      <feather-icon
        class="stroke-current text-grey-dark hover:text-grey-darkest dark-mode:hover:text-white"
        :name="`bookmark`"
      />
    </div>
    <div>
      <img
        class="relative cursor-pointer hover:shadow-md w-10 h-10 rounded-full mr-4"
        :src="profile.url"
        :alt="profile.name"
      >
    </div>
  </div>
</template>
<script>
import FeatherIcon from "@/components/Feather/FeatherIcon";

export default {
  name: "NavbarMenu",
  components: {
    FeatherIcon
  },
  data() {
    return {
      profile: {
        url:
          "https://pbs.twimg.com/profile_images/1047479361819922437/yHgaCFdq_400x400.jpg",
        name: "Shivam Mishra"
      },
      show: false
    };
  }
};
</script>
