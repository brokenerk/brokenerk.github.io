<template>
  <footer class="row py-4 bg-dark">
		<div class="container-fluid">
			<p class="m-0 text-center text-white">Developed by Enrique Ramos - Copyright {{ actualYear }}</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			actualYear: new Date().getFullYear()
		};
	}
};
</script>

<style scoped>
footer{
	margin-top: 40px;
}
</style>