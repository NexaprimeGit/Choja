export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="w-6 h-6 bg-white rounded-md"></div>
            Golo
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore Golo</h4>
          <p>Home</p>
          <p>Categories</p>
          <p>Deals</p>
          <p>Trending</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Language & Location</h4>
          <p>English (US)</p>
          <p>India</p>
          <p>Change Location</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Help & Support</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Support Center</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
