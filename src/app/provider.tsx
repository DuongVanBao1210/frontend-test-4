import ReactQueryProvider from "@/providers/react-query-provider";

function AppProvider({ children }: { children: React.ReactNode }) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
}

export default AppProvider;
