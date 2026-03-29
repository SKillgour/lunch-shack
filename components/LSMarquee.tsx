export default function LSMarquee() {
  const items = [
    "FRESH DAILY",
    "CABINET FOOD",
    "BAKED IN HAWERA",
    "GRAB AND GO",
    "FRESH DAILY",
    "CABINET FOOD",
    "BAKED IN HAWERA",
    "GRAB AND GO",
    "FRESH DAILY",
    "CABINET FOOD",
    "BAKED IN HAWERA",
    "GRAB AND GO",
    "FRESH DAILY",
    "CABINET FOOD",
    "BAKED IN HAWERA",
    "GRAB AND GO",
  ];

  return (
    <div className="ls-marquee-strip" aria-hidden="true">
      <div className="ls-marquee-track">
        {items.map((item, i) => (
          <span key={i} className="ls-marquee-item">
            {item}
            <span className="ls-marquee-dot">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
