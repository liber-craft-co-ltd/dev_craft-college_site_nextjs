import Layout from '../components/Layout'
import { useEffect } from 'react'
export default function InquiryInfoSession() {
  useEffect(() => {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://timerex.net/js/embed.js");
    document.body.appendChild(scriptEl);
    setTimeout(function () {
      window.TimerexCalendar();
    }, 1000);
  }, [])
  return (
    <Layout>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PS2FGM2"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {/* End Google Tåag Manager (noscript) */}

      <main id="inquiry-info-session">
        <section>
          <div
            id="timerex_calendar"
            data-url="https://timerex.net/s/liber-craft/16786da0"
          ></div>
        </section>
        <button type="button" className="button-back-to-top">
          <a href="/">Craft College TOPページに戻る</a>
        </button>
      </main>
    </Layout>
  )
}