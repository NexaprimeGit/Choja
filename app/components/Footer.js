export default function Footer() {
  return (
    <footer className="theme-footer py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-8">

        <div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="w-6 h-6 bg-white rounded-md"></div>
            Golo
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore Golo</h4>
          <p className="theme-footer-muted">Home</p>
          <p className="theme-footer-muted">Categories</p>
          <p className="theme-footer-muted">Deals</p>
          <p className="theme-footer-muted">Trending</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Language & Location</h4>
          <p className="theme-footer-muted">English (US)</p>
          <p className="theme-footer-muted">India</p>
          <p className="theme-footer-muted">Change Location</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Help & Support</h4>
          <p className="theme-footer-muted">About Us</p>
          <p className="theme-footer-muted">Contact Us</p>
          <p className="theme-footer-muted">Support Center</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <p className="theme-footer-muted">Privacy Policy</p>
          <p className="theme-footer-muted">Terms of Service</p>
          <p className="theme-footer-muted">Cookie Policy</p>
        </div>

      </div>
    </footer>
  );
}
