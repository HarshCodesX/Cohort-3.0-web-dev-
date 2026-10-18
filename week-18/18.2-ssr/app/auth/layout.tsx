import Navbar from "@/components/Navbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
                {children}
            </div>
        </div>
    );
}