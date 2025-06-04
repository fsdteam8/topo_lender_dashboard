import AuthProvider from "@/components/Providers/AuthProvider";
import "../globals.css";
import QueryProvider from "@/components/Providers/query-provider";
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
