import { useState } from 'react';
import './index.css';
import { supabase } from "./supabase";
const whatsappNumber = '2348163485829';

function App() {
  const [room, setRoom] = useState('Living Room');
  const [mood, setMood] = useState('Luxury Contemporary');
  const [items, setItems] = useState(['Sofa', 'Rug', 'Light', 'Art']);
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Residential",
    message: "",
  });
  const toggleItem = (item) => {
    setItems((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

 const sendWhatsApp = async () => {
  await supabase.from("leads").insert([
    {
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      project: lead.project,
      message:
        lead.message +
        "\n\nRoom: " +
        room +
        "\nMood: " +
        mood +
        "\nSelected Elements: " +
        items.join(", "),
    },
  ]);

  const message = encodeURIComponent(
    "Hello Maison A+,\n\n" +
      "Name: " + lead.name + "\n" +
      "Phone: " + lead.phone + "\n" +
      "Email: " + lead.email + "\n" +
      "Project: " + lead.project + "\n" +
      "Room: " + room + "\n" +
      "Mood: " + mood + "\n" +
      "Selected Elements: " + items.join(", ") + "\n\n" +
      "Message: " + lead.message
  );

  window.open("https://wa.me/2349129609443?text=" + message, "_blank");
}

  return (
    <main>
      <nav className="nav">
        <div className="logo">Maison A+</div>
        <div className="nav-links">
        <a href="#studio">Studio</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
        </div>
        <button onClick={sendWhatsApp}>Book Consultation</button>
      </nav>

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Maison A+ Luxury Interior Design</p>

            <h1>What does your space say about you?</h1>

            <p className="hero-text">
              Whether you want a refined family home, a high-performing office,
              or a short-let that attracts premium guests, Maison A+ designs
              spaces that feel luxurious, functional, and unforgettable.
            </p>

            <div className="path-selector">
              <button onClick={() => setRoom("Living Room")}>I want a luxury home</button>
              <button onClick={() => setRoom("Office")}>I want a better office</button>
              <button onClick={() => setRoom("Short-let Apartment")}>I want a profitable short-let</button>
            </div>

            <div className="hero-actions">
              <button onClick={sendWhatsApp} className="gold-btn">
                Get My Space Concept
              </button>
              <a href="#studio" className="ghost-btn">
                Try Design Studio
              </a>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="image-card large"></div>

            <div className="luxury-note top-note">
              <span>Selected Space</span>
              <strong>{room}</strong>
            </div>

            <div className="luxury-note bottom-note">
              <span>Maison A+ Promise</span>
              <strong>Beauty + Functionality</strong>
            </div>
          </div>
        </section>

        <section className="trust-strip">
        <span>3D Design</span>
        <span>Lighting Selection</span>
        <span>Mood Boards</span>
        <span>Project Management</span>
        <span>Custom Styling</span>
        </section>

        <section id="studio" className="studio">
        <div className="section-head">
        <p className="eyebrow">Interactive Studio</p>
        <h2>Experiment with your desired space.</h2>
        <p>Choose a room, select a mood, add decor elements, then send your concept to Maison A+.</p>
        </div>

        <div className="studio-layout">
        <div className="studio-panel">
        <label>Room Type</label>
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
        <option>Living Room</option>
        <option>Bedroom</option>
        <option>Kitchen</option>
        <option>Office</option>
        <option>Reception</option>
        <option>Short-let Apartment</option>
        </select>

        <label>Design Mood</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option>Luxury Contemporary</option>
        <option>Warm Minimal</option>
        <option>Corporate Luxe</option>
        <option>Modern Classic</option>
        </select>

        <label>Decor Elements</label>
        <div className="chips">
        {['Sofa', 'Rug', 'Light', 'Art', 'Plant', 'Desk'].map((item) => (
        <button
        key={item}
        onClick={() => toggleItem(item)}
        className={items.includes(item) ? 'chip active' : 'chip'}
        >
        {item}
        </button>
        ))}
        </div>

        <button onClick={sendWhatsApp} className="full-btn">Send My Concept</button>
        </div>

        <div className="room-stage">
        <div className="room-label">
        <strong>{room}</strong>
        <span>{mood}</span>
        </div>

        {items.includes('Light') && <div className="decor light">Pendant Light</div>}
        {items.includes('Art') && <div className="decor art">Feature Art</div>}
        {items.includes('Sofa') && <div className="decor sofa">Curved Sofa</div>}
        {items.includes('Rug') && <div className="decor rug">Textured Rug</div>}
        {items.includes('Plant') && <div className="decor plant">Plant</div>}
        {items.includes('Desk') && <div className="decor desk">Desk</div>}

        <div className="floor-glow"></div>
        </div>
        </div>
        </section>

        <section id="portfolio" className="portfolio">
        <div className="section-head">
        <p className="eyebrow">Portfolio</p>
        <h2>Spaces designed to impress and function beautifully.</h2>
        </div>

        <div className="portfolio-grid">
        <div className="project p1"><span>Luxury Living Room</span></div>
        <div className="project p2"><span>Modern Office</span></div>
        <div className="project p3"><span>Elegant Kitchen</span></div>
        <div className="project p4"><span>Short-let Styling</span></div>
        </div>
        </section>

        <section id="process" className="process">
        <div className="section-head light">
        <p className="eyebrow">Our Process</p>
        <h2>From idea to elegant execution.</h2>
        </div>

        <div className="steps">
        {['Discovery', 'Mood Board', '3D Design', 'Quotation', 'Execution'].map((step, index) => (
        <div className="step" key={step}>
        <span>{index + 1}</span>
        <h3>{step}</h3>
        <p>Clear, guided, and transparent from the first conversation to final reveal.</p>
        </div>
        ))}
        </div>
        </section>

        <section className="reviews">
        <h2>Client Experience</h2>
        <div className="review-card">
        Maison A+ transformed our space into something elegant practical and unforgettable.
        </div>
        </section>
        
        <section id="lead-form" className="lead-form">
        <div className="lead-form">
          <input placeholder="Full Name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
          <input placeholder="Phone / WhatsApp" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
          <input placeholder="Email Address" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
          <select value={lead.project} onChange={(e) => setLead({ ...lead, project: e.target.value })}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Short-let / Airbnb</option>
            <option>Hospitality</option>
            <option>Retail</option>
          </select>
          <textarea placeholder="Tell us about your project" value={lead.message} onChange={(e) => setLead({ ...lead, message: e.target.value })}></textarea>
        </div>
        </section>
       
        <section id="contact" className="contact">
        <div>
        <p className="eyebrow">Contact</p>
        <h2>Ready to love your space?</h2>
        <p>Phone / WhatsApp: +234 816 348 5829</p>
        <p>Email: Akiri.akel@outlook.com</p>
        <p>Location: 9 Tosin Agbet Street, Lagos, Nigeria</p>
        <p>Instagram / TikTok: @MaisonAPlus</p>
        </div>
        <button onClick={sendWhatsApp} className="gold-btn">WhatsApp Maison A+</button>
        </section>
        </main>
        );
        }

        export default App;
