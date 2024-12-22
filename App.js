import React from 'react';

function LoginPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
      <header style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff' }}>
        <h1 style={{ margin: 0 }}>Forever</h1>
      </header>

      <nav style={{ padding: '10px 20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Collection</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
      </nav>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Login</h2>
        <form style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              style={{ display: 'block', width: '300px', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              style={{ display: 'block', width: '300px', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}
            />
          </label>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={{ fontSize: '12px', color: '#007BFF', textDecoration: 'none' }}>
              Forgot your password?
            </a>
            <span style={{ margin: '0 10px' }}>|</span>
            <a href="#" style={{ fontSize: '12px', color: '#007BFF', textDecoration: 'none' }}>
              Create account
            </a>
          </div>
          <button
            type="submit"
            style={{
              display: 'block',
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </form>
        <section style={{ marginTop: '50px' }}>
          <h3>Subscribe now & get 20% off</h3>
          <p style={{ marginTop: '10px', color: '#666' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ width: '300px', padding: '10px', border: '1px solid #ccc' }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;