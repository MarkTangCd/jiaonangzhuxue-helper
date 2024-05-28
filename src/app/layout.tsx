import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "胶囊助学计划辅助工具",
  description: "配套胶囊助学计划新概念课程的辅助学习工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <header className="w-full">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>单词</a>
                  </li>
                  <li>
                    <a>习惯用法</a>
                  </li>
                  <li>
                    <a>语法</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">胶囊新概念学习助手</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>单词</a>
                </li>
                <li>
                  <a>习惯用法</a>
                </li>
                <li>
                  <a>语法</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </header>
        {/* <header className="w-full h-10 flex bg-[#C05E51] text-white items-center pl-4">
          <span>胶囊助学计划辅助工具</span>
        </header> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
