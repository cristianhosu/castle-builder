<template>
	<div class="host">
		<div class="title">About our hero</div>
		<div class="content">
			<img src="../assets/hero_avatar_simple.png" />
			<div class="wall-of-text">
				<div>Meet <span class="accent">Emil</span></div>
				<div><span class="accent">Emil</span> is a medieval architect to the kings</div>
				<div><span class="accent">Emil</span> has built many castles for kings throughout the land</div>
				<div><span class="accent">Emil</span> will do his best to accomodate both the king's wishes and the people's</div>
				<div>Be like <span class="accent">Emil</span> (think about the people)</div>
			</div>
		</div>
	</div>
</template>

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
			line-height: 3rem;
			margin-left: 4rem;

			> div {
				font-size: 1.6rem;
			}
		}

		> img {
			flex: 0 0 216px;
			width: 216px;
			height: 318px;
			place-self: center;
		}
	}
}

.accent {
	color: var(--accent-color);
}
</style>
