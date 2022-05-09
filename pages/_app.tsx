import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Overlay from "../layouts/Overlay";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ArchStore</title>
        <meta
          name="description"
          content="Criado como atividade para o processo de seleção da Arch Office"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Overlay>
            <Component {...pageProps} />
          </Overlay>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
