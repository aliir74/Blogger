<template>
    <div class="card card-shadow " dir="rtl">

        <b-btn v-b-modal.modal1 name="" id="" class="btn btn-success" href="#" role="button">سهم جدید</b-btn>
        <b-table striped hover
                 :responsive="true"
                 :small="true"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
        >
            <template slot="number" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="avgBuyPrice" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="finalCost" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="lastTransactionPrice" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="netMarketValue" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template  slot="assetProfitPercentage" scope="item">
                <span dir=ltr :class="[item.value > 0 ? 'text-success' : '', item.value < 0 ? 'text-danger' : '']">{{item.value > 0 ? '+' : ''}}{{item.value}}%</span>
            </template>
            <template slot="finalSalePrice" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="numberOfSales" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="netWorthOfSoldStock" scope="item">
                <span dir="ltr">{{comma(item.value)}}</span>
            </template>
            <template slot="assetProfit" scope="item">
                <span dir="ltr" :class="[item.value > 0 ? 'text-success' : '', item.value < 0 ? 'text-danger' : '']">{{item.value > 0 ? '+' : ''}}{{comma(item.value)}}</span>
            </template>
            <template slot="stockSalesGain" scope="item">
                <span dir="ltr" :class="[item.value > 0 ? 'text-success' : '', item.value < 0 ? 'text-danger' : '']">{{item.value > 0 ? '+' : ''}}{{comma(item.value)}}</span>
            </template>
            <template slot="totalProfit" scope="item">
                <span dir="ltr" :class="[item.value > 0 ? 'text-success' : '', item.value < 0 ? 'text-danger' : '']">{{item.value > 0 ? '+' : ''}}{{comma(item.value)}}</span>
            </template>
            <template slot="portfoPercentage" scope="item">
                <span dir="ltr">{{item.value}}%</span>
            </template>

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
        <b-modal id="modal1" ok-title="تایید" close-title="انصراف" title="مشخصات سهم جدید را وارد کنید" @ok="addRecord" @shown="clearModal">
            <div class="row">
                <div class="col-sm-6">
                    <b-input-group class="mb-2" right="نماد" dir="ltr">
                        <b-form-input dir='rtl' v-on:change="onChangeSearch" v-model="schema" type="text" placeholder="خودرو"></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-2" right="تعداد" dir="ltr">
                        <b-form-input dir='rtl' v-model="number" type="number" placeholder="0"></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-2" right="قیمت" dir="ltr">
                        <b-form-input dir='rtl' v-model="price" type="text" placeholder="0"></b-form-input>
                    </b-input-group>
                    <b-form-select class="mb-2" v-model="transaction" :options="modalOptions"></b-form-select>
                    <b-input-group class="mb-2" right="قیمت خرید" dir="ltr">
                        <b-form-input dir='rtl' v-model="buyCost" type="number" placeholder="0" ></b-form-input>
                    </b-input-group>
                    <!--<b-form-input name="date" type="date" placeholder="0" ></b-form-input>-->

                    <datepicker v-model="date" class="mb-2 w-100" language="fa" calendar-class="mb-3 calendar card-shadow" calendar-button-icon="fa fa-calendar" calendar-button></datepicker>
                </div>
                <div class="col-sm-6">
                    <b-form-input v-model="comment" class="h-100" textarea placeholder="شرح"></b-form-input>

                </div>

            </div>
        </b-modal>
        <div class="container-fluid my-2">
            <pie-chart :data="pieData"></pie-chart>
        </div>

    </div>
</template>

<style>
    .modal-footer > button {
        margin: 3px !important;
    }
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
/* eslint-disable keyword-spacing,indent */
    import Vue from 'vue'
    import VueCharts from 'vue-chartjs'
    import Datepicker from 'vuejs-datepicker'
    import PieChart from '/home/ali/Documents/Work/Bourse/Blogger/Blogger/src/renderer/components/PieChart.js'
    import axios from 'axios'
    var randomColor = require('randomcolor')
    var commaNumber = require('comma-number')

    Vue.use(VueCharts)
export default {
    name: 'log-table',
    data: function () {
      let onlineSchemas = []
      let schema, number, price, buyCost, comment
      let date = new Date()
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
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '-121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '-1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '13.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '-1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '3.5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '23'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '5'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '1'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '2'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '2'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '10'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '12'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '11'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '9'
        }, {
          name: 'خودرو۱', status: 'مجاز', number: 283, avgBuyPrice: '954242', finalCost: '270050912', lastTransactionPrice: '966666', netMarketValue: '121121121', assetProfitPercentage: '1.15', finalSalePrice: '828222', numberOfSales: '0', netWorthOfSoldStock: '0', assetProfit: '1211222', stockSalesGain: '0', totalProfit: '1111222', portfoPercentage: '13.5'
        }
      ]
      // let func = this.setCellVariants
      items.forEach(function (item) {
        // func(item, ['assetProfitPercentage', 'assetProfit', 'stockSalesGain', 'totalProfit'])
      })
      return {
        onlineSchemas,
        schema,
        number,
        price,
        buyCost,
        date,
        comment,
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
      onChangeSearch: function () {
        console.log('test')
        /*
        await axios.get(`http://www.tsetmc.com/tsev2/data/search.aspx?skey` + this.schema)
          .then(response => {
            // JSON responses are automatically parsed.
            // this.posts = response.data
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e)
          }) */
      },
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
      comma: function (x) {
        return commaNumber(x)
      },
      addRecord: function () {
        let db = this.$db
        const self = this
        let dbId = -1
        let insertObj = {transaction: this.transaction, number: this.number, price: this.price, buyCost: this.buyCost, date: this.date, comment: this.comment}
        console.log(insertObj, 'insertObj')
        this.$db.find({ schema: this.schema }, function (err, docs) {
          if (err) {
            console.log('insert new stock error', err)
            return
          }
          if (docs.length === 0) {
            db.insert({schema: self.schema, logs: []}, function (err, newDoc) {
              if (err) {
                console.log('insert err main schema error', err)
                return
              }
              dbId = newDoc._id
              db.update({ _id: dbId }, {$push: {logs: insertObj}}, {}, function () {
              })
              console.log('1 insert ok')
            })
          } else {
            dbId = docs[0]._id
            db.update({ _id: dbId }, {$push: {logs: insertObj}}, {}, function () {
            })
            console.log('2 insert ok')
          }
        })
        this.clearModal()
      },
      clearModal: function () {
        this.transaction = 'buy'
        this.date = new Date()
        this.schema = ''
        this.number = ''
        this.price = ''
        this.buyCost = ''
        this.comment = ''
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
        // console.log(pData)
        return pData
      }
  },
  mounted () {
      const self = this
    this.$db.find({}, function (err, docs) {
      if (err) {
        console.log('err', err)
      }
        self.$store.commit('setState', docs)
    })
    console.log('store', this.$store.state.dbStore)
  },
  watch: {
      schema: async function (val, oldVal) {
        if(val.length > 2) {
          console.log(`http://www.tsetmc.com/tsev2/data/search.aspx?skey=` + this.schema)
          await axios.get(`http://www.tsetmc.com/tsev2/data/search.aspx?skey=` + this.schema)
            .then(response => {
              // JSON responses are automatically parsed.
              // this.posts = response.data
              console.log(response.data)
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
      }
  }

}
</script>
