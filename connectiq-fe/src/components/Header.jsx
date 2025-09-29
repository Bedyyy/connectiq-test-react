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
                <input type="text" placeholder="What are you looking for?"/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
