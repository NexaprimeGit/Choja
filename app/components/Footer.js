export default function Footer() {
  return (
    <footer className="theme-footer py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-8 text-black">

        <div>
          <div className="flex items-center gap-2 font-semibold text-black">
            <div className="w-6 h-6 bg-white rounded-md"></div>
            Golo
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-black">Explore Golo</h4>
          <p className="text-black">Home</p>
          <p className="text-black">Categories</p>
          <p className="text-black">Deals</p>
          <p className="text-black">Trending</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-black">Language & Location</h4>
          <p className="text-black">English (US)</p>
          <p className="text-black">India</p>
          <p className="text-black">Change Location</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-black">Help & Support</h4>
          <p className="text-black">About Us</p>
          <p className="text-black">Contact Us</p>
          <p className="text-black">Support Center</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-black">Legal</h4>
          <p className="text-black">Privacy Policy</p>
          <p className="text-black">Terms of Service</p>
          <p className="text-black">Cookie Policy</p>
        </div>

      </div>
    </footer>
  );
}