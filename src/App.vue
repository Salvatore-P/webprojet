<template>
    <div id="app">
        <header-top/>
        <router-view/>

    </div>
</template>

<style>


</style>

<script>
import HeaderTop from "./components/HeaderTop";
export default {
    components: {HeaderTop}
}
</script>