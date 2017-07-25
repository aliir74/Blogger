<template>
    <div dir="rtl">

        <!-- Main table element -->
        <b-table striped hover
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
        >
            <template slot="name" scope="item">
                {{item.value}}
            </template>
        </b-table>

    </div>
</template>

<script>

  export default {
    name: 'hello',
    data: function () {
      return {
        items: [
          {
            isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}
          }, {
            isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}
          }, {
            _rowVariant: 'success', isActive: false, age: 9, name: {first: 'Mitzi', last: 'Navarro'}
          }, {
            isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}
          }, {
            isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}
          }, {
            isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}
          }, {
            isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}
          }, {
            _cellVariants: {age: 'danger', name: 'success'}, isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}
          }, {
            isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}
          }, {
            isActive: false, age: 22, name: {first: 'Geneva', last: 'Wilson'}
          }, {
            isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}
          }, {
            isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}
          }
        ],
        fields: {
          name: {
            label: 'نماد',
            sortable: true
          },
          status: {
            label: 'وضعیت'
          },
          number: {
            label: 'تعداد'
          },
          avgBuyPrice: {
            label: 'میانگین قیمت خرید'
          },
          finalCost: {
            label: 'بهای تمام شده'
          },
          lastTransactionPrice: {
            label: 'قیمت آخرین معامله'
          },
          netMarketValue: {
            label: 'خالص ارزش بازار'
          },
          assetProfitPercentage: {
            label: 'درصد سود و زیان تعداد دارایی'
          },
          finalSalePrice: {
            label: 'قیمت سر به سر فروش'
          },
          numberOfSales: {
            label: 'تعداد فروش رفته'
          },
          netWorthOfSoldStock: {
            label: 'ارزش خالص سهام فروش رفته'
          },
          assetProfit: {
            label: 'سود و زیان حاصل از دارایی'
          },
          stockSalesGain: {
            label: 'سود و زیان حاصل از سهام فروش رفته'
          },
          totalProfit: {
            label: 'سود و زیان کل'
          },
          portfoPercentage: {
            label: 'درصد از پورتفو'
          }
        },
        currentPage: 1,
        perPage: 5,
        filter: null
      }
    }
  }
</script>

<style>

</style>
