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
	props: ['id', 'language', 'modelValue'],
  emits: ['update:modelValue'],
	computed: {
    languageCaption() {
      return this.language ? "Switch to Spanish" : "Cambiar a Ingl\u00E9s";
    },
	},
	methods: {
    switchLanguage() {
			this.$emit('update:modelValue', !this.language);
    }
	}
};
</script>