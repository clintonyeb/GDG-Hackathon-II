const state = {
  name: 'Clinton Yeboah',
  success: false,
}

const actions = {
}

const mutations = {
  LOGIN(state, data)  {
    console.log(state);
    console.log('here');

    state.name = 'Clinton Yeboah'
    state.success = true;
  }
}

export default {
  state,
  actions,
  mutations
}
