import { Provider, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import "../styles/globals.css"

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = () => {
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
  ]
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect connectors={connectors}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
