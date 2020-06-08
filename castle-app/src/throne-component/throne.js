const template = document.createElement('template');
template.innerHTML = `<!-- ref:./throne.html -->`;

export default class ThroneComponent extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define('castle-throne', ThroneComponent);
