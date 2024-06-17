import { Routes, Route } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import RootLayout from "./components/RootLayout.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0, refetchInterval: 0 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </RootLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
