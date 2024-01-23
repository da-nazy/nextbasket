"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MuiThemeProvider from "@/components/theme/Muithemeprovider";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider ,QueryClient} from "react-query";
import { Provider } from 'react-redux';
import store from "@/store";
const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
     <QueryClientProvider client={queryClient}>
 <SnackbarProvider anchorOrigin={{horizontal:'right',vertical:'bottom'}} >
 <Provider store={store}>
 <MuiThemeProvider>
      {children}
      </MuiThemeProvider>
  </Provider>
  </SnackbarProvider>
  </QueryClientProvider>
   
     </body>
    </html>
  );
}
