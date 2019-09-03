import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  lang: 'ru'
})

export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  }
}

export const plugins = [createPersistedState()]
