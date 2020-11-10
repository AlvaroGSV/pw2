import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODO(state, todo){
      state.todos.push(todo)
    },
    DELETE_TODO(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
    setTodo({ commit }, todo){
      commit('SET_TODO', todo)
    },
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id)
    }
  },
  getters: {
    allTodos: state => {
      return state.todos
    }
  },
  modules: {
  }
})
