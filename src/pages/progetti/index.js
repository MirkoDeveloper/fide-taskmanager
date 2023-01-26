import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Content/Content";

export default function Home() {
    return (
        <main>
            <div className="container-fluid g-0 d-flex">
                <Navbar />
                <Content />
            </div>
        </main>
    );
}
