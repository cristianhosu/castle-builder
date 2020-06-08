<template>
	<div class="home">
		<router-view />
	</div>
</template>

<script>
import { EventBus } from '../services/EventBus';
import router from '../router';

export default {
	router,
	name: 'Home',
	components: {},
	mounted() {
		EventBus.$on('navigate-away', url => {
			this.$emit('navigate-away', url);
		});
	}
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
