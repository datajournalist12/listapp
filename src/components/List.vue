<template>
    <div>
        <div v-for="(item, index) in returnList" :key="index">
            <div class="wrap">
                <p>{{item}}</p>
                <p>&nbsp;</p>
                <p @click="deleteFromArray(index)">[x]</p>
            </div>
        </div>
        <input v-model="inputValue" placeholder="New item...">
    </div>
    <button @click='addToArray(inputValue)'>Add Item</button>
    <button @click='getData()'>Make API call</button>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['returnList'])
    },
    actions: {
        ...mapActions(['getData'])
    },
    methods: {
        ...mapMutations(['addToArray', 'deleteFromArray']),
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
