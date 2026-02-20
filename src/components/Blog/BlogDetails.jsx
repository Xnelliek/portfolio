import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './BlogDetails.scss';
import './Blog.scss';
import './Comment.scss';
import '../Contact/Contact.scss';
import Carousel from '../Slider/Carousel';

const BlogDetails = () => {
  const blogDetails = {
    heroBg: '/images/cyber-hero.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      { imgLink: '/images/cyber1.jpg' },
      { imgLink: '/images/cyber2.jpg' },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(${blogDetails.heroBg})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
              Understanding OWASP Top 10 <br />
              Web Application Vulnerabilities
            </h1>
            <div className="st-post-label">
              <span>
                By <Link to="">Nelvine Kavaya</Link>
              </span>
              <span>Field: Cybersecurity</span>
              <span>Feb 6, 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
<div className="st-post-details st-style1">

  <h2>📌 Overview</h2>
  <p>
    The OWASP Top 10 is a globally recognized awareness document that outlines the
    most critical security risks affecting modern web applications. As a
    cybersecurity postgraduate student, understanding these vulnerabilities is
    essential for building secure systems and performing effective security testing.
  </p>

  <h2>🧠 What is OWASP Top 10?</h2>
  <p>
    OWASP (Open Web Application Security Project) publishes the Top 10 list to help
    developers, security professionals, and organizations understand the most common
    and dangerous web application security risks. The list is based on real-world
    vulnerability data and industry research.
  </p>

  <h2>🚨 Key OWASP Top 10 Risks</h2>
  <ul>
    <li><strong>Broken Access Control:</strong> Users gaining unauthorized access to resources.</li>
    <li><strong>Cryptographic Failures:</strong> Weak or improper protection of sensitive data.</li>
    <li><strong>Injection:</strong> Attacks such as SQL Injection that manipulate backend queries.</li>
    <li><strong>Insecure Design:</strong> Security weaknesses introduced at the system design phase.</li>
    <li><strong>Security Misconfiguration:</strong> Default or improper system configurations.</li>
    <li><strong>Vulnerable Components:</strong> Using outdated libraries with known vulnerabilities.</li>
    <li><strong>Authentication Failures:</strong> Weak login and session management mechanisms.</li>
    <li><strong>Software Integrity Failures:</strong> Lack of validation for updates and dependencies.</li>
    <li><strong>Logging & Monitoring Failures:</strong> Poor detection of security incidents.</li>
    <li><strong>SSRF:</strong> Server-side request forgery attacks on internal resources.</li>
  </ul>

  <img
    className="st-zoom-in"
    src="/images/cyber1.jpg"
    alt="OWASP Top 10"
  />

  <h2>🧪 Practical Learning</h2>
  <p>
To reinforce my understanding, I practiced exploiting vulnerable applications using OWASP Juice Shop. This lab focused on performing SQL Injection and authentication bypass attacks in a controlled environment. Through this process, I gained hands-on experience with real-world attack vectors and learned how defensive mechanisms such as input validation and prepared statements help mitigate these risks.

The objective was to understand how improper input validation can lead to unauthorized access to backend databases. The lab also explored mitigation techniques, including parameterized queries and input sanitization.
  </p>
  <h3>Findings</h3>
  <p>The authentication endpoint accepted unsanitized user input, allowing crafted payloads to manipulate backend queries. This resulted in successful authentication bypass.</p>
  <h4>Environment</h4>
  <p>Windows 11, OWASP Juice Shop (Docker), Burp Suite Community Edition</p>
  
<h4>Impact</h4>
<p>In real-world systems, such vulnerabilities could lead to account compromise, data leakage, and unauthorized administrative access.</p>
  <Carousel data={blogDetails} />

  <h2>🔐 Defensive Measures/Mitigations</h2>
  <ul>
    <li>Implement proper access control and authorization checks</li>
    <li>Use strong cryptography and secure password hashing algorithms</li>
    <li>Validate and sanitize all user input</li>
    <li>Apply secure configuration and disable unnecessary services</li>
    <li>Keep frameworks and dependencies up to date</li>
    <li>Enable proper logging, monitoring, and alerting</li>
  </ul>

  <h2>🎯 Key Takeaway</h2>
  <p>
    The OWASP Top 10 provides a practical foundation for application security.
    Most real-world breaches exploit basic security weaknesses rather than advanced
    zero-day vulnerabilities. Building secure web applications starts with awareness,
    secure design, and continuous security testing throughout the development lifecycle.
  </p>

  <h2>🔖 Tags</h2>
  <div className="st-post-meta">
    <div className="st-post-tages">
      <ul className="st-post-tage-list st-mp0">
        <li><Link to="#">Cybersecurity</Link></li>
        <li><Link to="#">OWASP</Link></li>
        <li><Link to="#">Web Security</Link></li>
        <li><Link to="#">Application Security</Link></li>
        <li><Link to="#">Learning Log</Link></li>
      </ul>
    </div>

    <div className="st-post-share">
      <h4 className="st-post-share-title">Share:</h4>
      <div className="st-post-share-btn-list">
        <Link to="#"><Icon icon="fa6-brands:linkedin" /></Link>
        <Link to="#"><Icon icon="fa6-brands:twitter" /></Link>
        <Link to="#"><Icon icon="fa6-brands:facebook-f" /></Link>
      </div>
    </div>
  </div>

  <div className="st-height-b60 st-height-lg-b60" />

  <div className="st-post-btn-gropu">
    <Link to="#" className="st-btn st-style2 st-color1 st-size-medium">
      Previous Post
    </Link>
    <Link to="#" className="st-btn st-style2 st-color1 st-size-medium">
      Next Post
    </Link>
  </div>
</div>


            <div className="st-height-b60 st-height-lg-b60" />

            {/* Comments */}
            <div className="comments-area">
              <div className="comment-list-outer">
                <h2 className="comments-title">Comments (3)</h2>

                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img src="/images/comment1.jpg" alt="comment1" className="avatar" />
                          <Link to="" className="nm">Smith shark</Link>
                        </div>
                        <div className="comment-metadata">
                          <Link to=""><span>15 Jan, 2020</span></Link>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">Reply</Link>
                      </div>
                    </div>

                    <ol className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author">
                              <img src="/images/comment2.jpg" alt="comment2" className="avatar" />
                              <Link to="" className="nm">Fathi Abdi</Link>
                            </div>
                            <div className="comment-metadata">
                              <Link to=""><span>15 Jan, 2020</span></Link>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>Consectetuer adipiscing elit. Lorem ipsum dolor sit amet.</p>
                          </div>
                          <div className="reply">
                            <Link to="" className="comment-reply-link">Reply</Link>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>

                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img src="/images/comment1.jpg" alt="comment1" className="avatar" />
                          <Link to="" className="nm">Grace Mwega</Link>
                        </div>
                        <div className="comment-metadata">
                          <Link to=""><span>26 Jan, 2016</span></Link>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum adipiscing elit.</p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">Reply</Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="comment-respond">
                <h2 className="comment-reply-title">Add your comment</h2>
                <form className="comment-form">
                  <input type="text" placeholder="Name*" required />
                  <input type="email" placeholder="E-mail*" required />
                  <input type="url" placeholder="Website" />
                  <textarea rows="5" placeholder="Write here...*" required />
                  <button className="st-btn st-style1 st-color1 st-size-medium">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
