<template>
    <header class="navbar nav">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </router-link>
                <div class="navbar-burger burger" data-target="navMenubd-example">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navMenubd-example" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                                <p class="control" v-if="user.success">
                                <router-link class="bd-tw-button button" to="/account">
                                    <span class="icon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                    <span>
                                        {{user.name}}
                                    </span>
                                </router-link>
                            </p>
                                <p class="control" v-if="!user.success">
                                <router-link class="bd-tw-button button" to="/register">
                                    <span class="icon">
                                        <i class="fa fa-user-plus"></i>
                                    </span>
                                    <span>
                                        Sign Up
                                    </span>
                                </router-link>
                            </p>
                            <p class="control" v-if="!user.success">
                                <router-link class="button is-primary" to="/login">
                                    <span class="icon">
                                        <i class="fa fa-sign-in"></i>
                                    </span>
                                    <span>Login</span>
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {}
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped>

</style>

