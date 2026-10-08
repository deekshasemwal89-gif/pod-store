const categories = ["T-shirts", "Hoodies", "Mugs", "Posters"];

const products = [
  "Classic Tee",
  "Pullover Hoodie",
  "Ceramic Mug",
  "Tote Bag",
  "Art Poster",
  "Phone Case",
];

const steps = [
  {
    num: "01",
    title: "Pick a design",
    body: "Browse the collection and choose the product, size and color you want.",
  },
  {
    num: "02",
    title: "We print it",
    body: "Your order is printed on demand, only after you place it.",
  },
  {
    num: "03",
    title: "It ships to you",
    body: "The finished product is packed and sent straight to your door.",
  },
];

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6L5 3H2" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="announce">[YOUR OFFER OR SHIPPING NOTE]</div>

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            [YOUR BRAND]
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#how">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="cart-btn" aria-label="Open cart">
            <CartIcon />
            Cart (0)
          </button>
        </div>
      </header>

      <main id="top">
        <section className="container hero">
          <div className="hero-copy">
            <div className="eyebrow">Custom prints, made to order</div>
            <h1>[YOUR HEADLINE GOES HERE]</h1>
            <p className="hero-lead">
              One or two lines about what you sell and why it is worth buying.
              Every item is printed only after it is ordered.
            </p>
            <div className="hero-actions">
              <a href="#shop" className="btn btn-primary">
                Shop the collection
              </a>
              <a href="#how" className="btn btn-outline">
                How it works
              </a>
            </div>
          </div>
          <div className="hero-media">[HERO IMAGE: product mockup]</div>
        </section>

        <section id="collections" className="categories">
          <div className="container categories-inner">
            <h2 className="section-title">Shop by category</h2>
            <div className="category-row">
              {categories.map((name) => (
                <a key={name} href="#shop" className="category">
                  <span className="category-name">{name}</span>
                  <span className="category-sub">Browse all</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="container shop">
          <div className="shop-head">
            <h2 className="section-title">Featured products</h2>
            <a href="#shop" className="link-accent">
              View all products
            </a>
          </div>
          <div className="product-grid">
            {products.map((name) => (
              <article key={name} className="product">
                <div className="product-photo">[PRODUCT PHOTO]</div>
                <div className="product-meta">
                  <h3 className="product-name">{name}</h3>
                  <span className="product-price">[PRICE]</span>
                </div>
                <a href="#shop" className="btn btn-outline">
                  Add to cart
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="how">
          <div className="container how-inner">
            <h2 className="section-title">How it works</h2>
            <div className="steps">
              {steps.map((s) => (
                <div key={s.num} className="step">
                  <div className="step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container newsletter-wrap">
          <div className="newsletter">
            <div className="newsletter-copy">
              <h2>Get new drops first</h2>
              <p>[YOUR NEWSLETTER PITCH]</p>
            </div>
            <form className="newsletter-form" action="#">
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="footer-cols">
            <div className="footer-brand">
              <div className="logo">[YOUR BRAND]</div>
              <p>[ONE LINE ABOUT YOUR STORE]</p>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Shop</div>
              <a href="#shop">All products</a>
              <a href="#collections">Collections</a>
              <a href="#shop">New arrivals</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Help</div>
              <a href="#contact">Shipping</a>
              <a href="#contact">Returns</a>
              <a href="#contact">Contact us</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Follow</div>
              <a href="#contact">[SOCIAL LINK]</a>
              <a href="#contact">[SOCIAL LINK]</a>
            </div>
          </div>
          <div className="footer-legal">
            © [YEAR] [YOUR BRAND]. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
