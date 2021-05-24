import { createStore } from 'vuex'

export default createStore({
  state: {
    name:'',

    todo:[
      
    ],
    urgent:[
      
    ],
    plan:[
      
    ]
  },
  mutations: {
    updateItemTodo(state,listItem){
      state.todo.push(listItem)
    },
    updateItemUrgent(state,listItem){
      state.urgent.push(listItem)
    },
    updateItemPlan(state,listItem){
      state.plan.push(listItem)
    }
  },
  actions: {
    async addItemTodo(context,listItemTodo){
      await context.commit('updateItemTodo', listItemTodo)
    },
    async addItemUrgent(context,listItemUrgent){
      await context.commit('updateItemUrgent', listItemUrgent)
    },
    async addItemPlan(context,listItemPlan){
      await context.commit('updateItemPlan', listItemPlan)
    }
  },
  getters:{
    getTodo(state){
      return state.todo
    },
    getUrgent(state){
      return state.urgent
    },
    getPlan(state){
      return state.plan
    }
  },
  modules: {
  }
})
