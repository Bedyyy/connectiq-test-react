function Header() {
  return (
    <>
      <header>
        <div className="upperhead">
          <div className="container">
            <div className="upperhead-content">
              <div className="shop-now">
                <p>
                  Summer Sale For Some Vegetables, Fruits and Meats - OFF 50%!
                </p>
                <a href="">ShopNow</a>
              </div>
              <div className="language">
                <select name="language" id="language">
                  <option value="en">English</option>
                  <option value="id">Indonesian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="navbar-content">
              <h1>Qonnectiq</h1>
              <ul className="nav-menu">
                <li>
                  <a href="" style={{ textDecoration: 'underline' }}>Home</a>
                </li>
                <li>
                  <a href="">Category</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Sign Up</a>
                </li>
              </ul>
              <div className="searchbar">
                <p>What are you looking for?</p>
                <div className="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
