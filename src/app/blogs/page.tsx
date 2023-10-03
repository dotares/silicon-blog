import Navbar from "../_globalComponents/Navbar";
import Footer from "../_globalComponents/Footer";
import Articles from "../_blogComponents/Articles";

const page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Articles />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
