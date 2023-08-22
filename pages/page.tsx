import Base from "../components/base/page";
import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro";
import Projects from "../components/projects";
import PurpleShape from "../components/svgs/purple-shape";

export default function index() {
    return (
        <>
            <Header />
            <Base className="overflow-hidden">
                <PurpleShape />
                <Intro />
                <Projects />
            </Base>
            <Footer />
        </>
    )
}