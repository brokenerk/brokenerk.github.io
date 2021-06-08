import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			englishLanguage: true
		};
	},
	mutations: {
		switchLanguage(state, payload) {
			state.englishLanguage = payload.language;
		}
	},
	actions: {
		switchLanguage(context, payload) {
			context.commit('switchLanguage', payload);
		}
	},
	getters: {
		englishLanguage(state) {
			return state.englishLanguage;
		}
	}
});

export default store;