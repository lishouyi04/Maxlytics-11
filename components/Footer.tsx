export default function Footer() {
  return (
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="foot-logo"><span className="img" role="img" aria-label="Maxlytics"></span></div>
              <div className="foot-contact">
                Email: <a href="mailto:info@maxlytics.io">info@maxlytics.io</a><br />
                Phone: +852 3709 2787<br />
                WhatsApp: <a href="#">+852 6793 2957</a><br />
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Organic Marketing</h4>
              <ul><li><a href="#" data-view="seo">SEO</a></li><li><a href="#">AI SEO</a></li><li><a href="#">Social Media Management</a></li><li><a href="#">UI/UX Optimization</a></li><li><a href="#">App Store optimization (ASO)</a></li></ul>
            </div>
            <div className="foot-col">
              <h4>Paid Marketing</h4>
              <ul><li><a href="#">SEM</a></li><li><a href="#">Social Media Ads</a></li><li><a href="#">Mobile Advertising</a></li><li><a href="#">Programmatic Ads</a></li><li><a href="#">Email Marketing (EDM)</a></li></ul>
            </div>
            <div className="foot-col">
              <h4>Multimedia Development</h4>
              <ul><li><a href="#">Website/App Development</a></li><li><a href="#">Creative Design</a></li></ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="legal">
              <a href="#">Privacy</a><a href="#">PDPO</a>
            </div>
            <div className="cp">© 2026 Maxlytics. All rights reserved.</div>
          </div>
        </div>
      </footer>
  );
}
