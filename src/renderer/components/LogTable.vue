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
        </b-table>

    </div>
</template>

<script>

  export default {
    name: 'log-table',
    data: function () {
      return {
        items: [
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
