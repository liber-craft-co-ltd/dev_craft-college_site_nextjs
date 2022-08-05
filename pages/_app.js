import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import '../styles/destyle.css';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  // Google Tag Manager start
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PS2FGM2' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  // Google Tag Manager end
  return <Component {...pageProps} />
}

export default MyApp
