<template>
    <div class="container has-text-centered main">
        <h1 class="title is-size-1">
            JUST FOR YOU
        </h1>
        <h2 class="subtitle">
            <i>Providing Best Hotel Services</i>
        </h2>
        <h1>
            <a class="button is-white is-large" id="request" @click="request">
                <span class="icon is-small">
                    <i class="fa fa-hotel"></i>
                </span>
                <span>
                    Request a Hotel
                </span>
            </a>
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {}
        },
        methods: {
            request() {
                this.$router.push('/request')
            }
        }
    }
</script>

<style scoped>

</style>

