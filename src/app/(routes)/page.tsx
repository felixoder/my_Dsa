import BigContainerPage from "./container/BigContainer";
import Footer from "./container/Footer";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold">My DSA journey</h1>
      <BigContainerPage />
      <Footer/>
    </div>
  );
}
