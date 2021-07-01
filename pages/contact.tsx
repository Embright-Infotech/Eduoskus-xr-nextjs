export default function Contact() {
  return (
    <>
      <div id="halvor">
        {/* Header section */}
        <section className="header-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-md-left text-center mt-30">
                <div className="head-text">
                  <h2>CONTACT US</h2>
                  <div className="mt-10"></div>
                  <p>
                    Have any doubts?
                    <br />
                    Reach out to us.
                  </p>
                </div>
              </div>
            </div>
            <div id="headmove" className="lines-page">
              <div data-depth="0.2" className="img-line">
                <img src="/images/common/lines.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Header section */}

        {/* Details section */}
        <section className="contact between text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-item">
                  <h2>Email</h2>

                  <a href="mailto:info@eduoskus.com" target="_top">
                    info@eduoskus.com
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <h2>Address</h2>
                  <p>
                    Embright Infotech Private Limited Kerala Startup Mission
                    (KSUM)G3B, Thejaswini, Technopark Campus, Trivandrum, Kerala
                    695581. INDIA
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <h2>Phone</h2>
                  <p>+91 8129993666</p>
                  <p>+91 7907379878</p>
                </div>
              </div>

              <div className="col-md-6 mt-30">
                <img
                  className="img-fluid"
                  src="/images/home/home-bg-prop.webp"
                  alt=""
                />
              </div>
              <div className="col-md-6 mt-30">
                <img
                  className="img-fluid"
                  src="/images/home/home-bg-prop.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* Details section */}

        {/* Contact form */}
        <div id="section-contact">
          <div className="container">
            <div className="row">
              <div className="contact-form col-sm-12 col-md-12">
                <form method="POST" action="https://formspree.io/mbjzqnlk">
                  <div className="row">
                    <div className="form-group col-sm-6 col-md-6col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30"></div>
        {/* Contact form */}
      </div>
    </>
  );
}
