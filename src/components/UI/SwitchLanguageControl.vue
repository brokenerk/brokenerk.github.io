<template>
	<div class="custom-control custom-switch">
		<input
			type="checkbox"
			:id="id"
			class="custom-control-input"
			@click="switchLanguage"
			:checked="!language"
		/>
		<label class="custom-control-label" :for="id">
			{{ languageCaption }}</label
		>
	</div>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		language() {
			return this.$store.state.englishLanguage;
		},
    languageCaption() {
      return this.language ? "Switch to Spanish" : "Cambiar a Ingl\u00E9s";
    },
	},
	methods: {
    switchLanguage() {
			this.$store.commit('switchLanguage', { language: !this.language })
    }
	}
};
</script>