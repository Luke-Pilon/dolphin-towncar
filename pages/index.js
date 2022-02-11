import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import Testimonials from '../components/testimonials';
import Rates from '../components/rates';
import Quote from '../components/quote';
//testimonial and rates data
let data = require('../utils/data.json');

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dolphin Limo Transportation Services</title>
                <meta
                    name='description'
                    content='Towncar and limo transportation service in Minneapolis, Saint Paul, and the greater Twin Cities area, Minnesota'
                />
            </Head>
            <section id='landing' className={styles.landing}>
                <div className={styles.landingContentContainer}>
                    <h1>Dolphin Limo Ride</h1>
                    <h3>
                        High Quality and Affordable towncar service for the Twin
                        Cities, Minneapolis-St Paul International Airport, and
                        the suburbs
                    </h3>
                    <h4>Call us 24 hours a day, 7 days a week!</h4>
                    <div className={styles.actionButtonsContainer}>
                        <Link href='/#quote' scroll={false}>
                            <a
                                className={`${styles.actionButton} ${styles.borderButton}`}
                            >
                                Get Quote
                            </a>
                        </Link>
                        <a
                            className={`${styles.actionButton} ${styles.solidButton}`}
                            href='tel:952-201-9725'
                        >
                            Call Now
                            <br />
                            952-201-9725
                        </a>
                    </div>
                </div>
            </section>
            <section id='about' className={styles.section}>
                <h3>Our Mission</h3>
                <p>
                    Dolphin Limo is your premier transportation solution in the
                    Twin Cities. Our Chevrolet Suburban towncars can get you
                    wherever you need no matter the weather. We are always on
                    time and available any hour of the day or night. Our drivers
                    are professional, licensed, and insured.
                </p>
                <br />
                <p>
                    In addition to the cities of Minneapolis and Saint Paul, we
                    service destinations such as the Minneapolis-Saint Paul
                    International Airport, Mystic Lake Casino, Canterbury Park,
                    and the Twin Cities suburbs.
                </p>
            </section>
            <section id='testimonials' className={styles.section}>
                <Testimonials testimonials={data.testimonials} />
            </section>
            <section id='rates' className={styles.section}>
                <Rates rates={data.rates} />
                <Quote id='quote' />
            </section>
            <section
                id='contact'
                className={`${styles.contact} ${styles.section}`}
            >
                <h3>Contact Us</h3>
                <a
                    className={`${styles.actionButton} ${styles.solidButton}`}
                    href='tel:952-201-9725'
                >
                    Call Now
                </a>
                <div className={styles.contactInfo}>
                    <p>
                        <b>Phone:</b> 952-201-9725
                    </p>
                    <p>
                        Call us any time of the day or night! We can also
                        schedule rides via text message.
                    </p>
                    <p>Mon-Sun Open 24 Hours</p>
                    <p>
                        <b>Email:</b> reef1960@gmail.com
                    </p>
                    <p>
                        <b>Address:</b> 1374 Westminster St Saint Paul, MN 55130
                    </p>
                </div>
            </section>
        </div>
    );
}
