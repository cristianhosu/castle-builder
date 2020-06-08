<template>
	<div class="host">
		<div class="title" v-if="currentPage < 4">
			What did Emil end up doing
		</div>
		<div class="title" v-if="currentPage >= 4">
			The tech bits
		</div>
		<div class="content" v-if="currentPage === 1">
			<div class="wall-of-text">
				<div>Many teams... each had their own specialty - each started working independently</div>
				<sub>One team started producing bricks, another started producing wood logs and so on</sub>
				<div>Each team would then bring what they had to the build site</div>
				<div>There Emil started to orchestrate the teams how each should be placed and when and where</div>
				<sub>Everything was done on site, no need for extra space to put it all together</sub>
			</div>
			<div class="team-photo">
				<div class="team-bald">
					<img src="../assets/team_bald.png" />
				</div>
				<div class="team-elf">
					<img src="../assets/team_elf.png" />
				</div>
				<div class="team-ogre">
					<img src="../assets/team_ogres.png" />
				</div>
				<div class="team-lead">
					<img src="../assets/hero_team-lead.png" />
				</div>
			</div>
		</div>
		<div class="content-grid" v-if="currentPage === 2">
			<div>
				<div>
					<div class="accent">Team ogres</div>
					<div>
						They were tasked with building the walls.
					</div>
					<div>The task does not require much brains, but does require some extra strength</div>
				</div>
				<img src="../assets/team_ogres.png" />
			</div>
			<div>
				<div>
					<div class="accent">Team elf</div>
					<div>
						They were tasked with building the baracks
					</div>
					<div>
						This task requires extreme organization and experience in armed combat
					</div>
				</div>
				<img src="../assets/team_elf.png" />
			</div>
		</div>
		<div class="content-grid" v-if="currentPage === 3">
			<div>
				<div>
					<div class="accent">Team mage</div>
					<div>
						They were tasked with building the castle
					</div>
					<div>
						This task requires great organization and some magic to protect the throne room
					</div>
				</div>
				<img src="../assets/team_bald.png" />
			</div>
			<div>
				<div>
					<div class="accent">Emil</div>
					<div>
						He was the one that orchestrated everything
					</div>
					<div>
						He was responsible with organizing everything and assuring that all falls into place
					</div>
				</div>
				<img src="../assets/hero_avatar.png" />
			</div>
		</div>
		<div class="network" v-if="currentPage === 4">
			<div class="graph">
				<d3-network :net-nodes="nodes" :net-links="links" :options="networkOptions" @node-click="nodeSelected" />
			</div>
			<div class="details">
				<div class="accent big" v-if="selectedNode">
					{{ selectedNode.details.title }}
				</div>
				<div class="sub-title" v-if="selectedNode">
					{{ selectedNode.details.scope }}
				</div>
				<div v-if="selectedNode">
					<div v-for="item in selectedNode.details.description" :key="item">- {{ item }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import D3Network from 'vue-d3-network';

export default {
	components: {
		D3Network,
	},
	data() {
		return {
			currentPage: 1,
			nodes: [
				{
					id: 1,
					name: 'Shell App',
					_color: '#eb4417',
					details: {
						title: 'Shell App',
						scope: 'Acts like an orchestrator for all micro apps involved',
						description: [
							'Defines generic routing mechanism to load child apps',
							'Handles lazy loading of each module defined for micro apps',
							'Handles the injection of the entry points into the DOM',
							'Handles the generic layout of the app',
							'Defines generic styles (mostly by using CSS variables)',
							'It does not handle micro app specific routing',
						],
					},
				},
				{
					id: 2,
					name: 'MicroApp',
					_color: '#8B80F9',
					details: {
						title: 'Microapp',
						scope: 'One of the microapps',
						description: [
							'Handles one business domain',
							'Can be developed independently',
							'Can run independently without the shell',
							'Defines entry points and registers them as Web Components',
						],
					},
				},
				{
					id: 21,
					name: 'Entry Component',
					_color: '#8B80F9',
					details: {
						title: 'Microapp Entry Component',
						scope: 'The primary page',
						description: ['The micro app internal giblets all get loaded here', 'Just as any other boring old monolithic app'],
					},
				},
				{
					id: 22,
					name: 'Routed Landing Page',
					_color: '#8B80F9',
					details: {
						title: 'Microapp Landing Page',
						scope: 'First page the user sees',
						description: ['Dashboard page maybe?'],
					},
				},
				{
					id: 23,
					name: 'Routed Detail Page',
					_color: '#8B80F9',
					details: {
						title: 'Microapp Detail Page',
						scope: 'Any other page in the app',
						description: ['Any kind of page...'],
					},
				},
				{
					id: 3,
					name: 'MicroApp',
					_color: '#E4C1F9',
					details: {
						title: 'Microapp',
						scope: 'Another one of the microapps',
						description: [
							'Handles one business domain',
							'Can be developed independently',
							'Can run independently without the shell',
							'Defines entry points and registers them as Web Components',
						],
					},
				},
				{
					id: 31,
					name: 'Entry Component',
					_color: '#E4C1F9',
					details: {
						title: 'Microapp Entry Component',
						scope: 'The primary page',
						description: ['The micro app internal giblets all get loaded here', 'Just as any other boring old monolithic app'],
					},
				},
				{
					id: 32,
					name: 'Menu Component',
					_color: '#E4C1F9',
					details: {
						title: 'Microapp Menu Component',
						scope: 'The navigation component for the MicroApp',
						description: [
							'Gets loaded by the shell app in a dedicated space for navigation',
							'Handles internal navigation for the microapp',
						],
					},
				},
				{
					id: 33,
					name: 'Routed List Page',
					_color: '#E4C1F9',
					details: {
						title: 'Microapp List Page',
						scope: 'A list of... stuff',
						description: ["It's a list... what more can I say"],
					},
				},
				{
					id: 34,
					name: 'Routed Detail Page',
					_color: '#E4C1F9',
					details: {
						title: 'Microapp Detail Page',
						scope: 'A detail page',
						description: ['A detail page for one of the items in the list page...'],
					},
				},
			],
			links: [
				{
					name: 'Routed /app1',
					tid: 2,
					sid: 1,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#eb4417',
				},
				{
					name: 'Entry point',
					tid: 21,
					sid: 2,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#8B80F9',
				},
				{
					name: 'Routed /app1/page1',
					tid: 22,
					sid: 21,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#8B80F9',
				},
				{
					name: 'Routed /app1/page2/:id',
					tid: 23,
					sid: 21,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#8B80F9',
				},
				{
					name: 'Routed /app2',
					tid: 3,
					sid: 1,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#eb4417',
				},
				{
					name: 'Entry point',
					tid: 31,
					sid: 3,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#E4C1F9',
				},
				{
					name: '/app2/list',
					tid: 33,
					sid: 31,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#E4C1F9',
				},
				{
					name: '/app2/list/:id',
					tid: 34,
					sid: 33,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#E4C1F9',
				},
				{
					name: 'MicroApp Menu',
					tid: 32,
					sid: 3,
					_svgAttrs: { 'stroke-width': 8, opacity: 0.6 },
					_color: '#E4C1F9',
				},
			],
			networkOptions: {
				canvas: false,
				force: 10000,
				nodeSize: 40,
				fontSize: 12,
				linkWidth: 10,
				nodeLabels: true,
				linkLabels: true,
				forces: {
					X: 1,
					Y: 1,
					Center: false,
					ManyBody: true,
				},
			},
			selectedNode: null,
		};
	},
	watch: {
		$route(to) {
			this.currentPage = to.params.page;
		},
	},
	mounted() {
		this.currentPage = parseInt(this.$router.currentRoute.params.page) || 1;
	},
	methods: {
		nodeSelected: function(event, node) {
			this.selectedNode = node;
		},
	},
};
</script>

<style lang="scss" scoped>
.host {
	padding: 5rem 10rem;
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
		gap: 3rem;

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

		.team-photo {
			flex: 1;
			display: grid;
			grid-template-areas:
				'. . . . teamelf . . . .'
				'. . . . teamelf . . . .'
				'. . . . teamelf . . . .'
				'. . . . teamelf . . . .'
				'. . teambald . . . teamogres . .'
				'. . teambald . . . teamogres . .'
				'. . teambald . . . teamogres . .'
				'. . teambald . teamlead . teamogres . .'
				'. . . . teamlead . . . .'
				'. . . . teamlead . . . .'
				'. . . . teamlead . . . .';

			.team-bald {
				grid-area: teambald;
			}

			.team-elf {
				grid-area: teamelf;
			}

			.team-ogre {
				grid-area: teamogres;
			}

			.team-lead {
				grid-area: teamlead;
			}
		}
	}

	> .content-grid {
		display: flex;
		flex-direction: column;

		> div {
			margin-bottom: 2rem;
			font-size: 1.6rem;
			display: flex;
			flex-direction: row;
			gap: 3rem;
			> div {
				flex: 0 0 60%;
			}
			> img {
				height: 200px;
			}
		}

		> sub {
			font-size: 1rem;
			font-weight: 200;
			display: block;
			padding-left: 1rem;
		}
	}

	> .network {
		display: flex;
		flex-direction: row;

		> .graph {
			flex: 2;
		}

		> .details {
			flex: 1;
		}
	}
}

.sub-title {
	padding-left: 1rem;
	margin-bottom: 3rem;
	font-size: 1.6rem;
	color: var(--primary-color);
	text-decoration: none;
}

.accent {
	color: var(--accent-color);

	&.big {
		font-size: 1.6rem;
	}
}

canvas {
	position: absolute;
	top: 0;
	left: 0;
}
.net {
	height: 100%;
	margin: 0;
}
.node {
	stroke: rgba(18, 120, 98, 0.7);
	stroke-width: 3px;
	-webkit-transition: fill 0.5s ease;
	transition: fill 0.5s ease;
	fill: #dcfaf3;
}
.node.selected {
	stroke: #caa455;
}
.node.pinned {
	stroke: rgba(190, 56, 93, 0.6);
}
.link {
	stroke: rgba(18, 120, 98, 0.3);
}
.link,
.node {
	stroke-linecap: round;
}
.link:hover,
.node:hover {
	stroke: #be385d;
	stroke-width: 5px;
}
.link.selected {
	stroke: rgba(202, 164, 85, 0.6);
}
.curve {
	fill: none;
}
.link-label,
.node-label {
	fill: #127862;
}
.link-label {
	-webkit-transform: translateY(-0.5em);
	transform: translateY(-0.5em);
	text-anchor: middle;
}
</style>
