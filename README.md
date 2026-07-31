# Medik8 Technical Test

Solution for the **Medik8 Front-End Technical Assessment (Option Two – Product Highlight Section)**.

## Access

**GitHub Repository**

https://github.com/phuchudev/medik8-technical-test

**Pull Request**

https://github.com/phuchudev/medik8-technical-test/pulls

**Shopify Store**

https://medik8-tech-test-dev-phu-chu.myshopify.com

**Storefront Password**

`rtetre`

> The Product Highlight section has been deployed to the published **DEV_PC** development theme.

> If you'd like to review the implementation within the Shopify Theme Editor, I'm happy to provide collaborator access to the development store.

---

## Overview

This implementation adds a configurable **Product Highlight** section to the Shopify Dawn theme.

Features include:

- Configurable heading and description
- Up to three featured products
- Client-side product switching without a page reload
- Responsive layout
- Theme Editor support

---

## Approach

- **Liquid** – renders the section and merchant-configurable settings.
- **JavaScript** – custom Web Component for product switching.
- **CSS** – responsive styling following Dawn conventions.
- **Development** – used `shopify.theme.toml` to connect Shopify CLI to a dedicated development theme.

---

## Assumptions

- A maximum of three featured products.
- The first configured product is displayed by default.
- Products without featured images are supported.

---

## Testing

Verified:

- Product switching
- Theme Editor configuration
- Responsive layout on mobile and desktop

---

## Git Workflow

Development was completed on a dedicated feature branch and submitted through a Pull Request.

```text
main
└── feature/product-highlight-section
```