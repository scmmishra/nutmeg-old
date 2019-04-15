<template>
  <div class="flex flex-row">
    <note-card v-for="note in notes" :key="note.id" :note="note"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NoteCard from "@/components/Note/NoteCard";

export default {
  name: "home",
  components: {
    NoteCard
  },
  data() {
    return {
      notes: {}
    };
  },
  mounted() {
    this.call()
      .get("/notes")
      .then(response => {
        this.notes = response.data;
      });
  }
};
</script>
