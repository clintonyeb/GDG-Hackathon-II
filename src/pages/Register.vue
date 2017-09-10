<template>
    <div class="container">
        <h2 class="has-text-centered title is-size-3">Register Here</h2>
        <div class="form">
            <div class="field">
                <label class="label text has-text-white">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Enter email address" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label text has-text-white">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Enter password" v-model="password">
                </div>
            </div>

            <div class="field">
                <label class="label text has-text-white">Confirm Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Confirm password" v-model="cpassword">
                </div>
            </div>

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

            <div class="field">
                <div class="control">
                    <button class="button is-primary sub-button" @click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {register} from '../store/api.js';

export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            cpassword: '',
            price: 'low',
            decoration: 'rundown',
            style: 'eco-friendly',
            ambience: 'calm',
            area: 'open',
        }
    },
    methods: {
        submit() {
            let email = this.email,
                password = this.password,
                price = this.price,
                decoration = this.decoration,
                style = this.style,
                ambience = this.ambience,
                area = this.area;

                let data = {
                    email,
                    password,
                    price,
                    decoration,
                    style,
                    ambience,
                    area
                }

                register('/user/register', data, (err, res) => {
                    this.$router.push('login');
                })

        }
    }
}
</script>

<style scoped>

.sub-button {
    margin: 1em;
    width: 90%;
}

</style>

