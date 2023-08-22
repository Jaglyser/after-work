import Base from "../components/base/page";
import Chat from "../components/chat";
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
                <PurpleShape className="absolute -z-1 right-0" />
                <Chat />
            </Base>
            <Footer />
        </>
    )
}