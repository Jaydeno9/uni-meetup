export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="con max-w-7xl x-auto px-6">
        <div className="site-nav__inner">
          {/* LEFT: logo + search */}
          <div className="site-nav__left">
            <a>
              <span className="nav-logo__mark">U</span>
              <span>
                <span className="nav-logo__uni">NI</span> MEETUP
              </span>
            </a>

            <div className="nav-search">
              <div className="nav-search__field">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search events & groups"
                  aria-label="Search events and groups"
                />
              </div>

              <span className="nav-search__divider" />

              <div className="nav-search__field">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  type="text"
                  placeholder="Campus or area"
                  aria-label="Campus or area"
                />
              </div>

              <button className="nav-search__btn" aria-label="Search">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: auth */}
          <div className="site-nav__right">
            <a href="#" className="nav-login">
              Log in
            </a>
            <a href="#" className="nav-signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
