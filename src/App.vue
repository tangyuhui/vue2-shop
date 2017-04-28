<template>
    <div id="app">
        <cart-nav></cart-nav>
        <!-- 路由外链 -->
        <router-view></router-view>
    </div>
</template>

<script>

    import Nav from './components/Nav.vue'

    export default {
        components: { 'cart-nav':Nav}
    }
</script>
