const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-info">
                                <h3>Stay tuned for updates</h3>
                                <p className="mb-5">Monkeyframes is an open source project built with consistent passion and
                                    dedication. If you consider this library valuable for you and your projects, support
                                    Monkeyframes with a donation to help us sustain costs and development time.</p>
                                <div className="social-medias">
                                    <a href="#" target="_blank"><img src="images/svg/twitter.svg" alt="" /></a>
                                    <a href="#" target="_blank"><img src="images/svg/facebook.svg" alt="" /></a>
                                    <a href="#" target="_blank"><img src="images/svg/discord.svg" alt="" /></a>
                                    <a href="#" target="_blank"><img src="images/svg/instagram.svg" alt="" /></a>
                                </div>
                                <div className="footer-nav">
                                    <a href="#">Home</a>
                                    <a href="#">App</a>
                                    <a href="#">About</a>
                                    <a href="#">Request Icons</a>
                                    <a href="#">Free Lottie Icons <img src="images/png/free.png" className="free-nav-icon" alt="" /></a>
                                    <a href="#">License</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            © 2023 Monkeyframes. All rights reserved.
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer;