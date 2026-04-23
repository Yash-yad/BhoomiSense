import React from 'react';
import TeamCard from './TeamCard';
// Import local images
import ShivamImage from '../assets/image/Shivam .jpg';
import AkashImage from '../assets/image/Aakash.jpg';
import AbhishekImage from '../assets/image/Abhishek.jpg';

// ===================================
// Footer Component
// ===================================
const Footer = () => {
  return (
    <>
      <style>{`
        /* CSS Variables (assuming they are globally available or define them here if needed) */
        :root {
            --dark-green: #283618;
            --light-cream: #FEFAE0;
            --olive-green: #606C38;
            --earth-brown: #BC6C25;
            --font-family: 'Poppins', sans-serif;
        }

        /* FOOTER STYLES */
        .site-footer {
            background-color: var(--dark-green);
            color: var(--light-cream);
            padding: 60px 0 0 0;
            font-size: 15px;
            line-height: 24px;
            font-family: var(--font-family);
        }
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }
        .footer-about h3 { font-size: 24px; font-weight: 700; margin-bottom: 20px; letter-spacing: 1px; color: #fff; }
        .footer-about p { margin: 0; opacity: 0.8; }
        .footer-links h4, .footer-contact h4, .footer-subscribe h4 { font-size: 18px; font-weight: 600; margin-bottom: 25px; position: relative; color: #fff; }
        .footer-links h4::after, .footer-contact h4::after, .footer-subscribe h4::after { content: ''; position: absolute; left: 0; bottom: -8px; width: 50px; height: 3px; background-color: var(--earth-brown); border-radius: 2px; }
        .footer-links ul { list-style: none; padding: 0; margin: 0; }
        .footer-links li a { color: var(--light-cream); text-decoration: none; opacity: 0.8; display: block; margin-bottom: 12px; transition: all 0.3s ease; }
        .footer-links li a:hover { opacity: 1; color: #fff; transform: translateX(5px); }
        .footer-links li a::before { content: '\\f105'; font-family: 'Font Awesome 6 Free'; font-weight: 900; margin-right: 10px; color: var(--earth-brown); }
        .footer-contact p { margin-bottom: 15px; opacity: 0.8; display: flex; align-items: center; }
        .footer-contact i { margin-right: 15px; color: var(--earth-brown); font-size: 18px; width: 20px; text-align: center; }
        .newsletter-form { display: flex; margin-top: 10px; }
        .newsletter-form input { flex-grow: 1; padding: 12px; border: none; border-radius: 5px 0 0 5px; font-family: var(--font-family); background-color: var(--olive-green); color: #fff; }
        .newsletter-form input::placeholder { color: rgba(255, 255, 255, 0.6); }
        .newsletter-form input:focus { outline: none; box-shadow: 0 0 0 2px var(--earth-brown); }
        .newsletter-form button { padding: 12px 20px; border: none; background-color: var(--earth-brown); color: #fff; font-weight: 600; cursor: pointer; border-radius: 0 5px 5px 0; transition: background-color 0.3s ease; }
        .newsletter-form button:hover { background-color: #d9802c; }
        .social-icons { margin-top: 25px; display: flex; gap: 15px; }
        .social-icons a { color: var(--dark-green); background-color: var(--light-cream); width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; text-decoration: none; font-size: 18px; transition: all 0.3s ease; }
        .social-icons a:hover { transform: translateY(-5px); background-color: var(--earth-brown); color: #fff; }
        .footer-bottom-bar { margin-top: 60px; padding: 20px 0; text-align: center; background-color: rgba(0, 0, 0, 0.2); }
        .copyright-text { margin: 0; opacity: 0.7; }

        @media (max-width: 768px) {
            .site-footer { padding-top: 40px; text-align: center; }
            .footer-links h4::after, .footer-contact h4::after, .footer-subscribe h4::after { left: 50%; transform: translateX(-50%); }
            .footer-contact p { justify-content: center; }
            .social-icons { justify-content: center; }
        }
      `}</style>
      <footer className="site-footer">
        <div className="footer-container">
            <div className="footer-about">
                <h3>Krishi-Pragati</h3>
                <p>Empowering Indian farmers by connecting them with modern technology. We work towards better yields, accurate information, and a prosperous future.</p>
            </div>
            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <p><i className="fas fa-map-marker-alt"></i> Krishi Bhavan, New Delhi, India</p>
                <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                <p><i className="fas fa-envelope"></i> contact@krishipragati.in</p>
            </div>
            <div className="footer-subscribe">
                <h4>Join Our Newsletter</h4>
                <p style={{opacity: 0.8, marginBottom: '20px'}}>Get the latest insights on agriculture.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                </form>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom-bar">
            <p className="copyright-text">&copy; 2025 Krishi-Pragati. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};


// ===================================
// Team Page Component
// ===================================
const teamMembers = [
    {
        name: 'Yash Yadav',
        role: 'Lead Agronomist',
        quote: "Our goal is to adopt new technologies for soil health and better crop production.",
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop&crop=face',
    },
    {
        name: 'Asad Ahmad',
        role: 'Frontend Engineer',
        quote: "By analyzing farmer data, we help them make informed decisions for their crops.",
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=700&fit=crop&crop=face',
    },
    {
        name: 'Abhishek',
        role: 'IoT & Automation Expert',
        quote: "My work is to make farming easier and more effective with smart sensors and automation.",
        imageUrl: AbhishekImage, // Using local image Abhishek
    },
    {
        name: 'Shivam Maurya',
        role: 'Backend Engineer',
        quote: "Our app is designed to be so simple that every farmer can use it with ease.",
        imageUrl: ShivamImage, // Using local image Shivam
    },
    {
        name: 'Harshita',
        role: 'Frontend Engineer',
        quote: "Our priority is to reach every farmer and earn their trust.",
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=700&fit=crop&crop=face',
    },
    {
        name: 'Akash Singh',
        role: 'Backend Engineer',
        quote: "Through proper planning and team coordination, we achieve our goals on time.",
        imageUrl: AkashImage, // Using local image Akash
    },
];

const TeamPage = () => {
    return (
        // React Fragment to wrap both Team section and Footer
        <>
            <div className="bg-[#F4F3EE] py-16 md:py-20 animate-fadeIn">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <header className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#4A403A]">Our Bhoomi Sense Team</h2>
                        <p className="text-lg text-[#606C38] mt-4 max-w-2xl mx-auto">
                            Meet the experienced professionals whose dedication drives our mission forward.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TeamPage;