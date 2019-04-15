<template>
  <router-link
    :to="{name: 'noteView', params: { note_id: note.id }}"
    class="w-full m-3 md:w-1/4 no-underline text-black rounded border overflow-hidden h-24 p-2 px-4 hover:shadow"
  >
    <h2 class="text-base font-medium">{{ note.title }}</h2>
  </router-link>
</template>
<script>
import FeatherIcon from "@/components/Feather/FeatherIcon";

export default {
  name: "NoteCard",
  props: ["note"],
  components: {
    FeatherIcon
  }
};
</script>
