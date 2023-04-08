import Link from "next/link";
import { LayoutProps } from "../_type";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 mb-8 py-4 text-white">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            Home
          </Link>
          <span className="mx-auto">Welcome to my blog</span>
        </div>
      </header>
      <main className="container mx-auto flex-1 ">{children}</main>
      <footer className="bg-gray-900 mt-8 py-4 text-white">
        <div className="container mx-auto flex justify-center">
          &copy; 2023 Yamani Yuda
        </div>
      </footer>
    </div>
  );
};

export default Layout;
