import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, page }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
