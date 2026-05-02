import { useState } from 'react';
import './index.css';
import { supabase } from "./supabase";
const whatsappNumber = '2348163485829';
const optionDescriptions = {
  "Living Room": "A welcoming social space for relaxing, entertaining guests, and expressing your personal taste.",
  "Bedroom": "A calm private retreat focused on comfort, storage, softness, lighting, and restful luxury.",
  "Kitchen": "A functional cooking and gathering space designed around workflow, storage, durability, and beauty.",
  "Office": "A productive professional space that improves focus, client perception, comfort, and brand confidence.",
  "Reception": "A first-impression space designed to communicate trust, professionalism, and premium brand value.",
  "Short-let Apartment": "A guest-focused space designed to photograph beautifully, improve bookings, and feel memorable.",

  "Luxury Contemporary": "Refined, polished, and elegant with premium finishes, statement pieces, and layered lighting.",
  "Warm Minimal": "Clean and uncluttered, but still soft, welcoming, practical, and comfortable for daily living.",
  "Corporate Luxe": "Professional, structured, and impressive with executive finishes and smart functional planning.",
  "Modern Classic": "A timeless blend of classic elegance and modern comfort for a sophisticated, lasting interior.",

  "₦500k–₦2m": "Best for focused refreshes, styling, selected furniture, lighting updates, and smaller transformation areas.",
  "₦2m–₦8m": "Ideal for full room transformations, custom furniture, richer materials, and stronger design impact.",
  "₦8m+ turnkey luxury": "Best for full-service luxury execution, premium finishes, custom works, procurement, and installation.",

  "Elegant family living": "A beautiful but practical home environment that supports children, guests, storage, and daily comfort.",
  "Client-facing professionalism": "A polished business environment that helps clients trust your brand from the moment they enter.",
  "Premium guest experience": "A memorable short-let or hospitality experience designed for comfort, photos, reviews, and repeat bookings.",
  "Calm personal retreat": "A quiet, relaxing environment with soft textures, soothing colours, and thoughtful lighting."
};
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
  const [studioStep, setStudioStep] = useState(1);
  const [budget, setBudget] = useState("₦500k–₦2m");
  const [lifestyle, setLifestyle] = useState("Elegant family living");
  const [afterView, setAfterView] = useState(true);
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
      "Budget: " + budget + "\n" +
      "Lifestyle: " + lifestyle + "\n" +
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
          <p className="eyebrow">Design Studio</p>
          <h2>Design your space in 60 seconds.</h2>
          <p>
            Answer a few visual questions and Maison A+ will shape your concept
            direction around your room, lifestyle, investment range, and design mood.
          </p>
        </div>

        <div className="studio-progress">
          <div style={{ width: `${studioStep * 25}%` }}></div>
        </div>

        <div className="studio-layout">
          <div className="studio-panel">
            <p className="step-label">Step {studioStep} of 4</p>

            {studioStep === 1 && (
              <>
                <h3>What space are we transforming?</h3>
                <div className="option-grid">
                  {["Living Room", "Bedroom", "Kitchen", "Office", "Reception", "Short-let Apartment"].map((x) => (
                    <button
                      key={x}
                      onClick={() => setRoom(x)}
                      className={room === x ? "option active" : "option"}
                    >
                      <strong>{x}</strong>
                      <span>{optionDescriptions[x]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {studioStep === 2 && (
              <>
                <h3>What feeling should the space create?</h3>
                <div className="option-grid">
                  {["Luxury Contemporary", "Warm Minimal", "Corporate Luxe", "Modern Classic"].map((x) => (
                    <button
                      key={x}
                      onClick={() => setMood(x)}
                      className={mood === x ? "option active" : "option"}
                    >
                      <strong>{x}</strong>
                      <span>{optionDescriptions[x]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {studioStep === 3 && (
              <>
                <h3>What is your investment range?</h3>
                <div className="option-grid">
                  {["₦500k–₦2m", "₦2m–₦8m", "₦8m+ turnkey luxury"].map((x) => (
                    <button
                      key={x}
                      onClick={() => setBudget(x)}
                      className={budget === x ? "option active" : "option"}
                    >
                      <strong>{x}</strong>
                      <span>{optionDescriptions[x]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {studioStep === 4 && (
              <>
                <h3>What lifestyle should the design support?</h3>
                <div className="option-grid">
                  {["Elegant family living", "Client-facing professionalism", "Premium guest experience", "Calm personal retreat"].map((x) => (
                    <button
                      key={x}
                      onClick={() => setLifestyle(x)}
                      className={lifestyle === x ? "option active" : "option"}
                    >
                      <strong>{x}</strong>
                      <span>{optionDescriptions[x]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="studio-nav">
              <button
                disabled={studioStep === 1}
                onClick={() => setStudioStep(studioStep - 1)}
              >
                Back
              </button>

              {studioStep < 4 ? (
                <button onClick={() => setStudioStep(studioStep + 1)}>
                  Next
                </button>
              ) : (
                <button onClick={sendWhatsApp} className="gold-btn">
                  Send My Concept
                </button>
              )}
            </div>
          </div>

          <div className="room-stage">
            <div className="room-label">
              <strong>{room}</strong>
              <span>{mood}</span>
            </div>

            <div className="concept-card">
              <span>Your Maison A+ Concept</span>
              <h3>
                {mood} for {lifestyle}
              </h3>
              <p>
                Recommended direction: layered lighting, smart space planning,
                premium textures, and functional elegance within {budget}.
              </p>
            </div>

            {items.includes("Light") && <div className="decor light">Pendant Light</div>}
            {items.includes("Art") && <div className="decor art">Feature Art</div>}
            {items.includes("Sofa") && <div className="decor sofa">Curved Sofa</div>}
            {items.includes("Rug") && <div className="decor rug">Textured Rug</div>}
            {items.includes("Plant") && <div className="decor plant">Plant</div>}
            {items.includes("Desk") && <div className="decor desk">Desk</div>}

            <div className="floor-glow"></div>
          </div>
        </div>
      </section>

      <section className="transformation">
        <div className="section-head">
          <p className="eyebrow">Before / After</p>
          <h2>See how thoughtful design changes everything.</h2>
          <p>
            A Maison A+ transformation is not just about decoration. It is about
            better flow, stronger first impressions, improved comfort, and spaces
            that feel valuable.
          </p>
        </div>

        <div className="transform-layout">
          <div className={afterView ? "transform-card after" : "transform-card before"}>
            <div className="transform-overlay">
              <span>{afterView ? "After Maison A+" : "Before Maison A+"}</span>
              <h3>
                {afterView
                  ? "Layered lighting, premium textures, functional layout."
                  : "Unused corners, weak lighting, unclear style direction."}
              </h3>
            </div>
          </div>

          <div className="transform-panel">
            <h3>Transformation Preview</h3>
            <p>
              Toggle between before and after to understand how strategic design
              upgrades perception, usability, and emotional value.
            </p>

            <button onClick={() => setAfterView(!afterView)} className="gold-btn">
              Show {afterView ? "Before" : "After"}
            </button>

            <div className="impact-list">
              <div>
                <strong>+ Better flow</strong>
                <span>Space planning makes movement easier.</span>
              </div>
              <div>
                <strong>+ Higher perceived value</strong>
                <span>Premium finishes improve first impression.</span>
              </div>
              <div>
                <strong>+ More comfort</strong>
                <span>Lighting, furniture, and layout support daily use.</span>
              </div>
            </div>
          </div>
        </div>
      </section>        
        <section id="portfolio" className="portfolio">
          <div className="section-head">
            <p className="eyebrow">Portfolio</p>
            <h2>Spaces designed to impress and perform.</h2>
            <p>
              Every Maison A+ project combines beauty with function — improving how
              spaces feel, work, and are experienced daily.
            </p>
          </div>

          <div className="portfolio-grid">

            <div className="project p1">
              <div className="project-info">
                <span>Luxury Living Room</span>
                <p>
                  Transformed a standard living area into a warm, elegant social space
                  with layered lighting, premium textures, and optimized layout.
                </p>
                <small>Result: Better comfort + stronger guest impression</small>
              </div>
            </div>

            <div className="project p2">
              <div className="project-info">
                <span>Modern Office</span>
                <p>
                  Designed a reception and workspace that reflects professionalism and
                  improves client confidence from first contact.
                </p>
                <small>Result: Improved brand perception</small>
              </div>
            </div>

            <div className="project p3">
              <div className="project-info">
                <span>Elegant Kitchen</span>
                <p>
                  Reworked layout and storage to improve functionality while maintaining
                  a clean, premium aesthetic.
                </p>
                <small>Result: Better workflow + usability</small>
              </div>
            </div>

            <div className="project p4">
              <div className="project-info">
                <span>Short-let Apartment</span>
                <p>
                  Styled for photography and guest experience to increase bookings and
                  repeat visits.
                </p>
                <small>Result: Higher rental value</small>
              </div>
            </div>

          </div>
        </section>
        <section className="social-proof">
          <div className="section-head">
            <p className="eyebrow">Social Proof</p>
            <h2>Designed to be seen, shared, and remembered.</h2>
            <p>
              Maison A+ creates spaces that clients are proud to show — from family
              homes to premium offices and short-let apartments.
            </p>
          </div>

          <div className="proof-grid">
            <div className="testimonial-main">
              <div className="stars">★★★★★</div>
              <h3>
                “Maison A+ transformed our space into something elegant, practical,
                and unforgettable.”
              </h3>
              <p>— Residential Client, Lagos</p>
            </div>

            <div className="proof-card video-card">
              <div className="play-circle">▶</div>
              <span>Client Reveal Video</span>
              <p>Perfect for short reels, walkthroughs, and transformation clips.</p>
            </div>

            <div className="proof-card">
              <strong>WhatsApp Reviews</strong>
              <p>
                Add real client feedback screenshots here, with private details blurred.
              </p>
            </div>

            <div className="proof-card">
              <strong>Instagram / TikTok Ready</strong>
              <p>
                Showcase completed projects, behind-the-scenes clips, styling tips,
                and before/after reveals.
              </p>
            </div>
          </div>

          <div className="social-strip">
            <span>@MaisonAPlus</span>
            <span>Project Reveals</span>
            <span>Before / After</span>
            <span>Design Tips</span>
            <span>Client Stories</span>
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
