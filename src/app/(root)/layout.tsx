import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function RootGroupLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
