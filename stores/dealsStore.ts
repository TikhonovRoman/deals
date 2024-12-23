import { defineStore } from 'pinia'

import deals_json from '~/data/deals.json';
import type { Deal } from '~/types/deals.types';

export const useDealsStore = defineStore('deals', () => {
    const data = ref<Deal[]>(deals_json);
    const filters = ref('')
    const searchText = ref('')
    function filtered(val: any) {
        filters.value = val
        console.log(filters.value);
    }
    function addTo(id: number, val: string) {
        data.value.forEach((el, index) => {
            if (el.id === id) {
                if (val == 'fav') {
                    data.value[index].favorite = !data.value[index].favorite
                }
                if (val == 'deals') {
                    data.value[index].add = true
                }
                if (val == 'pay') {
                    data.value[index].payment = true
                }
            }
        });
    }
    function searchChangeValue(val:string){
        searchText.value=val
    }
    const search = ()=>{
        let items = data.value
        let query = searchText.value
        if (searchText.value) {
            items = items.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            )
        }
        if (filters.value != '') {
            items = items.filter(item =>
                item.proposal_type.includes(filters.value)
            )
        }
        return items
    }
    const view = (val: string) => {
        let items = data.value
        if (val == 'favorite') {
            items = items.filter(item =>
                item.favorite == true
            )
        }
        if (val == 'deals') {
            items = items.filter(item =>
                item.add == true
            )
        }
        if (val == 'proposal') {
            items = items.filter(item =>
                item.add == false
            )
        }
        if (filters.value != '') {
            items = items.filter(item =>
                item.proposal_type.includes(filters.value)
            )
        }
        return items
    }
    return { view, filtered, addTo,filters,searchChangeValue,search }
});



