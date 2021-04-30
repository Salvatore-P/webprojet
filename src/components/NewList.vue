<template>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-header">
            <i class="material-icons modal-close">close</i>
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
                   <!--<div class="file-field input-field">
                        <div class="btn">
                            <span><i class="material-icons left">cloud_upload</i> File</span>
                            <input type="file" accept=".xlsx">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>-->
                    <drag-and-drop/>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close btn-flat">Valider</a>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
import DragAndDrop from "./DragAndDrop";

export default {
    name: "NiewList",
    components: {DragAndDrop},
    mounted(){
        M.AutoInit();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
});


</script>

<style scoped>
    .modal{
        height: 60%;
        margin-top: 10%;
        width: 50%;
        left: 25%;
        right: 25%;
        border-radius: 15px;
    }
    .modal-header{
        padding : 5px;
        justify-content: flex-end;
    }
    .modal-header i{
        align-self: flex-end;
    }
</style>