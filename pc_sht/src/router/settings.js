// import Settings from '@/components/settings/settings'
// import EnterpriseInfo from '@/components/settings/enterpriseInfo'
// import AccountSeting from '@/components/settings/accountSeting'
// import StandingBookMsg from '@/components/settings/standingBookMsg'
// import WorkersSeting from '@/components/settings/workersSeting'
// import CustomSeting from '@/components/settings/customSeting'
// import BoothManagement from '@/components/settings/boothManagement'
// import EditEntryTz from '@/components/settings/editEntryTz'
// import EditSaleTz from '@/components/settings/editSaleTz'
// import EquipmentMsg from '@/components/settings/equipmentMsg'
// import AddEquipment from '@/components/settings/addEquipment'
// import retrospect from '@/components/settings/retrospect.vue'
// import lookImages from '../components/settings/lookImages.vue'
// import assetState from '../components/settings/assetState.vue';
// import assetTypes from '../components/settings/assetTypes.vue';
// import partName from '../components/settings/partName.vue';
// import repairMs from '../components/settings/repairMs.vue';
// import taskTypes from '../components/settings/taskTypes.vue';
// import groupMsg from '../components/settings/groupMsg.vue';
// import editEquipment from '../components/settings/editEquipment.vue';
// import rolePermissions from '../components/settings/rolePermissions.vue';
// import newRolePermissions from '../components/settings/newRolePermissions.vue';
// import newWorkers from '../components/settings/newWorkers.vue';
// import editWorkers from '../components/settings/editWorkers.vue';
// import viewWorkers from '../components/settings/viewWorkers.vue';
// import enterpriseProp from '@/components/settings/enterpriseProp'

export default [
  {
    path: 'settings/enterpriseInfo',
    component: resolve => require(['@/components/settings/enterpriseInfo'],resolve),
    name:"EnterpriseInfo",
    meta:{
      id:'99',
      node:'settings',
      url:'enterpriseInfo',
    }
  },
  {
    path: 'settings/enterpriseProp',
    component: resolve => require(['@/components/settings/enterpriseProp'],resolve),
    name:"enterpriseProp",
    meta:{
      id:'499',
      node:'settings',
      url:'enterpriseProp',
    }
  },
  {
    path: 'settings/accountSeting',
    component: resolve => require(['@/components/settings/accountSeting'],resolve),
    name:'AccountSeting',
    meta:{
      id:'144',
      node:'settings',
      url:'accountSeting',
    }
  },
  {
    path: 'settings/workersSeting',
    component: resolve => require(['@/components/settings/workersSeting'],resolve),
    name:'WorkersSeting',
    meta:{
      id:'100',
      node:'settings',
      url:'workersSeting',
    }
  },
  {
    path: 'settings/customSeting',
    component: resolve => require(['@/components/settings/customSeting'],resolve),
    name:'CustomSeting',
    meta:{
      id:'149',
      node:'settings',
      url:'customSeting',
    }
  },
  {
    path: 'settings/standingBookMsg',
    component: resolve => require(['@/components/settings/standingBookMsg'],resolve),
    name:'StandingBookMsg',
    meta:{
      id:'150',
      node:'settings',
      url:'standingBookMsg',
    }
  },
  {
    path: 'settings/boothManagement',
    component: resolve => require(['@/components/settings/boothManagement'],resolve),
    name:'BoothManagement',
    meta:{
      id:'154',
      node:'settings',
      url:'boothManagement',
    }
  },
  {
    path: 'settings/editEntryTz',
    name: 'EditEntryTz',
    component: resolve => require(['@/components/settings/editEntryTz'],resolve),
    meta:{
      id:'151',
      node:'settings',
      url:'editEntryTz',
    }
  },
  {
    path: 'settings/editSaleTz',
    name: 'EditSaleTz',
    component: resolve => require(['@/components/settings/editSaleTz'],resolve),
    meta:{
      id:'152',
      node:'settings',
      url:'editSaleTz',
    }
  },
  {
    path: 'settings/equipmentMsg',
    name: 'EquipmentMsg',
    component: resolve => require(['@/components/settings/equipmentMsg'],resolve),
    meta:{
      id:'156',
      node:'settings',
      url:'equipmentMsg',
    }
  },
  {
    path: 'settings/addEquipment',
    name: 'AddEquipment',
    component: resolve => require(['@/components/settings/addEquipment'],resolve),
    meta:{
      id:'206',
      node:'settings',
      url:'addEquipment',
    }
  },
  {
    path: 'settings/retrospect',
    name: 'Retrospect',
    component: resolve => require(['@/components/settings/retrospect'],resolve),
    meta:{
      id:'258',
      node:'settings',
      url:'retrospect',
    }
  },
  {
    path: 'settings/lookImages',
    name: 'LookImages',
    component: resolve => require(['@/components/settings/lookImages'],resolve),
    meta:{
      id:'259',
      node:'settings',
      url:'lookImages',
    }
  },
  {
    path: 'settings/assetState',
    name: 'AssetState',
    component: resolve => require(['@/components/settings/assetState'],resolve),
    meta:{
      id:'294',
      node:'settings',
      url:'assetState',
    }
  },
  {
    path: 'settings/assetTypes',
    name: 'AssetTypes',
    component: resolve => require(['@/components/settings/assetTypes'],resolve),
    meta:{
      id:'292',
      node:'settings',
      url:'assetTypes',
    }
  },
  {
    path: 'settings/partName',
    name: 'PartName',
    component: resolve => require(['@/components/settings/partName'],resolve),
    meta:{
      id:'296',
      node:'settings',
      url:'partName',
    }
  },
  {
    path: 'settings/repairMs',
    name: 'RepairMs',
    component: resolve => require(['@/components/settings/repairMs'],resolve),
    meta:{
      id:'408',
      node:'settings',
      url:'repairMs',
    }
  },
  {
    path: 'settings/taskTypes',
    name: 'TaskTypes',
    component: resolve => require(['@/components/settings/taskTypes'],resolve),
    meta:{
      id:'410',
      node:'settings',
      url:'taskTypes',
    }
  },
  {
    path: 'settings/groupMsg',
    name: 'GroupMsg',
    component: resolve => require(['@/components/settings/groupMsg'],resolve),
    meta:{
      id:'440',
      node:'settings',
      url:'groupMsg',
    }
  },
  {
    path: 'settings/editEquipment',
    name: 'EditEquipment',
    component: resolve => require(['@/components/settings/editEquipment'],resolve),
    meta:{
      id:'448',
      node:'settings',
      url:'editEquipment',
    }
  },
  // {
  //   path: 'settings/rolePermissions',
  //   name: 'RolePermissions',
  //   component: resolve => require(['@/components/settings/rolePermissions'],resolve),
  //   meta:{
  //     // id:'440',
  //     node:'settings',
  //     url:'rolePermissions',
  //   }
  // },
  // {
  //   path: 'settings/newRolePermissions',
  //   name: 'NewRolePermissions',
  //   component: resolve => require(['@/components/settings/newRolePermissions'],resolve),
  //   meta:{
  //     // id:'440',
  //     node:'settings',
  //     url:'newRolePermissions',
  //   }
  // },
  {
    path: 'settings/newWorkers',
    name: 'NewWorkers',
    component: resolve => require(['@/components/settings/newWorkers'],resolve),
    meta:{
      id:'449',
      node:'settings',
      url:'newWorkers',
    }
  },
  {
    path: 'settings/editWorkers',
    name: 'EditWorkers',
    component: resolve => require(['@/components/settings/editWorkers'],resolve),
    meta:{
      id:'450',
      node:'settings',
      url:'editWorkers',
    }
  },
  {
    path: 'settings/viewWorkers',
    name: 'ViewWorkers',
    component: resolve => require(['@/components/settings/viewWorkers'],resolve),
    meta:{
      id:'451',
      node:'settings',
      url:'viewWorkers',
    }
  },
]
