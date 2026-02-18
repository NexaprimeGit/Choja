import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function IWant() {
  return (
    <>
      <Navbar />

      <div className="iwant-wrapper">
        <div className="iwant-container">

          {/* LEFT SIDE */}
          <div className="iwant-left">

            <h1>Post Your Requirement</h1>
            <p className="subtitle">
              Reach thousands of potential buyers by providing clear details about your offering.
            </p>

            <div className="section">
              <h3>Ad Details</h3>
              <p className="section-sub">
                Fill out the primary information for your listing
              </p>
            </div>

            {/* Category */}
            <div className="form-group">
              <label>LISTING CATEGORY</label>
              <select>
                <option>Select a category</option>
              </select>
            </div>

            {/* Title */}
            <div className="form-group">
              <label>AD TITLE</label>
              <input
                type="text"
                placeholder="e.g., MacBook Pro M3 Max - Barely Used, Pristine Condition"
              />
              <span className="hint">
                Catchy titles lead to 40% more clicks.
              </span>
            </div>

            {/* Description */}
            <div className="form-group">
              <label>DETAILED DESCRIPTION</label>
              <textarea
                placeholder="Describe what you're offering. Include key features, condition, or requirements..."
              />
              <div className="char-count">
                <span>Minimum characters recommended.</span>
                <span>0 / 2000</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="form-buttons">
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save & Continue</button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="iwant-right">

            {/* Tips Box */}
            <div className="tips-box">
              <h4>📣 Pro Listing Tips</h4>

              <div className="tip-card">
                <strong>Be Specific</strong>
                <p>Vague descriptions often get ignored. Use technical specs and clear dates.</p>
              </div>

              <div className="tip-card">
                <strong>Pricing Matters</strong>
                <p>Research similar ads on Golo to ensure your price point is competitive.</p>
              </div>

              <div className="tip-card">
                <strong>Trust Building</strong>
                <p>Mention why you are selling or providing the service to build instant rapport.</p>
              </div>
            </div>

            {/* Upload Box */}
            <div className="upload-box">
              <div className="plus">+</div>
              <h4>Add Media</h4>
              <p>High-quality photos increase buyer interest by up to 5x.</p>
              <button>Upload Photos</button>
            </div>

            {/* Requirements */}
            <div className="requirements-box">
              <h4>Listing Requirements</h4>
              <ul>
                <li>Must comply with Golo's Community Terms.</li>
                <li>Images must be at least 1200px wide.</li>
                <li>No external links in descriptions.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
