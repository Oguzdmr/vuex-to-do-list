import { createStore } from 'vuex'

export default createStore({
  state: {

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
    },
    deleteItemTodo(state,todoId){
      let todo = state.todo.filter(t=>t.id != todoId);
      state.todo = todo;
    },
    deleteItemUrgent(state,urgentId){
      let urgent = state.urgent.filter(u=>u.id != urgentId);
      state.urgent = urgent;
    },
    deleteItemPlan(state,planId){
      let plan = state.plan.filter(p=>p.id != planId);
      state.plan = plan;
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
    },
    async deleteItemTodo(context,todoId){
      await context.commit('deleteItemTodo', todoId);
    },
    async deleteItemUrgent(context,urgentId){
      await context.commit('deleteItemUrgent', urgentId);
    },
    async deleteItemPlan(context, planId){
      await context.commit('deleteItemPlan', planId);
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
    },
  },
  modules: {
  }
})
