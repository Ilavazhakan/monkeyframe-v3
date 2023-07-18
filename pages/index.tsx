import AnnouncementBar from "@/components/common/announcementBar"
import Footer from "@/components/common/footer"
import TopBar from "@/components/common/tobBar"
export default function Home() {

  return (
    <div>
      <AnnouncementBar />
      <TopBar />
      <HeroSection />
      <IconsAnimated />
      <FeatureSection />
      <Satatistics />
      <Donate />
      <Subscription />
      <Request />
      <Footer />
    </div>

  )
}

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="hero-content">
              <div className="content-center">
                <h1>Animated Icons 3.0</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend ante et mi
                  lobortis, sit amet aliquet nisi cursus. Nulla semper eu dolor ut maximus.</p>
                <div className="hero-search-form">
                  <input type="text" className="form-control form-control-lg search-input" placeholder="Search 3,453 Icons" />
                  <button className="btn btn-primary btn-lg">Search</button>
                </div>
                <div className="suggested-list">
                  <div className="caption">Trending:</div>
                  <a href="#">Settings,</a>
                  <a href="#">Phone,</a>
                  <a href="#">Camera,</a>
                  <a href="#">Calendar,</a>
                  <a href="#">Messages,</a>
                  <a href="#">Mail,</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const IconsAnimated = () => {
  return (
    <div>
      <section className="icons-animated-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-icon-container">
                <div className="h-icon-holder">
                  <img src="images/svg//icon.svg" alt="" />

                </div>
                <div className="h-icon-holder">
                  <img src="images/svg//icon-2.svg" alt="" />
                </div>
                <div className="h-icon-holder">
                  <img src="images/svg//icon-3.svg" alt="" />
                </div>
                <div className="h-icon-holder">
                  <img src="images/svg//icon-4.svg" alt="" />
                </div>

                <div className="h-icon-holder">
                  <img src="images/svg//icon-5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <h3>500+ Animated Icons and 6 Styles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo arcu eget tellus
              porttitor vulputate. Proin laoreet porttitor mollis. Morbi velit dui, ullamcorper non imperdiet
              sit amet, blandit in lacus.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="feature-grid">
              <div className="parent">
                <div className="div1 feature-items">
                  <div className="f-bold-number">
                    <h1>500+</h1>
                    <p>Premium Pixel-perfect Icons</p>
                  </div>
                </div>
                <div className="div2 feature-items">
                  <div>
                    <img src="images/svg/features/copy-paste.svg" className="img-fluid" alt="Copy paste" />
                  </div>
                </div>
                <div className="div3 feature-items">
                  <div className="colors">
                    <h4>Multicolor</h4>
                    <div>
                      <img src="images/svg/features/colors.svg" className="img-fluid" alt="Color Palatte" />
                    </div>
                  </div>

                </div>
                <div className="div4 feature-items">
                  <img src="images/svg/features/variants.svg" className="img-fluid" alt="Monkeyframes variants" />
                </div>

                <div className="div6 f-logo feature-items">
                  <div className="f-logo-inner">
                    <img src="images/svg/features/f-logo.svg" className="img-fluid" alt="" />

                  </div>
                </div>
                <div className="div5 feature-items">
                  <div>
                    <img src="images/svg/features/vector.svg" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="div7 feature-items">
                  <div className="f-custom-icons">
                    <h4>Custom Icons for your Project</h4>
                    <div>
                      <button className="btn btn-primary btn-lg w-100">Request Icons</button>
                    </div>
                  </div>
                </div>
                <div className="div8 feature-items">
                  <div className="figma">
                    <h4>Custom Icons for your Project</h4>
                    <img src="images/svg/features/figma.svg" alt="" className="img-fluid" />
                    <div className="w-100">
                      <button className="btn btn-primary btn-lg w-100">Request Icons</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Satatistics = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="c-info-block">
              <h3 className="c-title">Neatly Organized <br /> Categories</h3>
              <div className="c-stats">
                <div className="c-stat-list">
                  <div className="c-count">06</div>
                  <div className="c-label">Styles</div>
                </div>
                <div className="c-stat-list">
                  <div className="c-count">150</div>
                  <div className="c-label">Categories</div>
                </div>
                <div className="c-stat-list">
                  <div className="c-count">1400+</div>
                  <div className="c-label">Icons</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
const Donate = () => {
  return (
    <section className="donate">
      <div className="container">
        <div className="col-md-8 col-12 mx-auto">
          <div className="donate-block">
            <p>
              Monkeyframes is an open source project built with consistent passion and dedication. If you
              consider this library valuable for you and your projects, support Monkeyframes with a donation
              to help us sustain costs and development time.
            </p>
            <div className="donate-button">
              <div className="donate-btn-block">
                <div className="pre-text">Tap</div>
                <div className="donate-image">
                  <div className="d-top-img">
                    <img src="images/svg/hand.svg" alt="" />
                  </div>
                  <div className="d-bottom-img">
                    <img src="images/svg/button.svg" alt="" />
                  </div>
                </div>
                <div className="post-text">Donate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="subscription-block">
              <div>
                <h3>Get free Lottie icons Subscribe to our newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend ante et mi
                  lobortis.</p>
                <div className="subscripe-form">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Email"
                      aria-label="Email Address" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12.0886H22" stroke="white" stroke-width="1.5" />
                        <path d="M14.6582 5C15.941 8.80411 17.6477 10.2462 21.7468 12.0886"
                          stroke="white" stroke-width="1.5" />
                        <path d="M14.6582 19.1772C15.941 15.3731 17.6477 13.931 21.7468 12.0886"
                          stroke="white" stroke-width="1.5" />
                      </svg>


                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Request = () => {
  return (
    <section className="request">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>
              Let’s make something amazing together. <br />Start by <a href="#"> saying hi</a>
            </h3>
          </div>
          <div className="col-md-4">
            <img src="images/png/request.png" className="img-fluid" alt="Request Icons - Monkeyframes" />
          </div>
        </div>
      </div>
    </section>
  )
} 
