<template>
    <div class="wrapper">
        <ul class="links">
            <li @click="dealsStore.filtered('')" :class="toggleClass('')">Все типы</li>
            <li @click="dealsStore.filtered('t2')" :class="toggleClass('t2')">Прямые продажи</li>
            <li @click="dealsStore.filtered('t1')" :class="toggleClass('t1')">Аукцион</li>
        </ul>

        <form class="search" @submit="dealsStore.searchChangeValue(searchText)">
            <input v-model="searchText" type="search" placeholder="Искать...">
            <NuxtLink to="/search"><button @click="dealsStore.searchChangeValue(searchText)">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4692_630)">
                            <path
                                d="M7.91667 2.5C9.35326 2.5 10.731 3.07068 11.7468 4.0865C12.7627 5.10233 13.3333 6.48008 13.3333 7.91667C13.3333 9.25833 12.8417 10.4917 12.0333 11.4417L12.2583 11.6667H12.9167L17.0833 15.8333L15.8333 17.0833L11.6667 12.9167V12.2583L11.4417 12.0333C10.4917 12.8417 9.25833 13.3333 7.91667 13.3333C6.48008 13.3333 5.10233 12.7627 4.0865 11.7468C3.07068 10.731 2.5 9.35326 2.5 7.91667C2.5 6.48008 3.07068 5.10233 4.0865 4.0865C5.10233 3.07068 6.48008 2.5 7.91667 2.5ZM7.91667 4.16667C5.83333 4.16667 4.16667 5.83333 4.16667 7.91667C4.16667 10 5.83333 11.6667 7.91667 11.6667C10 11.6667 11.6667 10 11.6667 7.91667C11.6667 5.83333 10 4.16667 7.91667 4.16667Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4692_630">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </NuxtLink>
        </form>

    </div>
</template>
<script setup lang="ts">
import { useDealsStore } from '~/stores/dealsStore'

const dealsStore = useDealsStore()
const searchText = ref('')

function toggleClass(val: string) {
    if (dealsStore.filters == val) { return 'active' }
}
</script>
<style lang="scss">
.wrapper {
    display: flex;
    justify-content: space-between;
    height: 48px;

    .links {
        display: flex;
        list-style: none;
        border: 1px solid rgba(224, 227, 238, 1);
        background: rgba(244, 245, 249, 1);
        border-radius: 10px;
        color: rgba(150, 157, 195, 1);
        gap: 10px;
        padding: 12px;
        margin: 4px;
        font-size: 15px;
        color: rgba(150, 157, 195, 1);


        .active {
            color: rgba(45, 59, 135, 1);
        }
    }

    .search {
        display: flex;
        justify-content: space-between;
        height: 48px;
        min-width: 274px;
        border: 1px solid rgba(224, 227, 238, 1);
        border-radius: 10px;

        input {
            height: 100%;
            border: none;
            border-radius: 10px;
            margin-left: 20px;
            width: 100%;

            &:focus {
                outline: none;
            }
        }

        button {
            width: 40px;
            height: 40px;
            background: rgba(45, 59, 135, 1);
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 4px;
        }
    }
}
</style>