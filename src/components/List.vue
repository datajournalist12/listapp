<template>
    <div>
        <div v-for="(item, index) in returnList" :key="index">
            <div class="wrap">
                <p>{{item}}</p>
                <p>&nbsp;</p>
                <p @click="deleteFromArray(index)">[x]</p>
                <p>{{index}}</p>
            </div>
        </div>
        <input v-model="inputValue" placeholder="New item...">
    </div>
    <button @click='addToArray(inputValue)'>Add Item</button>
    <button @click='getData(inputValue)'>Make API call</button>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: "list",
    computed: {
        ...mapGetters(['returnList'])
    },
    methods: {
        ...mapMutations(['addToArray', 'deleteFromArray']),
        ...mapActions(['getData']),
    },
    created: function () {
        console.log("Hello world");
        this.getData;
    }
}
</script>

<style scoped>
    .wrap {
        display: inline-flex;
    }
</style>
