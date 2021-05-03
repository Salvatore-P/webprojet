<template>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-header">
            <i class="material-icons modal-close" @click="close">close</i>
        </div>
        <div class="modal-content">
            <h4>Nouvelle liste</h4>
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="name-list" type="text" class="validate">
                        <label for="name-list">Nom de la liste</label>
                    </div>
                </div>
                <div class="row">
                    <span/>
                    <drag-and-drop ref="drag"/>
                </div>
            </form>
        </div>
        <div class="modal-footer center">
            <button class="btn "  name="action" @click="upload">Valider
                <i class="material-icons right">send</i>
            </button>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
import DragAndDrop from "./DragAndDrop";

export default {
    name: "NewList",
    components: {DragAndDrop},
    mounted(){
        M.AutoInit();
    },
    methods:{
        upload(){
            this.$refs.drag.upload();
        },
        close(){
            this.$refs.drag.fichier = null;
            this.$refs.drag.erreur= false;
            this.$refs.drag.message= null;
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
});


</script>

<style scoped>
    .modal{
        border-radius: 15px;
        max-height: none;
    }
    .modal-header{
        padding : 5px;
        justify-content: flex-end;
    }
    .modal-header i{
        align-self: flex-end;
    }
</style>