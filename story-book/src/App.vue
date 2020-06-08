<template>
	<div id="app">
		<HomeComponent />
	</div>
</template>

<script>
import HomeComponent from './entry-points/Home';
export default {
	components: { HomeComponent },
};
</script>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100vw;
	height: 100vh;
}
</style>
