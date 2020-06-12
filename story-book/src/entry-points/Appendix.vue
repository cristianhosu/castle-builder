<template>
	<div class="host">
		<div class="title">
			<span>Ye ol' agenda</span>
		</div>
		<div class="content">
			<div class="wall-of-text">
				<div
					@click="changeIframe('https://blog.bitsrc.io/state-of-micro-frontends-9c0c604ed13a')"
				>State of microfrontends - Florian Rappl</div>
				<div @click="changeIframe('https://micro-frontends.org/')">Microfronteds website - Michael Geers</div>
				<div
					@click="changeIframe('https://martinfowler.com/articles/micro-frontends.html')"
				>Microfronteds - Cam Jackson</div>
				<div
					@click="changeIframe('https://zendev.com/2019/06/17/microfrontends-good-bad-ugly.html')"
				>Microfronteds - The good, the bad, the ugly</div>
			</div>
			<div class="iframe">
				<iframe height="100%" width="100%" :src="url"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: ''
		};
	},
	methods: {
		changeIframe(url) {
			this.url = url;
		}
	}
};
</script>

<style lang="scss" scoped>
.host {
	padding: 2rem 10rem;
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
		height: 100%;
		gap: 10px;
		> .wall-of-text {
			flex: 0 0 30%;

			> div {
				font-size: 1.6rem;

				&:hover {
					cursor: pointer;
				}
			}
		}

		> .iframe {
			flex: 1;
			place-self: center;
			height: 100%;
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