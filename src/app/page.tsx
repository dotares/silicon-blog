import Navbar from "./_globalComponents/Navbar";
import Footer from "./_globalComponents/Footer";
import UserProfile from "./_globalComponents/UserProfile";
import Articles from "./_blogComponents/Articles";

const page = () => {
    return (
        <div className="font-Rubik">
            <header>
                <Navbar />
            </header>
            <section>
                <UserProfile />
            </section>
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
