export default function AdCard({ image, title, price, date }) {
  return (
    <div className="ad-card">
      <div className="ad-image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="ad-body">
        <span className="ad-status">Active</span>

        <h3 className="ad-title">{title}</h3>

        <div className="ad-price">${price}</div>

        <div className="ad-date">Posted: {date}</div>

        <div className="ad-buttons">
          <button className="edit-btn">
            ✏ Edit
          </button>

          <button className="delete-btn">
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}
