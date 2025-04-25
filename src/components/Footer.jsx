function Footer() {
  return (
    <>
      <footer className="navi fixed-bottom shadow bg-dark text-light">
        <ul
          className="d-flex justify-content-around align-items-center mb-0 p-3 w-100"
          style={{ listStyle: "none" }}
        >
          <li>&copy; {new Date().getFullYear()} All rights reserved.</li>
          <li>Designed by Titus</li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
