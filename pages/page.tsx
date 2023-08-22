import Base from "../components/base/page";
import Header from "../components/header";
import Intro from "../components/intro";
import Projects from "../components/projects";
import PurpleShape from "../components/svgs/purple-shape";

export default function index() {
    return (
        <>
            <Header />
            <Base>
                <PurpleShape className="absolute -z-1 right-0" />
                <Intro />
                <Projects />
            </Base>
        </>
    )
}