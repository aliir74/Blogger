<template>
    <div class="card card-shadow " dir="rtl">

        <b-btn v-b-modal.modal1 name="" id="" class="btn btn-success float-left" href="#" role="button">سهم جدید</b-btn>
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
        <div class="justify-content-center my-1 mx-auto">
            <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
        </div>

        <!--
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">

            </div>
            &lt;!&ndash;
            <div class="col-sm-4" dir="">
                <b-form-fieldset horizontal label="سطر در صفحه" :label-cols="6">
                    <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
                    </b-form-select>
                </b-form-fieldset>
            </div>&ndash;&gt;
        </div>
-->


        <!-- Modal Component -->
        <b-modal id="modal1" ok-title="تایید" close-title="انصراف" title="مشخصات سهم جدید را وارد کنید">
            <div class="row">
                <div class="col-sm-6">
                    <b-input-group class="mb-2" right="نماد" dir="ltr">
                        <b-form-input dir='rtl' name="schema" type="text" placeholder="خودرو"></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-2" right="تعداد" dir="ltr">
                        <b-form-input dir='rtl' name="number" type="number" placeholder="0"></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-2" right="قیمت" dir="ltr">
                        <b-form-input dir='rtl' name="price" type="text" placeholder="0"></b-form-input>
                    </b-input-group>
                    <b-form-select class="mb-2" v-model="transaction" :options="modalOptions"></b-form-select>
                    <b-input-group class="mb-2" right="قیمت خرید" dir="ltr">
                        <b-form-input dir='rtl' name="buyCost" type="number" placeholder="0" ></b-form-input>
                    </b-input-group>
                    <!--<b-form-input name="date" type="date" placeholder="0" ></b-form-input>-->

                    <datepicker :value="new Date()" class="mb-2 w-100" language="fa" calendar-class="mb-3 calendar card-shadow" calendar-button-icon="fa fa-calendar" calendar-button></datepicker>
                </div>
                <div class="col-sm-6">
                    <b-form-input class="h-100" textarea placeholder="شرح"></b-form-input>

                </div>

            </div>
        </b-modal>
        <div class="container-fluid my-2">
            <pie-chart :data="pieData" :options="''"></pie-chart>
        </div>

    </div>
</template>

<style>
    .card-shadow {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .calendar {
        min-width: 350px !important;
    }

    b-input-group {
        margin: 2px;
    }
</style>


<script>
    /*
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import VueHead from 'vue-head'
  import jQuery from 'jquery'

  var $ = jQuery

  Vue.use(VueHead)
  Vue.use(VueRouter) */
/* eslint-disable keyword-spacing,indent */
    import Vue from 'vue'
    import VueCharts from 'vue-chartjs'
    import Datepicker from 'vuejs-datepicker'
    import PieChart from '/home/ali/Documents/Work/Bourse/Blogger/Blogger/src/renderer/components/PieChart.js'
    var randomColor = require('randomcolor')

    Vue.use(VueCharts)
export default {
    name: 'log-table',
    data: function () {
      let transaction = 'buy'
      let modalOptions = [
        {
          text: 'خرید',
          value: 'buy'
        },
        {
          text: 'فروش',
          value: 'sell'
        }
      ]
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
        transaction,
        modalOptions,
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
          } else {
            item._cellVariants[columns[i]] = cellColor
          }
        }
      },
      addStock: function () {
        ;
      },
      getRandomColor: function () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
        var c
        var hex = color
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split('')
          if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]]
          }
          c = '0x' + c.join('')
          return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
        }
    }

    },
    components: {
        Datepicker, VueCharts, PieChart
    },
  computed: {
      pieData: function () {
        let labels = []
        let labelData = []
        let color = randomColor({
          count: this.items.length,
          hue: 'white',
          luminosity: 'bright'
        })
        let tmpfunc = this.getRandomColor
        tmpfunc()
        this.items.forEach(function (item) {
          labels.push(item.name)
          labelData.push(item.portfoPercentage)
        })
        let pData = {
          labels: labels,
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: color,
              data: labelData
            }
          ]
        }
        console.log(pData)
        return pData
      }
  }

}
</script>
