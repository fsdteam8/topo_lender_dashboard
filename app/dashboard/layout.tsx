import AuthProvider from "@/components/Providers/AuthProvider";
import QueryProvider from "@/components/Providers/query-provider";
import "../globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AuthProvider>
        <QueryProvider>{children}</QueryProvider>
      </AuthProvider>
    </main>
  );
}
