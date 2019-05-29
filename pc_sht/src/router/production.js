import production from '../components/production/production.vue'
import productionMsg from '../components/production/productionMsg.vue'
import viewProduction from '../components/production/viewProduction.vue'
import addProduction from '../components/production/addProduction.vue'

export default [
    {
        path: 'production/productionMsg',
        component: resolve => require(['@/components/production/productionMsg'],resolve),
        name:'productionMsg',
        meta:{
          id:'272',
          node:'production',
          url:'productionMsg',
        }
    },
    {
        path: 'production/addProduction',
        component: resolve => require(['@/components/production/addProduction'],resolve),
        name:'addProduction',
        meta:{
            id:'273',
            node:'production',
            url:'addProduction',
        }
    },
    // {
    //     path: 'production/viewProduction',
    //     component: resolve => require(['@/components/production/viewProduction'],resolve),
    //     name:'viewProduction',
    //     meta:{
    //         id:'159',
    //         node:'production',
    //         url:'viewProduction',
    //     }
    // },
    
]
