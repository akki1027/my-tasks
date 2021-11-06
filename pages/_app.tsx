// グローバルに読み込む
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}


export default App
