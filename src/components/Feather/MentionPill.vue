<template>
  <a :href="person.id" class="mr-2 inline-block bg-grey-lighter hover:bg-black hover:text-white rounded-full no-underline px-3 text-grey-darker">@{{ person.name }}</a>
</template>
<script>
export default {
  name: 'MentionPill',
  props: ['person']
}
</script>
