import Navbar from "../_globalComponents/Navbar";
import Footer from "../_globalComponents/Footer";
import Article from "../_blogComponents/Article";

const page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Article />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
