<template>
	<div class="host">
		<div class="title">
			Micro...stuff
			<div class="sub-title" v-if="currentPage === 1">The good</div>
			<div class="sub-title" v-if="currentPage === 2">The bad</div>
			<div class="sub-title" v-if="currentPage === 3">The ugly</div>
			<div class="sub-title" v-if="currentPage === 4">How to do it</div>
		</div>
		<div class="content" v-if="currentPage === 1">
			<div class="wall-of-text">
				<div class="accent">Go... small... or go home!</div>
				<div>
					Build many mini things and put them toghether to make one big thingy
				</div>
				<div>Each mini thing can play to the team's strenghts</div>
				<sub
					>(Use any framework according to the usecase or the team's
					strenghts)</sub
				>
				<div>You can have multiple release dates</div>
				<sub>(No need to sync your cycles)</sub>
				<div>It's fun :)</div>
			</div>
			<img class="hero-picture" src="../assets/hero_the-good.png" />
		</div>
		<div class="content" v-if="currentPage === 2">
			<img class="hero-picture" src="../assets/hero_the-bad.png" />
			<div class="wall-of-text">
				<div class="accent">Go... small... but not too small</div>
				<div>There is a tendency to go overboard with the many mini things</div>
				<sub
					>(Not every page within your app should have its own micro app)</sub
				>
				<div>The UX will need special attention</div>
				<sub
					>(Everyone is free to use whatever they desire, but in the end it
					needs to be cohesive)</sub
				>
				<div>
					You can have multiple release dates... But it is better not to
				</div>
				<sub>(Teams need to align on releases to keep things organized)</sub>
			</div>
		</div>
		<div class="content" v-if="currentPage === 3">
			<div class="wall-of-text">
				<div class="accent">When sh*t hits the fan... sh*t gets ugly</div>
				<div>
					When you do overcomplicate and oversegregate things, it will become
					very confusing for everyone
				</div>
				<sub
					>(Yes it will happen and your first instinct is to reorganize
					everything)</sub
				>
				<div>UX will be sh*t at first... but it will get better.</div>
				<sub>(Some ground rules need to be established at the beginning)</sub>
				<div>Onboarding will be hard for newbies</div>
				<sub>(Since this is a new thing - 4yrs old)</sub>
				<div>The temptation to use multiple frameworks is strong</div>
				<sub>(One must resist in order to achieve absolution)</sub>
			</div>
			<img class="hero-picture" src="../assets/hero_the-ugly.png" />
		</div>
		<div class="content" v-if="currentPage === 4">
			<div class="wall-of-text">
				<div>ESI/SSI (Edgeside/Serverside Includes</div>
				<sub>ESI requires a middleman to compose various bits and pieces</sub>
				<sub
					>This usually means using some third party libraries and software
					even</sub
				>
				<sub
					>SSI uses some HTML tags which were introduced in 2000 and never been
					updated as a spec</sub
				>
				<sub>Both ESI and SSI suffer from injection vulerability</sub>
				<sub>Both require some infrastructure overhead</sub>
				<div>iFrames</div>
				<sub>Blast from the past.... Teaching an old dog, new tricks</sub>
				<sub>Some use it... Don't know why</sub>
				<div>Web version</div>
				<sub>Push a button - redirect</sub>
				<sub>Not very SPA-like</sub>
			</div>
			<img class="hero-picture" src="../assets/hero_options.png" />
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
		display: inline-block;
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
			place-self: center;
			margin-right: 4rem;

			&.hero-picture {
				width: 200px;
			}
		}
	}
}

.sub-title {
	padding-left: 1rem;
	font-size: 1.6rem;
	color: var(--primary-color);
	text-decoration: none;
}

.accent {
	color: var(--accent-color);
}
</style>
