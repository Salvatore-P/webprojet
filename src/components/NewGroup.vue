<template>
    <div>
        <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> -->

        <!-- Modal Structure -->
        <div id="modal2" class="modal">
            <div class="modal-header">
                <i class="material-icons right modal-close">close</i>
            </div>
            <div class="modal-content">
                <h4>Nouveau groupe</h4>

                <form class="col s12">
                    <div class="row">
                        <!-- colonne 1 -->
                        <div class="col s6">
                            <!-- Nom projet -->
                            <div class="input-field">
                                <input id="nom_projet" type="text" class="validate"/>
                                <label for="nom_projet">Nom du projet</label>
                            </div>
                            <!-- Liste source-->
                            <div class="input-field">
                                <select>
                                    <option value="" disabled selected>Choissier la liste source</option>
                                    <option v-for="liste in optionsList" v-bind:key="liste.source" :value="liste.source">{{liste.name}}</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>
                            <div class="input-field">
                                <select>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>
                            <div class="row">
                                <div class="col s4">
                                    <p>
                                        <label>
                                            <input name="group1" type="radio" checked/>
                                            <span>Red</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" type="radio"/>
                                            <span>Yellow</span>
                                        </label>
                                    </p>
                                </div>
                                <div class="input-field col s3 offset-s4">
                                    <input id="nom_projet" type="text" class="validate"/>
                                    <label for="nom_projet">Nombre</label>
                                </div>
                                <!-- roles -->
                                <div class="row">
                                    <div class="col s12">
                                        <div class="card #e0e0e0 grey lighten-2">
                                            <div class="card-content">
                                                <span class="card-title center">Rôles</span>
                                                <div class="row valign-wrapper">
                                                    <div class="input-field">
                                                        <input
                                                            id="nom_projet"
                                                            type="text"
                                                            class="validate"
                                                        />
                                                        <label for="nom_projet">Nombre</label>
                                                    </div>
                                                    <div class="col s2"></div>
                                                    <button class="waves-effect waves-light btn">
                                                        Ajouter
                                                    </button>
                                                </div>
                                                <ul class="collection">
                                                    <li class="collection-item">
                                                        <label>
                                                            <input name="group1" type="checkbox" checked/>
                                                            <span>Capitaine</span>
                                                        </label>
                                                    </li>
                                                    <li class="collection-item">
                                                        <label>
                                                            <input name="group2" type="checkbox"/>
                                                            <span>Rapporteur</span>
                                                        </label>
                                                    </li>
                                                    <li class="collection-item">
                                                        <label>
                                                            <input name="group3" type="checkbox"/>
                                                            <span>Secrétaire</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- colonne 2 -->
                        <div class="col s6">
                            <div class="card #e0e0e0 grey lighten-2">
                                <div class="card-content">
                                    <span class="card-title center">Critères</span>
                                    <div class="row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close btn-flat">Valider</a>
            </div>
        </div>
    </div>
</template>
<script>
import M from "materialize-css";

export default {
    name: "NewGroup",
    mounted() {
        M.AutoInit();
    },
    data() {
        return {
            optionsList : [
                {name:"liste 1",source:"1"},
                {name:"liste 2",source:"2"},
                {name:"liste 3",source:"3"},
            ],
            foods: [
                {text: "Select One", value: null},
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn"
            ],
            show: true
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
});
</script>

<style scoped>
.modal {

    top: 25%;
    width: 50%;
    left: 25%;
    right: 25%;
    border-radius: 15px;
    overflow: auto;
    max-height: 85%;
}

.modal-header {
    padding: 5px;
    justify-content: flex-end;
}

.se5 {
    width: 50%;
    display: flex;
}

.se2 {
    width: 30%;
}

.resize {
    width: 200px;
}
</style>
