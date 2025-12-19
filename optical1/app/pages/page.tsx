"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export default function OpticalUltraPremium() {
  const glasses = Array.from({ length: 12 });

  return (
    <div>
      {/* ================= GLOBAL STYLE ================= */}
      <style>{`
        body { background:#faf7f5; }
        html { scroll-behavior:smooth; }

        .fade-up {
          opacity:0;
          animation: fadeUp 1.2s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(60px); }
          to { opacity:1; transform:none; }
        }

        .zoom-hover { transition:.5s ease; }
        .zoom-hover:hover {
          transform:scale(1.08);
          box-shadow:0 25px 60px rgba(0,0,0,.25);
        }

        .lux-btn {
          background:linear-gradient(90deg,#7c2d12,#be123c);
          border:none;
          color:#fff;
        }
        .lux-btn:hover {
          background:linear-gradient(90deg,#be123c,#7c2d12);
        }

        .glass-card {
          background:#fff;
          border-radius:18px;
        }

        .offer-banner{
          background:linear-gradient(90deg,#3f1d38,#1b0f1a);
          color:#fff;
          padding:12px;
          font-weight:600;
          text-align:center;
        }

        .whatsapp-float{
          position:fixed;
          bottom:25px;
          right:25px;
          background:#25D366;
          color:white;
          width:60px;
          height:60px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:30px;
          z-index:999;
          box-shadow:0 10px 30px rgba(0,0,0,.4);
        }
      `}</style>

      {/* ================= OFFER ================= */}
      <div className="offer-banner">
        🎉 Flat ₹500 OFF – Use Code <b>OPTICAL500</b>
      </div>

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
          <span className="navbar-brand fw-bold fs-2">
            optical99<span style={{ color: "#be123c" }}>.com</span>
          </span>

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
                Premium frames & advanced lenses crafted for modern lifestyle.
              </p>
              <div className="d-flex gap-4 mt-5">
                <a href="#products" className="btn btn-light btn-lg fw-bold">
                  View Collection
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  Visit Store
                </a>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                className="img-fluid rounded-4 shadow-lg"
                alt="Optical"
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
            Advanced eye testing, premium frames & trusted vision care.
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
            {glasses.map((_, i) => (
              <div className="col-md-4 fade-up" key={i}>
                <div className="card glass-card h-100 shadow zoom-hover">
                  <img
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                    className="card-img-top rounded-top"
                    alt="Frame"
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold">Luxury Frame {i + 1}</h5>
                    <p className="fs-4 fw-bold text-danger">
                      ₹{1999 + i * 250}
                    </p>
                    <button
                      className="btn lux-btn w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#detailsModal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <div className="modal fade" id="detailsModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <h3>Premium Optical Frame</h3>
            <p>Anti-glare • Blue Cut • UV Protection</p>
            <h4 className="text-danger">₹2,999</h4>
          </div>
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(135deg,#140a12,#000)" }}
      >
        <div className="container fade-up">
          <h2 className="fw-bold display-6">Visit Royal Optics</h2>
          <p className="fs-4">📍 Main Market, Your City</p>
          <p className="fs-4">📞 +91 98765 43210</p>
          <p className="fs-5">🕘 Mon – Sat : 9 AM – 9 PM</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="py-4 text-white text-center"
        style={{ background: "linear-gradient(90deg,#000,#1b0f1a)" }}
      >
        <h5 className="fw-bold">Royal Optics</h5>
        <small>© {new Date().getFullYear()} All Rights Reserved</small>
      </footer>

      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="whatsapp-float"
      >
        💬
      </a>
    </div>
  );
}
