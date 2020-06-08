<template>
	<div class="home">
		<router-view />
	</div>
</template>

<script>
import router from '../router';

export default {
	router,
	name: 'Home',
	components: {},
};
</script>

<style lang="scss">
.home {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
</style>
