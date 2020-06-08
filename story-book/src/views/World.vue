<template>
	<div class="host">
		<div class="title">
			<span>Ye ol' agenda</span>
		</div>
		<div class="content">
			<div class="wall-of-text">
				<div>
					Chapter I
					<div class="sub-title" @click="goTo(1)">Introduction</div>
				</div>
				<div>
					Chapter II
					<div class="sub-title" @click="goTo(2, true)">The old kingdom</div>
				</div>
				<div>
					Chapter III
					<div class="sub-title" @click="goTo(3, true)">The journey</div>
				</div>
				<div>
					Chapter IV
					<div class="sub-title" @click="goTo(4, true)">The epiphany</div>
				</div>
				<div>
					Chapter V
					<div class="sub-title" @click="goTo(5)">The new kingdom</div>
				</div>
			</div>
			<img src="../assets/hero_avatar.png" />
		</div>
	</div>
</template>

<script>
const pages = ['FirstPage', 'About', 'OldKingdom', 'Alternatives', 'Proposal'];
export default {
	methods: {
		goTo(chapter, firstPage) {
			if (chapter == pages.length) {
				window.history.pushState(null, null, '/landing-page');
				// window.location = '/landing-page';
			} else {
				this.$router.push({
					name: pages[chapter],
					params: firstPage ? { page: 1 } : {}
				});
			}
		}
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
		}

		> img {
			width: 366px;
			height: 342px;
			place-self: center;
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
