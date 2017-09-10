<template>
    <div class="container">
        <div id="map_canvas" style="height:400px; width: 70%"></div>
        <br>
        <div class="control has-text-centered is-large">
            <a class="button is-info is-large" @click="$router.push('/')">It fits me</a>
            <a class="button is-warning is-large" @click="showModal">I don't like it</a>
        </div>

        <div class="modal" ref="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Provide Feedback</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">

                    <div class="field is-grouped">
                        <p class="control">
                            <label class="label text has-text-white">Price</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="price">
                                        <option value="low" selected>Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                            </div>
                        </p>

                        <p class="control is-pulled-right">
                            <label class="label text has-text-white">Decoration</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="decoration">
                                        <option value="rundown" selected>Rundown</option>
                                        <option value="quaint">Quaint</option>
                                        <option value="pristine">Pristine</option>
                                    </select>
                                </div>
                            </div>
                        </p>

                    </div>

                    <div class="field is-grouped">
                        <p class="control">
                            <label class="label text has-text-white">Style</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="style">
                                        <option value="eco-friendly" selected>Eco-Friendly</option>
                                        <option value="romantic">Romantic</option>
                                        <option value="family-like">Family-like</option>
                                    </select>
                                </div>
                            </div>
                        </p>

                        <p class="control">
                            <label class="label text has-text-white">Ambience</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="ambience">
                                        <option value="calm" selected>Calm</option>
                                        <option value="alive">Alive</option>
                                        <option value="noisy">Noisy</option>
                                    </select>
                                </div>
                            </div>
                        </p>

                    </div>

                    <div class="field is-grouped">
                        <p class="control">
                            <label class="label text has-text-white">Area</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="area">
                                        <option value="open" selected>Open</option>
                                        <option value="closed">Closed</option>
                                        <option value="crowded">Crowded</option>
                                    </select>
                                </div>
                            </div>
                        </p>
                    </div>

                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary subBtn" @click="submit">Save changes</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'request',
    data() {
        return {
            price: 'low',
            decoration: 'rundown',
            style: 'eco-friendly',
            ambience: 'calm',
            area: 'open',
            feedback: ''
        }
    },
    mounted() {
        initialize();
    },
    methods: {
        showModal() {
            this.$refs.modal.classList.add('is-active');
        },
        submit() {
            this.$refs.modal.classList.remove('is-active');
            codeAddress();
            this.feedback = '';
        }
    }
}
</script>

<style scoped>
#map_canvas {
    margin: 0 auto;
}
</style>

