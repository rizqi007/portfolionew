import Detailprofil from "./components/detailprofil";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import Layanan from "./components/layanan";
import Lokasimaps from "./components/lokasimaps";
import Pagecontent from "./components/pagecontent";
import Pengalamankerja from "./components/pengalamankerja";
import Skilldankeahlian from "./components/skilldankeahlian";
import Scroll from './components/Scroll';

export default function Page() {
  return (
    <Pagecontent>
      <Jumbotron />
      <div className="mt-16">
      <Scroll />
      </div>
      <Layanan />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px,auto] p-5 max-w-5xl mx-auto mt-5 md:gap-10">
        <div>
          <div className="grid grid-cols-1 gap-10">
            <Detailprofil />
            <Skilldankeahlian />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-10">
            <Pengalamankerja />
            <Lokasimaps />
          </div>
        </div>
      </div>
      <Footer />
    </Pagecontent>
  )
}
