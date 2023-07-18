import AnnouncementBar from "@/components/common/announcementBar";
import Footer from "@/components/common/footer";
import TopBar from "@/components/common/tobBar";

export default function About() {
    return (
        <div>
            <AnnouncementBar />
            <TopBar />
            <AboutSection />
            <SpecialCreditSection/>
            <Footer/>
        </div>
    )
}

const AboutSection = () => {
    return (
        <section className="about-section about-body">
            <div className="container">
                <div className="col-md-8 mx-auto">
                    <div className="about-team">

                        <h4>
                            We're young startup made of individuals dedicated to things we love, One of those things is web platform and technologies that surrounds it. We posses different set of skills. like frontend and backend development, web and UI design. project management, know alot about web servers and security.
                        </h4>


                    </div>
                    <div className="row">
                        {[1, 2].map((data, key) => {
                            return (
                                <div className="col-md-6">
                                    <div className="team-card">
                                        <div className="creator-photo">
                                            <img src="images/png/team/suresh.png" alt="Suresh" className="img-fluid" />
                                        </div>
                                        <div className="c-name">Suresh</div>
                                        <div className="c-role">Designer</div>
                                        <div className="c-mail"><a href="#">sureshdharun3@gmail.com</a></div>
                                        <p className="desc">Passionate programmer for 10 lot of experience in web development, web servers and security. Loves modern frameworks</p>
                                        <div className="c-social">
                                            <a href="#" className="c-media-icon">
                                                <img src="images/svg/icon-website.svg" alt="" />
                                            </a>
                                            <a href="#" className="c-media-icon">
                                                <img src="images/svg/icon-linkedin.svg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )

}

const SpecialCreditSection=()=>{
    return(
        <section className="special-credits-section">
        <div className="container">
            <h6>Special Credits</h6>
            <div className="row">
                <div className="col-md-8 mx-auto"><div className="row">
                <div className="col-md-6">
                    <div className="sc-card">
                            <div className="sc-name">Vaishnavi</div>
                            <a href="#">www.example.com</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sc-card">
                            <div className="sc-name">Sathya</div>
                            <a href="#">www.example.com</a>
                    </div>
                </div>
            </div></div>
            </div>
        </div>
    </section>
    )
}