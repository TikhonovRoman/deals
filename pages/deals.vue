<script setup lang="ts">
import {useDealsStore} from '~/stores/dealsStore'
const dealsStore = useDealsStore()
const deals=ref(computed(()=>dealsStore.view('deals')))
dealsStore.filtered('')
</script>

<template>
    <div class="wrap">
        <div v-for="(item, index) in deals" :key="index">
            <Card :data="item"></Card>
        </div>

    </div>
</template>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 5vh;
}
</style>