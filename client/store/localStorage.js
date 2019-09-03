export const state = () => ({
  lang: 'хуй'
})

export const mutations = {
  // setLang(state, lang) {
  //   state.lang = lang
  // },
  setLang: (state, lang) => (state.lang = lang)
}

// export const plugins = [createPersistedState()]
