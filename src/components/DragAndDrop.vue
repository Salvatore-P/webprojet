<template>
    <div>
        <div class="row">
            <div class="col s12">
                <div class="card-panel teal">
                    <div @dragover="dragover" @dragleave="dragleave" @drop="drop">
                        <input type="file" name="FichierListe" id="assetsFieldHandle"
                               @change="onChange" ref="liste" accept=".xls,.xlsx"/>

                        <label for="assetsFieldHandle">
                            <div class="row">
                                <h6> Glisser un fichier (*.csv,*.xls,*.xlsx) ou <h5>appuyer</h5> pour charger votre
                                    liste.
                                </h6>
                            </div>
                        </label>
                        <div v-if="erreur != null" class="namefichier valign-wrapper red">
                            {{message}}
                        </div>
                        <div v-if="fichier != null" class="namefichier valign-wrapper">
                            {{fichier.name}} <i class="material-icons close" @click="remove">highlight_off</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios"
import M from "materialize-css";

export default {
    name: "DragAndDrop",
    data() {
        return {
            fichier: null,
            erreur: false,
            message: null
        }
    },
    mounted(){
        M.AutoInit();
    },
    methods: {
        async upload() {
            let formData = new FormData();
            formData.append("file", this.fichier);
            formData.append("info", "002");
            try {
                //await axios.post("/Fichierliste", formData);
                //await axios.post("/liste", formData);
                await axios.post("/cool", formData);
                M.toast({html: 'Le fichier a bien été uploadé',classes: 'light-green accent-3 grey-text text-darken-4'});
                this.fichier = null;
                this.$refs.liste.files[0] = null;
            } catch (err) {
                M.toast({html: err.response.data.error ,classes: 'red grey-text text-darken-4'});
            }



        },
        onChange() {
            this.fichier = this.$refs.liste.files[0];
            this.erreur = false;
            this.message = null;
            let type = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"];

            if(!type.includes(this.fichier.type)){
                console.log("erreur");
                this.erreur = true;
                this.fichier = null;
                this.message = "Fichier de type excel uniquement";
            }
        },
        remove() {
            this.fichier = null;
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.liste.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        }
    }
}
</script>

<style scoped>

.file-wrapper input {
    position: absolute;
    top: 0;
    right: 0;
    /* not left, because only the right part of the input seems to
                    be clickable in some browser I can't remember */
    cursor: pointer;
    opacity: 0.0;
    filter: alpha(opacity=0);
    /* and all the other old opacity stuff you
                                    want to support */
    font-size: 300px;
    /* wtf, but apparently the most reliable way to make
                            a large part of the input clickable in most browsers */
    height: 200px;
}

#assetsFieldHandle {
    display: none;
}

h5, h6 {
    color: black;
    text-align: center;
}
.namefichier{
    justify-content: center;
}
.close{
    cursor: pointer;
    margin-left: 5px;
}

</style>