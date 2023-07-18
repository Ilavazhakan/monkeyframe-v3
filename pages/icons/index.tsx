import AnnouncementBar from "@/components/common/announcementBar";
import TopBar from "@/components/common/tobBar";

export default function Icons() {
    return (
        <div>
            <AnnouncementBar />
            <TopBar page="App" />
            <section className="app-page">
                <div className="container-fluid app-container">
                    <div className="app-viewer">
                        <AppLeftArea />
                        <AppRightArea />
                    </div>
                </div>
            </section>
            <div className="modal fade icon-view-modal" id="icon-viewer" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="viewer-close" data-bs-dismiss="modal" aria-label="Close"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path
                                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                fill="rgba(255,255,255,1)"></path>
                        </svg></button>
                        <div className="modal-body">
                            <div className="icon-viewer-area">
                                <div className="icon-top-row">
                                    <div className="iv-left">
                                        <div className="iv-icon-holder">
                                            <div className="iv-safe-zone">
                                                <div className="iv-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" height="48"
                                    width="48">
                                    <path fill="#ffffff"
                                        d="M37.793 37.794c-9.002 9.003-23.245 9.57-32.908 1.703-1.137-.926-1.246-2.565-.316-3.699 2.141-2.61 6.701-7.856 15.037-16.192C27.94 11.271 33.187 6.712 35.797 4.57c1.134-.93 2.773-.821 3.7.316 7.866 9.663 7.299 23.906-1.704 32.908Z">
                                    </path>
                                    <path fill="#f9596d"
                                        d="M33.046 6.904c-2.968 2.591-7.39 6.652-13.44 12.702S9.496 30.078 6.904 33.046A18.45 18.45 0 0 0 20.5 39C30.717 39 39 30.717 39 20.5a18.45 18.45 0 0 0-5.954-13.596Z">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3"
                                        d="M37.794 37.794c-9.002 9.003-23.245 9.57-32.908 1.703-1.138-.926-1.247-2.565-.317-3.699 2.142-2.61 6.702-7.856 15.037-16.192C27.941 11.271 33.188 6.712 35.798 4.57c1.133-.93 2.773-.821 3.699.316 7.867 9.663 7.3 23.906-1.703 32.908Z">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3"
                                        d="M33.047 6.904A18.45 18.45 0 0 1 39 20.5C39 30.717 30.717 39 20.5 39a18.45 18.45 0 0 1-13.595-5.954">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m29 28 1 1"></path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m30.467 17.693.933.934"></path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m18.07 30.09.934.933"></path>
                                </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iv-icon-type">
                                            <div className="iv-category">Line</div>
                                            <div className="iv-category selected">Regular</div>
                                            <div className="iv-category">Filled</div>
                                            <div className="iv-category">Duocolor</div>
                                        </div>
                                    </div>
                                    <div className="iv-right">
                                        <div className="iv-top-info">
                                            <div className="download-right">
                                                <div className="downloaded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path
                                                            d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z">
                                                        </path>
                                                    </svg>
                                                    <div className="download-count">15k</div>
                                                </div>
                                            </div>
                                            <div className="iv-icon-info">
                                                <h6 className="category-name">
                                                    Category Name
                                                </h6>
                                                <h2 className="icon-name">Icon Name</h2>
                                                <div className="icon-tags">
                                                    <p className="tag-item">ui</p>
                                                    <p className="tag-item">user interface</p>
                                                    <p className="tag-item">animation</p>
                                                    <p className="tag-item">fruits</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="icon-editor">
                                            <div className="editor-size">
                                                <p className="editor-label">Icon Size</p>
                                                <div className="icon-size-list">
                                                    <div className="icon-size">
                                                        24px
                                                    </div>
                                                    <div className="icon-size">
                                                        32px
                                                    </div>
                                                    <div className="icon-size selected">
                                                        48px
                                                    </div>
                                                    <div className="icon-size">
                                                        100px
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="editor-color">
                                                <p className="editor-label">Color</p>
                                                <div className="icon-color-list">
                                                    <div className="icon-color blue"></div>
                                                    <div className="icon-color black"></div>
                                                    <div className="icon-color red"></div>
                                                    <div className="icon-color purple selected"></div>
                                                    <div className="icon-color green"></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon-download-option">
                                    <div className="caption">Download options</div>
                                    <div className="d-buttons-row">
                                        <button className="btn btn-download">Copy SVG</button>
                                        <button className="btn btn-download">Download SVG</button>
                                        <button className="btn btn-download">Copy Link</button>
                                        <button className="btn btn-download">
                                            Share                                </button>
                                    </div>
                                </div>
                                <div className="promotion-block">
                                    <div className="p-left">
                                        <div className="p-icon">
                                            <img src="images/svg/promotion-icon.svg" alt=""/>
                                        </div>
                                        <div className="product-info">
                                            <h6>Promote your product here!</h6>
                                            <p>Reach a highly skilled group of 15.000 top-level creatives.</p>
                                        </div>
                                    </div>
                                    <div className="p-right">
                                        <div className="product-link">
                                            <a href="#">Know More</a>
                                        </div>
                                    </div>


                                </div>
                                <div className="contact-block">
                                    <h6>Contact us</h6>
                                    <p>We listen to you. Have you had any issues or suggestions about our Monkeyframes? Our support team will help you.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function AppLeftArea() {
    return (
        <div className="app-left-area">
            <div className="left-filter">
                <div className="filter-item">
                    <div className="filter-title">
                        Filters
                    </div>
                    <div className="filters">
                        <a href="#" className="filter-button selected">Animated Icons</a>
                        <a href="" className="filter-button">Static Icons</a>
                    </div>
                </div>
                <div className="filter-divider"></div>
                <div className="filter-item">
                    <div className="filter-title">
                        Sort by
                    </div>
                    <div className="filters">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Most downloaded
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Popular
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3" />
                            <label className="form-check-label" for="flexRadioDefault3">
                                Latest
                            </label>
                        </div>
                    </div>
                </div>
                <div className="filter-divider"></div>
                <div className="filter-item">
                    <div className="filter-title">
                        Categories
                    </div>
                    <div className="filters">
                        <div className="category-list">
                            <div className="categories-item">
                                <span>Arrows</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="categories-item c-selected">
                                <span>Buildings</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="categories-item">
                                <span>Business</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="categories-item">
                                <span>Development</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="categories-item">
                                <span>Communication</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="categories-item">
                                <span>Device</span>
                                <div className="category-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AppRightArea() {
    return (
        <div className="app-right-area">
            <div className="icons-grid-container">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((data, key) => {
                    return (
                        <div className="icon-holder">
                            <div className="icon-subholder" data-bs-toggle="modal" data-bs-target="#icon-viewer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" height="48"
                                    width="48">
                                    <path fill="#ffffff"
                                        d="M37.793 37.794c-9.002 9.003-23.245 9.57-32.908 1.703-1.137-.926-1.246-2.565-.316-3.699 2.141-2.61 6.701-7.856 15.037-16.192C27.94 11.271 33.187 6.712 35.797 4.57c1.134-.93 2.773-.821 3.7.316 7.866 9.663 7.299 23.906-1.704 32.908Z">
                                    </path>
                                    <path fill="#f9596d"
                                        d="M33.046 6.904c-2.968 2.591-7.39 6.652-13.44 12.702S9.496 30.078 6.904 33.046A18.45 18.45 0 0 0 20.5 39C30.717 39 39 30.717 39 20.5a18.45 18.45 0 0 0-5.954-13.596Z">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3"
                                        d="M37.794 37.794c-9.002 9.003-23.245 9.57-32.908 1.703-1.138-.926-1.247-2.565-.317-3.699 2.142-2.61 6.702-7.856 15.037-16.192C27.941 11.271 33.188 6.712 35.798 4.57c1.133-.93 2.773-.821 3.699.316 7.867 9.663 7.3 23.906-1.703 32.908Z">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3"
                                        d="M33.047 6.904A18.45 18.45 0 0 1 39 20.5C39 30.717 30.717 39 20.5 39a18.45 18.45 0 0 1-13.595-5.954">
                                    </path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m29 28 1 1"></path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m30.467 17.693.933.934"></path>
                                    <path stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="3" d="m18.07 30.09.934.933"></path>
                                </svg>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}