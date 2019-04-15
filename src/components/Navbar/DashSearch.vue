<template>
        <div class="text-base font-sans lg:flex-grow">
            <div class="max-w-xs">
                <input v-shortkey.focus="['meta', 'k']" id="dash-search" class="dark-mode:bg-black dark-mode:border-black dark-mode:focus:border-white dark-mode:focus:bg-black w-32 bg-grey-light appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" placeholder="Search   [⌘ + K]">
            </div>
        </div>
</template>
<script>
export default {
  name: 'DashSearch'
}
</script>
