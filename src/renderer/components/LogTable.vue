<template>
    <div dir="rtl">
        <b-table striped hover
                 :responsive="true"
                 :small="true"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
        >
        </b-table>

    </div>
</template>

<script>
    /* eslint-disable keyword-spacing,indent */

    export default {
    name: 'log-table',
    data: function () {
      let items = [
        {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '93.5'
        }
      ]
      let func = this.setCellVariants
      items.forEach(function (item) {
        func(item, ['assetProfitPercentage', 'assetProfit', 'stockSalesGain', 'totalProfit'])
      })
      return {
        items,
        fields: {
          name: {
            label: 'نماد',
            sortable: true,
            class: 'text-center'
          },
          status: {
            label: 'وضعیت',
            class: 'text-center'
          },
          number: {
            label: 'تعداد',
            class: 'text-center'
          },
          avgBuyPrice: {
            label: 'میانگین قیمت خرید',
            class: 'text-center'
          },
          finalCost: {
            label: 'بهای تمام شده',
            class: 'text-center'
          },
          lastTransactionPrice: {
            label: 'قیمت آخرین معامله',
            class: 'text-center'
          },
          netMarketValue: {
            label: 'خالص ارزش بازار',
            class: 'text-center'
          },
          assetProfitPercentage: {
            label: 'درصد سود و زیان تعداد دارایی',
            class: 'text-center'
          },
          finalSalePrice: {
            label: 'قیمت سر به سر فروش',
            class: 'text-center'
          },
          numberOfSales: {
            label: 'تعداد فروش رفته',
            class: 'text-center'
          },
          netWorthOfSoldStock: {
            label: 'ارزش خالص سهام فروش رفته',
            class: 'text-center'
          },
          assetProfit: {
            label: 'سود و زیان حاصل از دارایی',
            class: 'text-center'
          },
          stockSalesGain: {
            label: 'سود و زیان حاصل از سهام فروش رفته',
            class: 'text-center'
          },
          totalProfit: {
            label: 'سود و زیان کل',
            class: 'text-center'
          },
          portfoPercentage: {
            label: 'درصد از پورتفو',
            class: 'text-center'
          }
        },
        currentPage: 1,
        perPage: 5,
        filter: null
      }
    },
    methods: {
      setCellVariants: function (item, columns) {
        for(var i = 0; i < columns.length; i++) {
          let cellColor = ''
          if (item[columns[i]] > 0) {
            cellColor = 'success'
          } else if(item[columns[i]] < 0) {
            cellColor = 'danger'
          }
          if (!item._cellVariants) {
            item._cellVariants = {}
            item._cellVariants[columns[i]] = cellColor
            console.log(item._cellVariants)
          } else {
            item._cellVariants[columns[i]] = cellColor
          }
        }
      }
    }
  }
</script>

<style>

</style>
