import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function AdminLayout({ children }) {
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
            background: "#F8FAFC",
          }}
        >
          <h2>Admin Panel</h2>

          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AdminLayout;