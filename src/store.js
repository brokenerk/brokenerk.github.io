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
	}
});

export default store;