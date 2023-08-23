import "./styles.css";
import "./Content";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="body">
      <div className="main-app bg-light p-4 shadow rounded col-12 col-md-5 col-xl-4 col-lg-4 col-sm-6">
        <Header tit="Todo-List" />
        <Content />
        <Footer cpyname="Sivabharath" />
      </div>
    </div>
  );
}
