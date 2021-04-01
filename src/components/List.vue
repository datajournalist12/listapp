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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters(['returnList'])
    },
    methods: {
        ...mapMutations(['addToArray', 'deleteFromArray']),
    }
}
</script>

<style scoped>
    .wrap {
        display: inline-flex;
    }
</style>
