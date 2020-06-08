<template>
	<div class="host">
		<div class="title">
			<span v-if="currentPage !== 3">The Old Kingdom</span>
			<span v-if="currentPage === 3">The Idea</span>
		</div>
		<div class="content" v-if="currentPage === 1">
			<div class="wall-of-text">
				<div>Built with wooden structure</div>
				<sub>(AngularJs)</sub>
				<div>The producer of bricks decided to deprecate those bricks</div>
				<sub>(Google)</sub>
				<div>He couldn't add any more buildings</div>
				<sub
					>(thick walls... no way to make other gates or modify path of the
					wall)</sub
				>
				<div>
					People were starving at the gates, and no place to house them within
				</div>
				<sub
					>(more users are waiting to acces the app and require more
					features)</sub
				>
			</div>
			<img src="http://localhost:4205/img/old_castle.png" />
		</div>
		<div class="content" v-if="currentPage === 2">
			<img src="http://localhost:4205/img/old_castle.png" />
			<div class="wall-of-text">
				<div>Monolithic design</div>
				<sub
					>(not an issue usually, but it does depend on the requirements)</sub
				>
				<div>Old technology</div>
				<sub
					>(usually an in-place upgrade would be nice, but not possible in this
					instance)</sub
				>
				<div>One minor change, in one remote place, requires full redeploy</div>
				<sub
					>(Modularity is nice and useful, but does not provide a solution to
					this problem)</sub
				>
				<div>Many teams, working on multiple areas</div>
				<sub>(requires a lot of sync-ing before deployment)</sub>
				<div>Kinda boring...</div>
				<sub
					>(in the age of ADHD we do require nice shiny things to keep us
					interested)</sub
				>
			</div>
		</div>
		<div class="content" v-if="currentPage === 3">
			<div class="wall-of-text">
				<div>We like microservices...</div>
				<div>
					There was this thing of bringing microservices in the frontend
				</div>
				<div>Let's do that</div>
			</div>
			<img class="hero-picture" src="../assets/hero_idea.png" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 1
		};
	},
	watch: {
		$route(to) {
			this.currentPage = to.params.page;
		}
	},
	mounted() {
		this.currentPage = parseInt(this.$router.currentRoute.params.page) || 1;
	}
};
</script>

<style lang="scss" scoped>
.host {
	padding: 10rem;
	display: flex;
	flex-direction: column;
	width: 100%;

	> .title {
		font-family: var(--accent-font);
		color: var(--accent-color);
		font-size: 2rem;
		text-decoration: underline;
	}

	> .content {
		display: flex;
		flex-direction: row;

		> .wall-of-text {
			flex: 0 0 60%;

			> div {
				font-size: 1.6rem;
			}
			> sub {
				font-size: 1rem;
				font-weight: 200;
				display: block;
				padding-left: 1rem;
			}
		}

		> img {
			width: 400px;
			height: 342px;
			place-self: center;
			margin-right: 4rem;

			&.hero-picture {
				width: 200px;
			}
		}
	}
}

.sub-title {
	padding-left: 5rem;
	font-size: 1.4rem;
	text-decoration: underline;
	cursor: pointer;
}
</style>
