import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './Testimonial.module.css'

export default withTranslation()(class testimonials extends Component {
    constructor(props) {
        super(props);
        var display = 3;
        if (window.innerWidth <= 1100 && window.innerWidth > 700) {
            display = 2;
        } else if (window.innerWidth <= 700) {
            display = 1;
        } else {
            display = 3;
        }
        this.state = {
            displayCount: display,
        }

    }
    resize = () => {
        if (window.innerWidth < 1000 && window.innerWidth > 700) {
            this.setState({ displayCount: 2 });
        } else if (window.innerWidth < 700) {
            this.setState({ displayCount: 1 });
        } else {
            this.setState({ displayCount: 3 });
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentDidUnmount() {
        window.removeEventListener('resize', this.resize)
    }
    render() {
        const { t } = this.props;
        return (
            <>
                <section id="testimonials" className={`${styles.testimonials} section-bg`}>
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>{t('Testimonials-custReviews')}</h2>
                            <p>{t('Testimonials-whatTheySay')}</p>
                        </div>
                        <OwlCarousel items={this.state.displayCount} autoplay={true} loop>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Brew was a chance discovery - ain't easy to spot - but is located right after 711 on Albert St near the Rocking House.  The place is advertised as 'preferably, no babies' but if you are not moving around with a pram then it is no issue at all. <br /><br />
                                        Drop by for all day beer specials and food deals after 4 PM.  The meals are delicious.  They coming piping hot straight out of the kitchen.  The seats are comfortable.  <br /><br />
                                        The music volume is just right ... you could have a conversation without having to shout to be heard.  Definitely worth a repeat visit.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Sandra proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Sandra E</h3>
                                <h4>Brisbane, Australia</h4>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        5 stars for ambience, service and coffee but 4 for the food. This place wasn't easy to find - tucked into the end of a little alleyway. <br /><br />
                                        The tables have cute decorations. The barrel tables have a special charm but are in a self-service area. We had a flat white and an iced coffee drip. They were both really good.  I had an avocado toast with added bacon and prosciutto toastie. The service was pleasent.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Samantha proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Samantha J</h3>
                                <h4>Houston, United States</h4>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        This pub is quite a cool place. They have live music which was very impressive considering it was local talent from what I could gather. A bit of impromptu comedy thrown in between songs doesn't hurt either. <br /><br />
                                        The drinks were reasonably priced and the atmosphere is very cool. Will definitely be coming back to chill out here in future.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Radek proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Radek S</h3>
                                <h4>Perth, Western Australia</h4>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Possibly the only place in the CBD where you can get a coffee (and it's a pretty damn good) after hours. <br /><br />
                                        Echo chamber acoustics will deter those who prefer quiet surroundings.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Harikal proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Haikal S</h3>
                                <h4>Brisbane, Queensland</h4>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        BREW is the type of place that you either love or hate. You will love it for the hip scenery but hate it for all the hipsters who hang out there. You will love the coffee and the cocktails, but you will hate the struggling art student serving you. Maybe you will love all of it. But let me be clear, this is one cool place. And I mean cool daddy-o. Very underground (literally).
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Daniel proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Daniel G</h3>
                                <h4>Banyo, Queensland</h4>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.reviewBox}>
                                    <p><i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Everyone kept telling me that, "you just have to go to BREW - you will love it". After hearing this a dozen times in half a dozen days I decided to stop being so stubborn and just go. <br /><br />
                                        I was immediately taken in by BREW's "look"; the mismatched furniture, the clashing curtains and cement, the milk crates used to create coffee tables, playing cards used as order numbers, the service staff forsaken by their own beauty, I loved it all! I cannot give you an honest critique on the coffee I drank, as I was still dizzy from the sheer "indie-ness" of it all.  This being said, I'm sure the coffee was somewhere between above average and "wowza".  My recommendation: get in fast, before it becomes over-brewed.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                </div>
                                <img src="assets/img/Testimonials/Lewis proportioned-95.jpg" className={styles.testimonialImg} alt="" />
                                <h3>Lewis T</h3>
                                <h4>Kingsford, New South Wales</h4>
                            </div>
                        </OwlCarousel>

                    </div>
                </section>
            </>
        )
    }
})
