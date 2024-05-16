<template>
	<div class="loading-component">
		<v-progress-linear indeterminate bg-opacity="0.4" />
	</div>
</template>

<style lang="scss">
	.loading-component {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 11;
		.v-progress-linear__indeterminate,
		.v-progress-linear__determinate,
		.v-progress-linear__background {
			background: #000;
		}
	}
</style>
