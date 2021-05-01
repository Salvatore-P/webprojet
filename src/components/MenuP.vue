<template>
    <div>
        <ul v-show="!$auth.loading" class="sidenav sidenav-fixed #e53935 red darken-1" id="menu">
            <ul v-show="$auth.isAuthenticated">
                <ul class="collapsible">
                    <li>
                        <a class="collapsible-header btn">Liste</a>
                        <div class="collapsible-body #e53935 red darken-1">
                            <ul>
                                <li><a href="#modal1"
                                       class="waves-effect waves-light btn modal-trigger Personalisation sidenav-close">Nouvelle</a>
                                </li>
                                <li><a href="#" class="btn Personalisation sidenav-close">Afficher</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a class="collapsible-header btn">Groupe</a>
                        <div class="collapsible-body #e53935 red darken-1">
                            <ul>
                                <li><a href="#modal2"
                                       class="waves-effect waves-light btn modal-trigger Personalisation sidenav-close">Nouvelle</a>
                                </li>
                                <li><a href="#!" class="btn Personalisation sidenav-close">Afficher</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <li>
                    <a href="#" class="btn sidenav-close">Profile</a>
                </li>
                <li>
                    <!-- show logout when authenticated -->
                    <a @click="logout" class="btn is-dark sidenav-close"><i
                        class="material-icons">logout</i></a>
                </li>
            </ul>
            <ul v-if="!$auth.isAuthenticated">
                <li >
                    <!-- show login when not authenticated -->
                    <a @click="login" class="btn is-dark sidenav-close"><i
                        class="material-icons">login</i></a>
                </li>
            </ul>
        </ul>

    </div>
</template>

<script>

import M from "materialize-css";

export default {
    name: "MenuP",
    methods: {
        // Log the user in
        login() {
            this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
            this.$auth.logout({
                returnTo: window.location.origin
            });
        },
        closeColl() {
            let elem = document.querySelectorAll('.collapsible');
            console.log(typeof elem);
            let e = M.Collapsible.getInstance(0);
            console.log(typeof e);
            e.close(0);
            console.log(e.options);
        }
    },
    mounted() {
        M.AutoInit();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elem, {
        'inDuration': 750
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elem, {});
});

</script>

<style scoped>
.sidenav li > a > i.material-icons {
    float: none;
    font-size: 2em;
    color: white;
}

.sidenav {
    width: 200px;
    height: calc(100% - 64px);
    margin-top: 64px;
}

.btn {
    -webkit-box-shadow: none;
    box-shadow: none;
    align-items: center;
    background-color: transparent;
}

.Personalisation {
    text-transform: none;
    background-color: #E7E6E6;
    color: black !important;
}
</style>