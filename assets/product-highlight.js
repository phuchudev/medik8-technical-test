/**
 * Product Highlight
 *
 * Custom element that manages product selection and updates
 * the featured product content without reloading the page.
 */
class ProductHighlight extends HTMLElement {
  /**
   * Initializes the component and binds event handlers.
   */
  constructor() {
    super();

    this.onProductSelect = this.onProductSelect.bind(this);
  }

  /**
   * Caches DOM elements and registers event listeners.
   */
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;

    this.productButtons = this.querySelectorAll('[js-product-highlight="item"]');

    this.imageElement = this.querySelector('[js_product_highlight="image"]');
    this.titleElement = this.querySelector('[js-product-highlight="title"]');
    this.priceElement = this.querySelector('[js-product-highlight="price"]');
    this.descriptionElement = this.querySelector('[js-product-highlight="description"]');
    this.linkElement = this.querySelector('[js-product-highlight="link"]');

    this.productButtons.forEach((button) => {
      button.addEventListener('click', this.onProductSelect);
    });
  }

  /**
   * Removes event listeners when the component is disconnected.
   */
  disconnectedCallback() {
    this.productButtons.forEach((button) => {
      button.removeEventListener('click', this.onProductSelect);
    });
  }

  /**
   * Handles product selection and updates the featured product.
   *
   * @param {Event} event
   */
  onProductSelect(event) {
    const activeButton = event.currentTarget;
    let productData;

    try {
      productData = JSON.parse(activeButton.dataset.product);
    } catch (error) {
      console.error(error);
      return;
    }

    this.productButtons.forEach((button) => {
      button.classList.toggle('is-active', button === activeButton);
      button.setAttribute('aria-pressed', button === activeButton);
    });

    this.updateProduct(productData);
  }

  /**
   * Updates the featured product content.
   *
   * @param {Object} productData
   */
  updateProduct(productData) {
    if (!productData) return;

    const {
      title,
      price,
      description,
      image,
      imageAlt,
      url,
    } = productData;

    if (this.imageElement && image) {
      this.imageElement.src = image;
      this.imageElement.removeAttribute('srcset');
      this.imageElement.alt = imageAlt;
    }

    this.titleElement.textContent = title;
    this.priceElement.textContent = price;
    this.descriptionElement.textContent = description;
    this.linkElement.href = url;
  }
}

customElements.define('product-highlight', ProductHighlight);