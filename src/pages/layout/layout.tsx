import { store } from "store";
import ProtectedRoute from "app/providers/protected";
import { ReactNode } from "react";
import { Header, Footer } from "widgets";
import { Provider } from "react-redux";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <ProtectedRoute>
      <Provider store={store}>
        <div className="flex flex-col min-h-dvh bg-very-light-blue">
          <Header />
          <div className="w-full max-w-[1392px] mx-auto">{children}</div>
          <Footer />
        </div>
      </Provider>
    </ProtectedRoute>
  );
};

export default Layout;
