<template>
    <div class="container">
        <h2 class="has-text-centered title is-size-3">Login Here</h2>
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
                    <input class="input" type="password" v-model="password" placeholder="Enter password">
                </div>
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
import {login} from '../store/api.js';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        submit() {
            let email = this.email,
                password = this.password;
            login('/users/login', {
                email,
                password
            }, (err, res) => {
                console.log('calling login');

                this.$store.commit('LOGIN', {res});
                this.$router.push('/');
            });
        }
    }
}
</script>

<style scoped>
.form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.control {
    width: 100%;
}

.sub-button {
    margin: 1em;
    width: 90%;
}
</style>

