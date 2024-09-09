import React from 'react'

export default function Landing() {
  function handleLogin(role) {
    console.log(`Login as ${role}`);
    localStorage.setItem("role",role)
    window.location.href="/login"

  }

  function handleSignup(role) {

    console.log(`Login as ${role}`);
    localStorage.setItem("role",role)
    window.location.href="/signup"
  }

  return (
    <div className="landing-page">
      <header className="hero-section parallax">
        <nav className="navbar">
          <h1>Project Manager</h1>
          <ul>
            <li><p onClick={() => console.log('Features clicked')}>Features</p></li>
            <li><p onClick={() => console.log('About Us clicked')}>About Us</p></li>
            <li><p onClick={() => console.log('Contact clicked')}>Contact</p></li>
            <li><p onClick={() => handleLogin('admin')}>Login as admin</p></li>
            <li><p onClick={() => handleLogin('team member')}>Login as Team member</p></li>
            <li><p onClick={() => handleLogin('manager')}>Login as Manager</p></li>
            <li><p onClick={() => handleSignup('team member')}>Signup as Team Member</p></li>
            <li><p onClick={() => handleSignup('admin')}>Signup as Admin</p></li>
            <li><p onClick={() => handleSignup('manager')}>Signup as Manager</p></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Manage Your Projects with Ease</h2>
          <p>Streamline your workflow and stay organized with our project management app.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section id="features" className="features-section">
        <h3>Features</h3>
        <div className="feature-item">
          <h4>Task Management</h4>
          <p>Keep track of tasks, deadlines, and progress.</p>
        </div>
        <div className="feature-item">
          <h4>Team Collaboration</h4>
          <p>Collaborate with your team in real-time, assign tasks, and track performance.</p>
        </div>
        <div className="feature-item">
          <h4>Project Insights</h4>
          <p>Get detailed insights and reports about your project's performance.</p>
        </div>
      </section>

      <div className="parallax parallax-about"></div> {/* Parallax for About Section */}
      
      <section id="about" className="about-section">
        <h3>About Us</h3>
        <p>We are dedicated to helping teams streamline their project management with our easy-to-use and powerful app.</p>
      </section>
      
      <div className="parallax parallax-contact"></div> {/* Parallax for Contact Section */}
      
      <section id="contact" className="contact-section">
        <h3>Contact Us</h3>
        <p>Email us at support@projectmanager.com</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Project Manager. All rights reserved.</p>
      </footer>
    </div>
  )
}