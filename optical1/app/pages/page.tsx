"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App4() {
  return (
    <div>
      {/* ================= GLOBAL STYLE ================= */}
      <style>{`
        body {
          background:#faf7f5;
        }

        html { scroll-behavior:smooth; }

        .fade-up {
          opacity:0;
          animation: fadeUp 1.2s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(60px); }
          to { opacity:1; transform:translateY(0); }
        }

        .zoom-hover {
          transition:.5s ease;
        }
        .zoom-hover:hover {
          transform:scale(1.08);
          box-shadow:0 25px 60px rgba(0,0,0,.25);
        }

        .float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }

        .lux-btn {
          background: linear-gradient(90deg,#7c2d12,#be123c);
          border:none;
          color:#fff;
        }
        .lux-btn:hover {
          background: linear-gradient(90deg,#be123c,#7c2d12);
        }

        .glass-card {
          background:rgba(255,255,255,.95);
          backdrop-filter: blur(10px);
          border-radius:18px;
        }
      `}</style>

      {/* ================= TOP BAR ================= */}
      <div
        className="text-white py-3"
        style={{ background: "linear-gradient(90deg,#2b0f1c,#3f1d38)" }}
      >
        <div className="container d-flex justify-content-between fw-semibold">
          <span>📞 +91 98765 43210</span>
          <span>👓 Premium Optical Boutique</span>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <nav className="navbar navbar-expand-lg bg-white shadow py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2">
            optical99<span style={{ color: "#be123c" }}>.com</span>
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto gap-4 fs-5 align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Collection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#video">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn lux-btn px-4 py-2">Free Eye Test</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        className="text-white"
        style={{
          minHeight: "95vh",
          background: "linear-gradient(135deg,#1b0f1a,#3f1d38)",
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-6 fade-up">
              <h1 className="display-3 fw-bold">
                Redefining <br /> Vision & Style
              </h1>
              <p className="fs-4 mt-4">
                Premium frames, advanced lenses & luxury eye-care crafted for
                modern lifestyle.
              </p>
              <p className="fs-5">
                Experience unmatched clarity, comfort & elegance at Royal
                Optics.
              </p>
              <div className="d-flex gap-4 mt-5">
                <a href="#products" className="btn btn-light btn-lg fw-bold">
                  View Collection
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  Store Visit
                </a>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                className="img-fluid rounded-4 shadow-lg float"
                alt="Optical Glass"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-5"
        style={{ background: "linear-gradient(180deg,#fff1f2,#ffe4e6)" }}
      >
        <div className="container text-center fade-up">
          <h2 className="fw-bold display-6 mb-4">Why Choose Royal Optics?</h2>
          <p className="fs-5">
            We blend cutting-edge eye-testing technology with premium eyewear
            collections curated for comfort and confidence.
          </p>
          <p className="fs-5">
            Every frame reflects luxury craftsmanship and precise vision
            correction.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="py-5"
        style={{ background: "linear-gradient(135deg,#140a12,#2b0f1c)" }}
      >
        <div className="container">
          <h2 className="text-white text-center display-6 fw-bold mb-5">
            Exclusive Eyewear Collection
          </h2>

          <div className="row g-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="col-md-4 fade-up" key={i}>
                <div className="card glass-card h-100 shadow zoom-hover">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1511499767150 + i
                    }?a48a237f0083`}
                    className="card-img-top rounded-top"
                    alt="Glass"
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold">Luxury Frame {i + 1}</h5>
                    <p className="fs-4 fw-bold" style={{ color: "#be123c" }}>
                      ₹{1999 + i * 250}
                    </p>
                    <button className="btn lux-btn w-100">Enquire Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="video"
        className="py-5"
        style={{ background: "linear-gradient(135deg,#3f1d38,#1b0f1a)" }}
      >
        <div className="container text-center text-white fade-up">
          <h2 className="fw-bold display-6 mb-4">Inside Royal Optics</h2>
          <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0K2F3n3cCyY"
              title="Optical Store"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(135deg,#140a12,#000)" }}
      >
        <div className="container fade-up">
          <h2 className="fw-bold display-6">Visit Royal Optics</h2>
          <p className="fs-4 mt-3">Where Vision Meets Elegance</p>
          <p className="fw-bold fs-5">📍 Main Market, Your City</p>
          <p className="fw-bold fs-5">📞 +91 98765 43210</p>
          <p className="fs-5">🕘 Mon – Sat : 9 AM – 9 PM</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="py-4 text-white text-center"
        style={{ background: "linear-gradient(90deg,#000,#1b0f1a)" }}
      >
        <h5 className="fw-bold">Royal Optics</h5>
        <p className="small">Luxury Vision • Trusted Craft</p>
        <small>
          © {new Date().getFullYear()} Royal Optics. All Rights Reserved
        </small>
      </footer>
    </div>
  );
}
