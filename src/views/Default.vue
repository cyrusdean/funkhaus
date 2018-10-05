<template>

    <main class="content fallback">
    	<div v-html="$store.state.loop[0].content"/>
    </main>

</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'src/styles/vars';
</style>
