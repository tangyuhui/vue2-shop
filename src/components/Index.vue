<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-2">
                <img class="img-responsive"  :src="product.activeStyleUrl"  alt=""></div>
            <div class="col-md-5"><h3 class="goods-name divider">{{product.name}}</h3>
                <hr/>
                <div class="content row">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">描述：</label>
                            <div class="col-sm-8 mglminus-15">
                                <p class="form-control-static">{{product.desc}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label   class="col-sm-3 control-label">價格：</label>
                            <div class="col-sm-8 mglminus-15">
                                <p class="form-control-static">{{product.price}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label   class="col-sm-3 control-label">外观：</label>
                            <div class="col-sm-8 mglminus-15">
                               <ul class="option clearfix">
                                   <li v-for="(value, key) in product.styles"
                                       @click="changeStyle({'styleUrl':value})"
                                       :class="{active: product.activeStyleUrl == value}"><span v-text="key"></span></li>
                               </ul>
                            </div>
                        </div>
                        <div class="form-group">
                            <label   class="col-sm-3 control-label">存储容量：</label>
                            <div class="col-sm-8 mglminus-15">
                                <ul class="option clearfix">
                                    <li v-for="(value, key) in product.storage"
                                        @click="changePrice({'storage':key,'price':value})"
                                        :class="{active: product. activeStorage== key}"><span v-text="key"></span></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="manipulate col-md-10"><button type="button" class="btn  btn-block btn-danger" id="cartBtn" :disabled="product.isSelected" @click="addItem">加入购物车</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default   {
        computed: {...mapGetters({
            product: 'iPhone6S'
        })},
        methods: {
            ...mapActions(['changeStyle','changePrice','addItem'])
        }
    }
</script>
<style>
    html,body,ul{
        padding:0px;
        margin:0px;
    }
    ol, ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
   .content label{
       color:gray;
   }
    .option li{
        float:left;
        border:2px solid #eee;
        padding:5px;
        margin-right:6px;
        cursor:pointer;
    }
    .option li.active, .option li:hover{
        border-color:#c0392b;
    }
    .content .form-group{
        margin-bottom: 20px;
    }
    .mglminus-15{
        margin-left:-15px ;
    }
   #cartBtn{
       color:#fff;
   }

</style>