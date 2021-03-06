import { PrefixComponentBase } from '../../AWML/src/components/prefix_component_base.js';
import { callUnsubscribe } from '../utils.js';
import { findTemplateComponent } from '../template_components.js';

class AES70ObjectTemplate extends PrefixComponentBase {
  constructor() {
    super();
    this._cloneNode = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.display = null;
    this.setAttribute('src', '');
  }

  _valueReceived(o) {
    if (this._cloneNode !== null) {
      this._cloneNode.remove();
      this._cloneNode = null;
    }

    const tagName = findTemplateComponent(o);

    if (!tagName)
      return;

    this._cloneNode = document.createElement(tagName);
    this.appendChild(this._cloneNode);
  }
}

customElements.define('aes70-object-template', AES70ObjectTemplate);
