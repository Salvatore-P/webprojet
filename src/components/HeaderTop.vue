<template>
    <div>
        <div class="navbar-fixed">
        <nav class="nav-wrapper #e53935 red darken-1">

            <a href="#" class="brand-logo center"><i class="material-icons">whatshot</i>HEPL Group Manager</a>
            <a href="#" data-target="menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </nav>
        </div>



    </div>
</template>

<script>
import { getInstance } from "@/auth/index";

export default {
    name: "HeaderTop",
    components: {},

    mounted() {

        setTimeout(function(){
            let con = getInstance();
            console.log("connecter ?  " +con.isAuthenticated);

            if(con.isAuthenticated) console.log("connecter");
            else console.log("deconecter");
        }, 1000);

    }


}
</script>

<style scoped>


</style>
<style>

</style>