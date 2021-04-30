<template>
    <div>
        <div class="row">
            <div class="col s12">
                <div class="card-panel teal">
                    <div @dragover="dragover" @dragleave="dragleave" @drop="drop">
                        <input type="file"  name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                               @change="onChange" ref="file" accept=".csv,.xls,.xlsx" />

                        <label for="assetsFieldHandle" >
                            <div class="row">
                                <h6> Glisser un fichier (*.csv,*.xls,*.xlsx) ou <h5>appuyer</h5> pour charger votre liste.</h6>
                            </div>
                        </label>
                        <ul  v-if="this.filelist.length" v-cloak class="center">
                            <li  v-for="file in filelist" v-bind:key="file">
                                {{ file.name }}<button type="button" @click="remove(filelist.indexOf(file))" title="Remove file">x</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "DragAndDrop",
    delimiters: ['${', '}'], // Avoid Twig conflicts
    data() {
        return {
            filelist: [] // Store our uploaded files
        }
    },
    methods: {
        onChange() {
            this.filelist = [...this.$refs.file.files];
        },
        remove(i) {
            this.filelist.splice(i, 1);
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
            this.$refs.file.files = event.dataTransfer.files;
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
        right: 0; /* not left, because only the right part of the input seems to
                 be clickable in some browser I can't remember */
        cursor: pointer;
        opacity: 0.0;
        filter: alpha(opacity=0); /* and all the other old opacity stuff you
                                 want to support */
        font-size: 300px; /* wtf, but apparently the most reliable way to make
                         a large part of the input clickable in most browsers */
        height: 200px;
    }
    [v-cloak] {
        display: none;
    }
    #assetsFieldHandle{
        display: none;
    }
    h5,h6{
        color: black;
        text-align: center;
    }

</style>