<template>
    <div class="text-black px-1 text-xl select-none">
        <div :class="'mr-1 py-1 px-3 inline-block text-base bg-white border-2 rounded-full flex border-' + getClass">
            <a :href='link.url' target="_blank" :class="'no-underline self-center text-sm text-'+ getClass">{{ link.name }}</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'LinkPill',
  props: ['link'],
  computed: {
    getClass () {
      if (this.link.name === 'Github') return 'github-black'
      else if (this.link.name === 'Gmail') return 'gmail-red'
      else if (this.link.name === 'Dropbox') return 'dropbox-blue'
      else if (this.link.name === 'Google Docs') return 'google-blue'
      else if (this.link.name === 'Google Slides') return 'google-yellow'
      else if (this.link.name === 'Google Sheets') return 'google-green'
      else if (this.link.name === 'Youtube') return 'youtube-red'
      else return 'github-black'
    }
  }
}
</script>
