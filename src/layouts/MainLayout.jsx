import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "80vh",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
