import { PropsWithChildren } from "react";
import { Header } from "@/widgets/LayoutHeader/Header";
import { Footer } from "@/widgets/LayoutFooter/Footer";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="main-layout">
            <Header/>
              <main className="main-content">
                {children}
              </main>
            <Footer/>
        </div>
    )
}
