<template>
    <div>
        <div class="navbar-fixed">
        <nav class="nav-wrapper #e53935 red darken-1">

            <a href="#" class="brand-logo center"><i class="material-icons">whatshot</i>HEPL Group Manager</a>
            <a href="#" data-target="menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </nav>
        </div>

        <menu-p/>
        <new-list/>
        <new-group/>

    </div>
</template>

<script>
import NewList from "./NewList";
import MenuP from "./MenuP";
import NewGroup from "./NewGroup";

export default {
    name: "CMenu",
    components: {NewGroup, MenuP, NewList}

}
</script>

<style scoped>


</style>
<style>

</style>