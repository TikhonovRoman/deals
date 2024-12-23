<template>
  <div class="card">
    <div class="data">
      <div class="data__image">
        <img :src="data.image" :alt="data.title" />
      </div>
      <div class="content">
        <div class="content__type">{{(data.proposal_type=='t1')?"Аукцион":"Разовое предложение"}}</div>
        <div class="content__title">{{data.title}}</div>
        <div class="content__geo">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.5 14.5C7.5 14.5 12.5 9.40909 12.5 5.59091C12.5 2.66213 10.2614 0.5 7.5 0.5C4.73858 0.5 2.5 2.66213 2.5 5.59091C2.5 9.40909 7.5 14.5 7.5 14.5ZM7.49979 7.86848C8.68326 7.86848 9.64265 6.87879 9.64265 5.65795C9.64265 4.43711 8.68326 3.44743 7.49979 3.44743C6.31632 3.44743 5.35693 4.43711 5.35693 5.65795C5.35693 6.87879 6.31632 7.86848 7.49979 7.86848Z"
              fill="#969DC3" />
          </svg>
          <div>{{data.geo}}</div>
        </div>
        <div class="content__seller">
          <div>Продавец:</div>
          <div>{{data.seller}}</div>
        </div>
        <div class="parameters">
          <div class="parameters__item">
            <div>Вид товара</div>
            <div>{{data.goods_type}}</div>
          </div>
        </div>
        <div class="content__discription">
          <p>
            {{data.discription}}
          </p>
        </div>
      </div>
    </div>
    <div class="sell">
      <div class="prices">
        <div class="prices__summ">{{data.count*data.price+" ₽"}}</div>
        <div class="prices__inner">
          <div>Количество</div>
          <div>{{data.count+' шт.'}}</div>
        </div>
        <div class="prices__inner">
          <div>Стоимость за штуку</div>
          <div>{{data.price+" ₽"}}</div>
        </div>
      </div>
      <div class="btns">
        <button v-if="!data.add" @click="dealsStore.addTo(data.id,'deals')">Добавить в сделки</button>
        <button :disabled="data.payment" :class="(data.payment)?'btn-deal--disable':'btn-deal'" @click="dealsStore.addTo(data.id,'pay')" v-if="data.add">{{(data.payment)?'Оплачено':'Оплатить'}}</button>
        <button @click="dealsStore.addTo(data.id,'fav')">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4.33423 5.15646C3.76936 5.66876 3.37143 6.48526 3.37143 7.72395C3.37143 8.49178 3.74054 9.37595 4.39401 10.3171C5.0395 11.2468 5.91325 12.1619 6.80764 12.9768C7.69901 13.7889 8.59325 14.4856 9.26619 14.98C9.5571 15.1937 9.80563 15.3689 9.99334 15.4985C10.182 15.3641 10.4326 15.1821 10.7264 14.9604C11.4003 14.4517 12.296 13.7378 13.1889 12.9135C14.0848 12.0864 14.9605 11.1642 15.6075 10.2403C16.2647 9.30178 16.6286 8.44202 16.6286 7.72398C16.6286 5.85557 15.1163 4.35487 13.2692 4.35487C12.1581 4.35487 11.1713 4.89912 10.5565 5.74372C10.4277 5.92072 10.2205 6.02564 9.99979 6.02563C9.77911 6.02562 9.57192 5.92069 9.44309 5.74369C8.82837 4.89912 7.84181 4.35487 6.73039 4.35487C5.73916 4.35487 4.90933 4.63487 4.33423 5.15646ZM9.99982 16.3229C9.62433 16.8897 9.6242 16.8897 9.62404 16.8896L9.62215 16.8883L9.61733 16.8852L9.5999 16.8738C9.58488 16.864 9.56313 16.8497 9.5351 16.831C9.47905 16.7938 9.39785 16.7394 9.29508 16.669C9.08961 16.5284 8.79758 16.3242 8.44779 16.0672C7.74933 15.554 6.81505 14.8266 5.87789 13.9728C4.94375 13.1217 3.98898 12.129 3.26308 11.0835C2.54515 10.0495 2 8.89125 2 7.72395C2 6.1806 2.50766 4.97383 3.40677 4.15839C4.29563 3.35224 5.48815 3 6.73039 3C8.00311 3 9.15307 3.50391 9.99985 4.31539C10.8467 3.50391 11.9967 3 13.2692 3C15.8899 3 18 5.12338 18 7.72398C18 8.85265 17.4496 9.99111 16.7353 11.0111C16.0108 12.0458 15.0579 13.0425 14.1252 13.9034C13.1895 14.7672 12.2565 15.5105 11.559 16.037C11.2097 16.3007 10.9181 16.5109 10.7131 16.6559C10.6105 16.7284 10.5295 16.7845 10.4736 16.823C10.4457 16.8422 10.424 16.8569 10.4091 16.8671L10.3918 16.8788L10.3871 16.882L10.3857 16.8829C10.3855 16.883 10.385 16.8834 9.99982 16.3229ZM9.99982 16.3229L10.3857 16.8829C10.1567 17.0365 9.85564 17.0393 9.62404 16.8896L9.99982 16.3229Z"
              :fill="(data.favorite)?'red':'#2D3B87'" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Deal } from '~/types/deals.types';
import {useDealsStore} from '~/stores/dealsStore'
const dealsStore = useDealsStore()
const props = defineProps<{data:Deal}>()
</script>
<style lang="scss" scoped>
* {
  font-size: 13px;
  font-weight: 400;
}

.card {
  display: flex;
  width: fit-content;
  max-width: 1166px;
  height: 336px;
  border: 1px solid rgba(224, 227, 238, 1);
  border-radius: 20px;
  color: rgba(45, 59, 135, 1);

  .data {
    display: flex;
    gap: 20px;
    padding: 20px;

    &__image {
      width: 256px;
      height: 256px;

      img {
        object-fit: contain;
        border-radius: 10px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__type {
        color: rgba(150, 157, 195, 1);
      }

      &__title {
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
      }

      &__geo {
        display: flex;
        width: fit-content;
        gap: 4px;
        border-radius: 5px;
        padding: 4px 8px;
        background: rgba(244, 245, 249, 1);
        color: rgba(97, 108, 165, 1);
      }

      &__seller {
        display: flex;

        >*:first-child {
          color: rgba(150, 157, 195, 1);
        }
      }

      .parameters {
        &__item {
          display: flex;
          flex-direction: column;
          width: fit-content;
          background: rgba(244, 245, 249, 1);
          border-radius: 10px;
          padding: 8px;
          gap: 6px;

          >*:first-child {
            color: rgba(150, 157, 195, 1);
          }
        }
      }

      &__discription {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 536px;
      }
    }
  }

  .sell {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 314px;
    border-left: 1px solid rgba(224, 227, 238, 1);
    border-radius: 20px;
    padding: 20px;

    .prices {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      height: 100%;

      .prices__summ {
        font-size: 18px;
        font-weight: 600;
      }

      .prices__inner {
        display: flex;
        justify-content: space-between;

        *:first-child {
          color: rgba(150, 157, 195, 1);
        }
      }
    }

    .btns {
      display: flex;
      gap: 8px;
      height: 50px;
      width: 100%;

      >*:first-child {
        padding: 17px 25px;
        width: 100%;
      }

      button {
        font-size: 14px;
        font-weight: 600;
        height: 100%;
        cursor: pointer;
        padding: 15px;
        color: rgba(45, 59, 135, 1);
        border-radius: 10px;
        background: rgba(244, 245, 249, 1);
        border: none;
      }
      .btn-deal{
        background: rgba(105, 197, 127, 1);
        color: rgba(255, 255, 255, 1);
      }
      .btn-deal--disable{
        background: rgba(255, 255, 255, 1);
        color: rgba(150, 157, 195, 1);
        border:1px solid rgba(224, 227, 238, 1)
      }
    }
  }
}
</style>
