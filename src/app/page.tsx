import Navbar from "./_globalComponents/Navbar";
import Footer from "./_globalComponents/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <p>Welcome to the silicon blog</p>
        <Link href={"/blogs"}>go to blogs</Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
