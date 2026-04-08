import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Created projects for small YouTubers and content creators, including thumbnails, videos, and design work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
