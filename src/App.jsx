import "./index.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Maison A+</p>
          <h1>Your Space. Your Story. Our Expertise.</h1>
          <p>
            Luxury interior design, space planning, 3D design, lighting
            selection, mood boards, project management, and functional spaces
            designed beautifully.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn gold">Book Consultation</a>
            <a href="#studio" className="btn outline">Try Design Studio</a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Where Creativity Meets Functionality</h2>
          <p>Homes · Offices · Short-lets · Hospitality · Retail Spaces</p>
        </div>
      </section>

      <section id="studio" className="section">
        <h2>Interactive Design Studio</h2>
        <p>
          This section will let clients experiment with room style, furniture,
          colour palettes, lighting, and décor elements.
        </p>

        <div className="studio-box">
          <div className="room">
            <div className="sofa">Sofa</div>
            <div className="rug">Rug</div>
            <div className="plant">Plant</div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <h2>Lead Funnel</h2>
        <p>Capture client project type, budget, timeline, style, and contact details.</p>

        <form className="form">
          <input placeholder="Full Name" />
          <input placeholder="Phone / WhatsApp" />
          <input placeholder="Email Address" />
          <select>
            <option>Residential Project</option>
            <option>Commercial Project</option>
            <option>Short-let / Airbnb</option>
            <option>Hospitality / Retail</option>
          </select>
          <textarea placeholder="Tell us about your project"></textarea>
            <button
                type="button"
                onClick={() => {
                    const name = document.querySelector('input[placeholder=\"Full Name\"]').value;
                    const phone = document.querySelector('input[placeholder=\"Phone / WhatsApp\"]').value;
                    const email = document.querySelector('input[placeholder=\"Email Address\"]').value;
                    const project = document.querySelector('select').value;
                    const details = document.querySelector('textarea').value;

                    const message = `Hello Maison A+,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AProject Type: ${project}%0A%0ADetails:%0A${details}`;

                    window.open(`https://wa.me/2349129609443?text=${message}`, '_blank');
                }}
                >
                Request Consultation
          </button>
        </form>
      </section>

      <section className="section">
        <h2>Project Gallery</h2>
        <div className="gallery">
          <div>Living Room</div>
          <div>Office</div>
          <div>Kitchen</div>
          <div>Bedroom</div>
        </div>
      </section>

      <section className="section">
        <h2>Client Reviews</h2>
        <blockquote>
          “Maison A+ turned our space into something elegant, practical, and unforgettable.”
        </blockquote>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Maison A+</h2>
        <p>Phone / WhatsApp: +234 816 348 5829</p>
        <p>Email: Akiri.akel@outlook.com</p>
        <p>Location: 9 Tosin Agbet Street, Lagos, Nigeria</p>
        <p>Instagram / TikTok: @MaisonAPlus</p>
      </section>
    </main>
  );
}

export default App;