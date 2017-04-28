<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <ul class="nav navbar-nav">
                    <router-link tag="li" to="/" >
                        <a class="navbar-brand"> Shopping Cart </a>
                    </router-link>
                </ul>

            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link tag="li" to="/index" active-class="active">
                        <a> iPhone 6S</a>
                    </router-link>
                    <router-link tag="li" to="/cart" active-class="active">
                        <a>购物车<span class="badge text-danger" v-show="cart.length">{{cart.length}}</span></a>
                    </router-link>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                cart: 'cart'
            })
        }
    }
</script>
<style media="screen">
    .text-danger {
        color: #fff;
        background-color: #d9534f;
    }
    .badge{
     margin-left:5px;
    }
</style>
