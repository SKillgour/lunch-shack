import Link from "next/link";

const bakeryItems = [
  { name: "Classic Meat Pie", desc: "Proper pastry, beefy filling, the real deal", price: "$5.50" },
  { name: "Bacon & Egg Pie", desc: "Thick-cut bacon, whole eggs, flaky pastry", price: "$5.50" },
  { name: "Sausage Roll", desc: "Pork and herb, proper golden pastry", price: "$4.50" },
  { name: "Cheese & Mince Roll", desc: "Because sometimes you want both", price: "$5.50" },
  { name: "Filled Roll (today's fillings vary)", desc: "Ask at the counter for today's options", price: "$8-$10" },
  { name: "Muffin of the Day", desc: "Sweet or savoury, ask at the counter", price: "$4.50" },
  { name: "Cinnamon Scroll", desc: "Soft, sweet, made fresh", price: "$5.00" },
];

const hotLunchItems = [
  { name: "Soup of the Day", desc: "Served with a roll. Ask at the counter", price: "$10" },
  { name: "Toasted Sandwich", desc: "Two fillings of your choice, pressed golden", price: "$12" },
  { name: "Loaded Roll", desc: "Chicken / Beef / Veggie, ask for today's", price: "$13" },
  { name: "Burger of the Day", desc: "Check the board", price: "$14-$16" },
];

const coffeeItems = [
  { name: "Flat White / Latte / Cappuccino", desc: "", price: "$5.50" },
  { name: "Long Black / Americano", desc: "", price: "$5.00" },
  { name: "Chai Latte / Turmeric Latte", desc: "", price: "$6.00" },
  { name: "Kids Hot Choc", desc: "", price: "$4.50" },
];

const coldDrinkItems = [
  { name: "Milkshakes", desc: "Chocolate, vanilla, caramel, strawberry", price: "$7" },
  { name: "Juice / Water / Soft Drinks", desc: "", price: "$3.50+" },
];

type MenuItem = { name: string; desc: string; price: string };

function MenuSection({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: MenuItem[];
}) {
  return (
    <div className="ls-menu-block ls-reveal">
      <style>{`
        .ls-menu-block {
          margin-bottom: 3.5rem;
        }
        .ls-menu-block-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .ls-menu-block-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.6rem;
          color: var(--color-primary);
          border-left: 5px solid var(--color-accent);
          padding-left: 1rem;
        }
        .ls-menu-block-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
        }
        .ls-menu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--color-surface);
          gap: 1.5rem;
        }
        .ls-menu-row:last-child {
          border-bottom: none;
        }
        .ls-menu-row-left {
          flex: 1;
        }
        .ls-menu-row-name {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.98rem;
          color: var(--color-text);
          margin-bottom: 0.15rem;
        }
        .ls-menu-row-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .ls-menu-row-price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--color-accent);
          white-space: nowrap;
        }
      `}</style>
      <div className="ls-menu-block-header">
        <h2 className="ls-menu-block-title">{title}</h2>
        {note && <span className="ls-menu-block-note">{note}</span>}
      </div>
      {items.map((item) => (
        <div key={item.name} className="ls-menu-row">
          <div className="ls-menu-row-left">
            <p className="ls-menu-row-name">{item.name}</p>
            {item.desc && <p className="ls-menu-row-desc">{item.desc}</p>}
          </div>
          <span className="ls-menu-row-price">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="ls-menu-hero">
        <style>{`
          .ls-menu-hero {
            background-color: var(--color-primary);
            padding: 7rem 0 4rem;
            color: var(--color-text-on-dark);
          }
          .ls-menu-hero-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .ls-menu-hero-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(3rem, 7vw, 5.5rem);
            line-height: 1.0;
            color: #fff;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .ls-menu-hero-sub {
            font-size: 1.1rem;
            color: rgba(245,240,232,0.7);
            max-width: 480px;
            line-height: 1.6;
          }
        `}</style>
        <div className="container">
          <p className="ls-menu-hero-kicker">Lunch Shack, Hawera</p>
          <h1 className="ls-menu-hero-heading">The Menu</h1>
          <p className="ls-menu-hero-sub">Fresh every day. Cabinet closes when it's gone.</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="ls-menu-content">
        <style>{`
          .ls-menu-content {
            padding: 5rem 0;
            background-color: var(--color-bg);
          }
          .ls-menu-content-inner {
            max-width: 760px;
          }
          .ls-menu-footer-note {
            background-color: var(--color-surface);
            border-left: 4px solid var(--color-accent);
            padding: 1.25rem 1.5rem;
            border-radius: 0 var(--radius) var(--radius) 0;
            font-size: 0.88rem;
            color: var(--color-text-muted);
            line-height: 1.65;
            margin-top: 1rem;
          }
          .ls-menu-cta-row {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--color-surface);
          }
        `}</style>
        <div className="container">
          <div className="ls-menu-content-inner">
            <MenuSection
              title="Bakery"
              note="Baked from 6am"
              items={bakeryItems}
            />
            <MenuSection
              title="Hot Lunch"
              note="Served from 11am, closes 2pm (1pm Sat)"
              items={hotLunchItems}
            />
            <MenuSection
              title="Coffee"
              items={coffeeItems}
            />
            <MenuSection
              title="Cold Drinks"
              items={coldDrinkItems}
            />

            <p className="ls-menu-footer-note ls-reveal">
              Menu changes daily. Cabinet items vary by season and availability. Check Facebook for updates.
            </p>

            <div className="ls-menu-cta-row">
              <Link href="/contact" className="ls-btn-primary">
                Find Us
              </Link>
              <a
                href="https://www.facebook.com/lunchshack"
                target="_blank"
                rel="noopener noreferrer"
                className="ls-btn-ghost-dark"
              >
                Check Facebook for today's cabinet
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
