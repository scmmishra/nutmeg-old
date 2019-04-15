<template>
  <div class="pl-3 py-4">
    <div class="pb-5">
      <div class="text-black text-3xl">{{ note.title }}</div>
      <div class="text-grey">{{ note.author }}</div>
    </div>
    <div class="rounded px-6 py-3 flex">
      <TestEditor :note="note.content"></TestEditor>
    </div>
  </div>
</template>
<script>
import Editor from "@/components/TipTap/Editor";

export default {
  name: "Note",
  props: ["note_id"],
  components: {
    TestEditor: Editor
  },
  data() {
    return {
      note: {}
    };
  },
  mounted() {
    this.call()
      .get("notes/" + this.note_id)
      .then(response => {
        console.log(response)
        this.note = response.data;
      });
  }
};
</script>
