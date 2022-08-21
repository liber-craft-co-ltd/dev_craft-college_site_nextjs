import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
export default function Home() {
  return (
    <Layout showNav>
      <main>
        <section className="key-visual">
          <div className="body">
            <ul className="tag">
              <li>業界最長期間</li>
              <li>マンツーマンサポート</li>
            </ul>
            <h1 className="main-message">
              未経験からAIエンジニア・
              <br />
              データサイエンティストを
              <br className="sp-br" />
              本気で目指す。
            </h1>
            <div className="sub-message">
              地に足がついた長期的学習で
              <br className="sp-br" />
              未来を変えたい方へ。
            </div>
            <button type="button" className="button-jump-to-inquiry">
              <a href="#inquiry-conversion-area">今すぐ無料で相談する</a>
            </button>
          </div>
        </section>
        <section className="why-learn">
          <h1 className={`${styles.whyLearn_title} heading_1`}>
            なぜ今、AI・データサイエンスを学ぶべきか？
          </h1>

          <div className="reason reason-first">
            <div className="text-area">
              <div className="title">
                AI・データ活用人材の転職ニーズは
                <span>
                  <br />
                  増加傾向
                </span>
              </div>
              <div className="description">
                経済産業省が2019年3月に公開した「IT人材需給に関する調査」では、市場の需要に対して、今後も人材が不足すると予想。世の中のDX化の流れにともない、データサイエンティストをはじめとするデータ活用人材は今後も高い需要が見込まれています。
              </div>
            </div>
            <figure>
              <img
                src="/images/3-1_why_learn.svg"
                alt="AI・データ活用人材の転職ニーズは増加傾向"
              />
              <figcaption>
                2019年3月
                <br />
                経済産業省
                <a
                  href="https://www.meti.go.jp/policy/it_policy/jinzai/houkokusyo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  「IT人材需給に関する調査」
                </a>
                より引用
              </figcaption>
            </figure>
          </div>

          <div className="reason reason-second">
            <div className="text-area">
              <div className="title">
                データ活用で業務・事業を
                <br />
                <span>改善できる</span>
              </div>
              <div className="description">
                多くの職種でデータ活用の機会はあります。自社データを抽出して分析するスキルなど、これまで外注していた作業を自分で行えるようになることで、業務を改善したり、ご自身の社内価値を高めることができます。
              </div>
            </div>
            <figure>
              <img
                src="/images/3-2_why_learn.svg"
                alt="データ活用で業務・事業を改善できる"
              />
            </figure>
          </div>
        </section>
        <section className="why-learning-is-hard">
          <div>
            <h1 className={`heading_1 ${styles.whyLearningIsHard_title}`}>
              AI・データサイエンスの
              <br className="sp-br" />
              学習が大変な理由
            </h1>
          </div>

          <div className="body-box">
            <figure className="top-image">
              <img
                src="/images/4_learning_is_hard.png"
                alt="AI・データサイエンスの学習は大変"
              />
            </figure>

            <div className="reason reason-first">
              <div className="title">
                データ活用に必要な
                <br className="sp-br" />
                知識の幅広さ
              </div>
              <figure>
                <img
                  src="/images/4-2_icon.svg"
                  alt="データ活用に必要な知識の幅広さ"
                />
              </figure>
              <div className="description">
                AIやデータ分析の分野は、比較的難しい内容であることに加え、必要な知識の範囲も幅広いため、「実務で必要なスキルを身につけるために、どの知識をどう学ぶか」という見極めが難しいです。
              </div>
            </div>

            <div className="reason reason-second">
              <div className="title">
                知識を活用するための
                <br className="sp-br" />
                自走力が必要
              </div>
              <figure>
                <img
                  src="/images/4-3_icon.svg"
                  alt="知識を活用するための自走力が必要"
                />
              </figure>
              <div className="description">
                実務の現場では「自分の頭で考え、自分で課題解決」する力（＝自走力）が求められます。せっかく教科書で身につけた知識も、実践を据えた学習を実施しなければ、いざ手を動かそうと思っても動きません。
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="title-box">
            <h1 className={`${styles.features_title} heading_1`}>
              CraftCollegeの
              <br className="sp-br" />
              サービスの特徴
            </h1>
            <h2>
              Craft Collegeなら挫折せずに、
              <br className="sp-br" />
              データ活用人材を目指せる理由
            </h2>
          </div>

          <div className="feature">
            <div className="text-area">
              <div className="number">01</div>
              <div className="title">
                <span>約9ヶ月の長期間</span>で、しっかりと必要な分野を学習できる
              </div>
              <div className="description">
                <span>長期間の密なカリキュラム</span>
                に取り組むことで、確実な技術習得を目指します。SQLやPythonによるデータハンドリング・統計学/機械学習・基礎的なWebエンジニアリングなど、
                <span>実務で必要な分野を深く、幅広く学習</span>します。
              </div>
            </div>
            <figure>
              <img
                src="/images/5_feature1.svg"
                alt="約9ヶ月の長期間でしっかりと必要な分野を学習できる"
              />
            </figure>
          </div>

          <div className="feature position-reverse">
            <div className="text-area">
              <div className="number">02</div>
              <div className="title">
                実践的なカリキュラム設計で、<span>徹底的に自走力を鍛える</span>
              </div>
              <div className="description">
                実務経験豊富な現役データサイエンティストがカリキュラムを考案しており、
                <span>実際の企業ニーズや課題に即して</span>います。
                <span>実務で最も重要な「自走力」</span>
                を徹底的に鍛え、新たな課題に対する考え方やリサーチ能力を伸ばします。
              </div>
            </div>
            <figure>
              <img
                src="/images/5_feature2.svg"
                alt="実践的なカリキュラム設計で、徹底的に自走力を鍛える"
              />
            </figure>
          </div>

          <div className="feature">
            <div className="text-area">
              <div className="number">03</div>
              <div className="title">
                <span>いつでもどこでも受講可能な</span>環境を提供
              </div>
              <div className="description">
                <span>完全オンラインでのカリキュラム</span>
                なので、学習期間中は「いつでもどこでも受講可能」な環境を用意しています。個々の環境に合わせた学習プランニングを講師とすり合わせることで、
                <span>自分に合ったやり方で進めていく</span>ことができます。
              </div>
            </div>
            <figure>
              <img
                src="/images/5_feature3.svg"
                alt="いつでもどこでも受講可能な環境を提供"
              />
            </figure>
          </div>

          <div className="feature position-reverse">
            <div className="text-area">
              <div className="number">04</div>
              <div className="title">
                <span>効率的・継続的に</span>学習を進めるサポート体制
              </div>
              <div className="description">
                効率的かつ継続的に学習を続けるために、学習をしっかりサポートする環境を用意しています。
                <br />
                <br />
                ＜サポート例＞
                <br />
                ・理解力向上を重視した<span>課題添削</span>
                <br />
                ・質問プラットフォームを使った<span>Q&A体制</span>
                <br />
                ・チャットやオンライン<span>メンタリング</span>
                <br />
              </div>
            </div>
            <figure>
              <img
                src="/images/5_feature4.svg"
                alt="効率的・継続的に学習を進めるサポート体制"
              />
            </figure>
          </div>
        </section>

        <section className="inquiry-area">
          <div className="message">
            まずは気軽に、
            <br />
            オンライン相談会にご参加ください！
          </div>
          <button type="button" className="button-jump-to-inquiry">
            <a href="#inquiry-conversion-area">今すぐ無料で相談する</a>
          </button>
        </section>

        <section id="curriculum-goal">
          <h1 className={`${styles.curriculumGoal_title} heading_1`}>
            到達目標
          </h1>
          <h2>
            未経験から「AI・データ活用人材の」就職エントリーレベルへの到達を目標とします
          </h2>
          <div className="title">●CraftCollegeで目指せるAI・データ活用人材</div>

          <div className="positions">
            <div className="position-card">
              <div className="position">データアナリスト</div>
              <figure>
                <img src="/images/6_dot.png" />
              </figure>
              <div className="position-description">
                データ分析を通じたビジネス課題の抽出や施策提案に特化した人材
              </div>
            </div>
            <div className="position-card">
              <div className="position">AI・機械学習エンジニア</div>
              <figure>
                <img src="/images/6_dot.png" />
              </figure>
              <div className="position-description">
                数理科学への知見が深く、AI・機械学習アルゴリズム開発やエンジニアリングに特化した人材
              </div>
            </div>
            <div className="position-card">
              <div className="position">データサイエンティスト</div>
              <figure>
                <img src="/images/6_dot.png" />
              </figure>
              <div className="position-description">
                アナリティクス、AI・機械学習エンジニアのスキルセットを幅広く揃えた人材
              </div>
            </div>
          </div>

          <div className="one-point">
            <div className="point">POINT</div>
            <div className="description">
              好みや得意な分野に合わせて、各方面に幅広くキャリアアップを目指すことができるように、そのための土台となるスキルの習得を目指します。
            </div>
          </div>
        </section>

        <section className="load-map">
          <h1 className={`${styles.loadMap_title} heading_1`}>
            Craft Collogeの
            <br className="sp-br" />
            ロードマップ
          </h1>

          <div className="step">
            <div className="number">1</div>
            <div className="title">基礎となる知識をしっかりと習得</div>
            <figure>
              <img src="/images/7_load_map_step1.png" width="60px" />
            </figure>
            <div className="description">
              弊社作成eラーニングを中心とした事前学習で、まずは基礎知識を習得します。疑問点はもちろん講師へ質問OKなので、学習の立ち上げを着実に積み上げていきましょう。
            </div>
          </div>

          <figure className="vector">
            <img src="/images/7_vector.png" />
          </figure>

          <div className="step">
            <div className="number">2</div>
            <div className="title">学習・質問・理解のサイクル</div>
            <figure>
              <img src="/images/7_load_map_step2.png" width="420px" />
            </figure>
            <div className="description">
              演習課題の取り組みを通じて、自分で実装・開発する力を身につけます。自分の頭で考え・調べながら課題を解いたり、分からないところを明確にして質問する場を設けることで、実務で一番重要な「自走力」を、ここでしっかりと養います。
            </div>
          </div>

          <div className="vector">
            <img src="/images/7_vector.png" />
          </div>

          <div className="step">
            <div className="number">3</div>
            <div className="title">
              自分で思考することができるデータ活用人材へ
            </div>
            <figure>
              <img src="/images/7_load_map_step3.png" width="210px" />
            </figure>
            <div className="description">
              自分で思考し、課題解決ができる人（=
              自走力がある人）は、誰かに相談しなくとも自分で案件をこなしていくことができます。クラフトカレッジでは、このような自走力のある人材に成長することを到達点としています。
            </div>
          </div>
        </section>

        <section className="inquiry-area">
          <div className="message">
            まずは気軽に、
            <br />
            オンライン相談会にご参加ください！
          </div>
          <button type="button" className="button-jump-to-inquiry">
            <a href="#inquiry-conversion-area">今すぐ無料で相談する</a>
          </button>
        </section>

        <section id="learning-curriculum">
          <h1 className={`${styles.learningCurriculum_title} heading_1`}>
            学習カリキュラム
          </h1>

          <div className="section">
            <div className="left-box">
              <div className="term">1-2ヶ月</div>
              <div className="circle"></div>
              <div className="dot-line"></div>
            </div>
            <div className="right-box">
              <div className="section-title">
                Section1.
                <br />
                <span>データアナリティクスを学ぶ</span>
              </div>
              <div className="description">
                <div className="main-message">
                  SQLやPythonを習って、まずはデータをしっかりハンドリングするための、分析の基礎を学んでいきましょう。
                </div>
                <div className="content-list">
                  <div className="title">＜演習課題＞</div>
                  <ul>
                    <li>SQLによるデータ加工・抽出</li>
                    <li>Pythonによるデータ集計・可視化</li>
                    <li>Pythonによるデータ可視化アプリの作成</li>
                    <li>Pythonによる統計モデリング</li>
                  </ul>
                </div>
                <ul className="goals">
                  <li>
                    <span>SQLやPythonを用いた複雑なデータハンドリング</span>
                    ができるようになります
                  </li>
                  <li>
                    簡単な<span>データ可視化Webアプリ</span>
                    を作れることを到達目標とします
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="left-box">
              <div className="term">3-5ヶ月</div>
              <div className="circle"></div>
              <div className="dot-line"></div>
            </div>
            <div className="right-box">
              <div className="section-title">
                Section2.
                <br />
                <span>AI・機械学習の基礎を学ぶ</span>
              </div>
              <div className="description">
                <div className="main-message">
                  Pythonを使って、いよいよAI・機械学習といった技術開発に取り組んでいきます。まずは、基本的なアルゴリズムの習得を目指しましょう。
                </div>
                <div className="content-list">
                  <div className="title">＜演習課題＞</div>
                  <ul>
                    <li>Pythonによる、教師あり学習 （3つの課題があります）</li>
                    <li>Pythonによる、教師なし学習</li>
                    <li>機械学習を活用したWebアプリ構築（基礎）</li>
                  </ul>
                </div>
                <ul className="goals">
                  <li>
                    需要予測や価格予測といった、
                    <span>基本的な機械学習アルゴリズム</span>
                    を実装することができるようになります
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="left-box">
              <div className="term">6-8ヶ月</div>
              <div className="circle"></div>
              <div className="dot-line"></div>
            </div>
            <div className="right-box">
              <div className="section-title">
                Section3.
                <br />
                <span>AI・機械学習の応用を学ぶ</span>
              </div>
              <div className="description">
                <div className="main-message">
                  データ分析の手法の基礎を学んだ後は、AI・機械学習の応用的な分野に取組み、実務で必要なスキルを伸ばしていきます。
                </div>
                <div className="content-list">
                  <div className="title">＜演習課題＞</div>
                  <ul>
                    <li>Deep Learningによる画像解析</li>
                    <li>自然言語処理による日本語テキスト解析</li>
                    <li>スクレイピングやレコメンデーションエンジン開発</li>
                    <li>数理最適化アルゴリズム開発</li>
                    <li>機械学習を活用したWebアプリ構築（応用）</li>
                  </ul>
                </div>
                <ul className="goals">
                  <li>
                    <span>発展的なAIアルゴリズム</span>
                    を実装することができるようになります
                  </li>
                  <li>
                    <span>AI・機械学習を活用したWebアプリ構築</span>
                    ができるようになります
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="left-box">
              <div className="term">9ヶ月</div>
              <div className="circle"></div>
              <div className="dot-line"></div>
            </div>
            <div className="right-box">
              <div className="section-title">
                Section4.
                <br />
                <span>ポートフォリオを作成する</span>
              </div>
              <div className="description">
                <div className="main-message">
                  最終月は、転職活動で必要となるポートフォリオを作成していきましょう。内容についてはもちろん、企業に評価されるような構成のポイントについても講師からアドバイスいたします。
                </div>
                <div className="content-list">
                  <div className="title">＜主な流れ＞</div>
                  <ul>
                    <li>課題設定、データ収集</li>
                    <li>データ分析、モデリング、アルゴリズム開発</li>
                    <li>ダッシュボード開発、Webアプリ開発</li>
                  </ul>
                </div>
                <ul className="goals">
                  <li>
                    知識を定着化させ、
                    <span>課題設定から開発・アウトプット作成</span>
                    まで一気通貫して実装できるようになります
                  </li>
                  <li>（転職活動でのアピールポイントにもなります）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="left-box">
              <div className="term">卒業後</div>
              <div className="graduate"></div>
            </div>
            <div className="right-box">
              <div className="section-title">
                Extra.
                <br />
                <span>卒業後のサポート</span>
              </div>
              <div className="description">
                <ul className="goals">
                  <li>学習コンテンツは無期限で視聴可能</li>
                  <li>キャリアサポートは卒業後も利用OK</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="how-to-proceed">
          <h1 className={`${styles.howToProceed_title} heading_1`}>
            Section1〜3の、
            <br className="sp-br" />
            それぞれの演習課題の進め方
          </h1>

          <div className="step-title">
            <figure>
              <img src="/images/9-1-1_no.svg" alt="1.事前学習" />
            </figure>
          </div>
          <div className="step step-display-flex">
            <figure className="icon">
              <img src="/images/9-1-2_icon.png" width="180px" />
            </figure>
            <div className="right-box">
              <div className="description">
                まずはeラーニングや、Githubなどの公式サイトやチュートリアルなどの一次情報を読んで基礎知識をつけましょう。現役のエンジニアが新しい知識を学ぶ際に行っていることを体感し、一人で新しい知識を学ぶ際にも役立つような「知識のインプットの仕方」を身につけていきましょう。
              </div>
              <div className="tool-use">
                <div className="title">●使用予定サービス</div>
                <div className="service">
                  <figure className="logo">
                    <img
                      src="/images/9-1-3_vimeo.svg"
                      alt="Vimeo logo"
                      width="32px"
                    />
                  </figure>
                  <div className="name">
                    <a
                      href="https://vimeo.com/jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vimeo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-title">
            <figure>
              <img src="/images/9-2-1_no.svg" alt="2.各課題へ挑戦" />
            </figure>
          </div>
          <div className="flex-wrapper">
            <div className="step">
              <figure className="icon">
                <img src="/images/9-2-2_icon.png" width="180px" />
              </figure>
              <div className="description">
                演習課題に対して実装を進めていきましょう。課題にある問題を解き、解き方・考え方の理解を深めます。
              </div>
              <div className="tool-use">
                <div className="title">●使用予定サービス</div>
                <div className="service">
                  <figure className="logo">
                    <img
                      src="/images/9-2-3_kaggle.png"
                      alt="Kaggle logo"
                      width="60px"
                    />
                  </figure>
                  <div className="name">
                    <a
                      href="https://www.kaggle.com/c/about/community"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kaggle Community Competitions
                    </a>
                    など
                  </div>
                </div>
              </div>
            </div>

            <div className="arrows-area">
              <figure>
                <img src="/images/9-2_arrows.svg" />
              </figure>
            </div>

            <div className="step">
              <figure className="icon">
                <img src="/images/9-2-4_icon.png" width="180px" />
              </figure>
              <div className="description">
                自分で考えても分からないことは積極的に講師に質問して、不明点をクリアにしながら進めていくことができます。
              </div>
              <div className="tool-use">
                <div className="title">●使用予定サービス</div>
                <div className="service">
                  <figure className="logo">
                    <img
                      src="/images/9-2-5_stack-overflow.svg"
                      alt="Stack Overflow for Teams logo"
                    />
                  </figure>
                  <div className="name">
                    <a
                      href="https://stackoverflow.co/teams/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stack Overflow for Teams
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-title">
            <figure>
              <img src="/images/9-3-1_no.svg" alt="3.課題の添削" />
            </figure>
          </div>
          <div className="step step-display-flex">
            <figure className="icon">
              <img src="/images/9-3-2_icon.png" width="180px" />
            </figure>
            <div className="right-box">
              <div className="description">
                講師から演習課題のフィードバックをうけます。自分では気づけない、新しい観点を知識として吸収することができます。またアドバイスをもとに、自分で改善していく力をつけていきましょう。
              </div>
              <div className="tool-use">
                <div className="title">●使用予定サービス</div>
                <div className="service">
                  <figure className="logo">
                    <img
                      src="/images/9-3-3_google-classroom.svg"
                      alt="Google Classroom logo"
                      width="36px"
                    />
                  </figure>
                  <div className="name">
                    <a
                      href="https://edu.google.com/intl/ALL_jp/workspace-for-education/classroom/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Classroom
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="price">
          <h1 className={`${styles.price_title} heading_1`}>料金</h1>
          <div className="comment-wrapper">
            <div className="comment">業界最高水準のコストパフォーマンス</div>
          </div>
          <div className="course-name">AI・データサイエンスコース</div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="craft-college">Craft College</th>
                  <th className="header">A社</th>
                  <th className="header">B社</th>
                  <th className="header">C社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row1">
                  <td>料金（税込）</td>
                  <td className="craft-college">
                    <span>¥396,000</span>
                  </td>
                  <td>〜¥1,078,000</td>
                  <td>¥858,000</td>
                  <td>〜¥569,800</td>
                </tr>
                <tr className="row2">
                  <td>受講期間</td>
                  <td className="craft-college">
                    <span>9ヶ月</span>
                  </td>
                  <td>3 〜 9ヶ月</td>
                  <td>6ヶ月</td>
                  <td>2 〜 6ヶ月</td>
                </tr>
                <tr className="row3">
                  <td>形式</td>
                  <td className="craft-college">オンライン完結型</td>
                  <td>オンライン完結型</td>
                  <td>
                    対面・オンライン
                    <br />
                    授業型
                  </td>
                  <td>オンライン完結型</td>
                </tr>
                <tr className="row4">
                  <td>学習スキル</td>
                  <td className="craft-college">
                    <ul className="learning-skills">
                      <li>SQL、Python</li>
                      <li>
                        Webアプリ言語基礎
                        <br />
                        （HTML、CSS、JavaScript）
                      </li>
                      <li>機械学習、統計解析</li>
                      <li>自然言語処理</li>
                      <li>ディープラーニング</li>
                      <li>レコメンデーション</li>
                      <li>Webスクレイピング</li>
                      <li>数理最適化</li>
                      <li>Webアプリ構築</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="learning-skills">
                      <li>Python</li>
                      <li>
                        Webアプリ言語基礎
                        <br />
                        （HTML、CSS、JavaScript）
                      </li>
                      <li>機械学習、統計解析</li>
                      <li>自然言語処理</li>
                      <li>ディープラーニング</li>
                      <li>Webスクレイピング</li>
                      <li>Webアプリ構築</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="learning-skills">
                      <li>Python、R</li>
                      <li>機械学習、統計解析</li>
                      <li>自然言語処理</li>
                      <li>ディープラーニング</li>
                      <li>数理最適化</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="learning-skills">
                      <li>Python</li>
                      <li>機械学習、統計解析</li>
                      <li>自然言語処理</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="supplementation">
            <li>
              1.
              技術やキャリアに関して経験豊富なスタッフに週に最大2回の面談（メンタリング）が可能
            </li>
            <li>
              2.
              平日日中は無制限に質問可能な環境を準備（一部、お盆期間や年末年始は除く可能性あり）
            </li>
          </ul>
        </section>

        <section id="faq">
          <h1 className={`${styles.faq_title} heading_1`}>
            よくある質問（FAQ）
          </h1>
          <ul>
            <li>
              <input type="checkbox" id="toggle01" className="toggle" />
              <label className="title" htmlFor="toggle01">
                Q. 全くの初学者でも問題ありませんか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  問題ございません。本コースは未経験から学習することを念頭においてカリキュラムを設計しています。ただし、PCの基本的な操作が問題なくでき、期間内に必要な学習時間を確保できること、きちんと学習にコミットできることが前提です。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle02" className="toggle" />
              <label className="title" htmlFor="toggle02">
                Q. どのくらいの学習時間が必要ですか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  合計1,000時間の学習が新しい技術習得の1つの目安となりますので、卒業後も継続的に学習することを想定すると、月に約80時間（受講期間9ヶ月で合計720時間）は確保することが望ましいです。特に働きながらの場合は、週に20時間の学習時間の確保は大変かもしれませんが、平日2時間・休日5時間ほどの学習時間を確保して、確実な技術習得を目指しましょう。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle03" className="toggle" />
              <label className="title" htmlFor="toggle03">
                Q. 働きながらの受講も可能ですか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  もちろん可能です。働きながらの方（パートタイム型）と、学習にフルコミットする方（フルタイム型）のどちらでも大丈夫です。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle04" className="toggle" />
              <label className="title" htmlFor="toggle04">
                Q. 教室の利用や自宅での学習は可能ですか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  Craft
                  Collegeは完全オンラインスクールですので、自宅などでの学習をお願いしております。もちろん遠方の方でも受講可能です。Wi-Fiなどのネットワーク環境は確保ください。リモートでの受講となるので、Zoom等を使ったオンラインメンタリングやWeb上での質問対応などを充実させております。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle05" className="toggle" />
              <label className="title" htmlFor="toggle05">
                Q. ノートPCの指定はありますか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  Macを正式推奨しています。AI・データサイエンス系の職種ではMacが使われることが多いためです。Windowsでも問題ありませんが、設定によってはソフトウェアがうまくインストールできないケースがあります。その場合、技術相談などで対応いたしますが、確実に動作することは保証できかねません。もしMacの購入などに関してお困りでしたら、無料相談会にてご相談ください。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle06" className="toggle" />
              <label className="title" htmlFor="toggle06">
                Q. 受講期間終了後でも受けられるサービスはありますか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  学習内容やポートフォリオ作成に関する「質問対応」は受講期間中のみのサポートとなります。一方で、転職サポートなどのキャリア支援は卒業後も無期限でご利用可能です。また、学習コンテンツに関しては、もちろん卒業後もご利用いただいて問題ございません。ぜひ卒業後の復習として、ご利用いただけますと幸いです。（無断複製・転載・配布行為は禁止です）
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle07" className="toggle" />
              <label className="title" htmlFor="toggle07">
                Q. 学習内容が難しすぎる場合はどうしたら良いでしょうか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  学習期間中のオンライン面談・質問サポート・カリキュラムヒントなどで全力でサポートいたします。受講前の段階で不安な方は、ぜひ無料相談会でご相談いただくことをオススメいたします。また、カリキュラムの一部のみを部分的に受講する形式も用意しておりますので、無料相談会にて、ご相談ください。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle08" className="toggle" />
              <label className="title" htmlFor="toggle08">
                Q. 教えてくれる講師・メンターさんはどのような方々ですか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  現役のAIエンジニア・データサイエンティスト・データアナリストの方々が教えてくれます。大学生・卒業生・講師専属の方はおらず、実務経験にもとづいて、丁寧に適切にサポートいたします。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle09" className="toggle" />
              <label className="title" htmlFor="toggle09">
                Q.
                受講途中での中断や、カリキュラム途中までの受講希望は可能でしょうか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  現在正式には、受講中断・退学、カリキュラムの一部受講はご用意しておりませんが、内容次第で対応することができる可能性がありますので、一度無料相談会にて、ご相談ください。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle10" className="toggle" />
              <label className="title" htmlFor="toggle10">
                Q. お支払い方法はどうなりますか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  銀行振込・クレジットカード決済に対応しております。また、分割支払いも対応しておりますので、無料相談会にて、ご相談ください。
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="toggle11" className="toggle" />
              <label className="title" htmlFor="toggle11">
                Q. 法人による申込は対応していますか？
              </label>
              <div className="content">
                <p>
                  <span>A.</span>
                  法人様による申込も対応しておりますので、一度無料相談会にて、ご相談ください。その際に、法人による申込等を希望している旨をお伝えください。
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-us">
          <h1 className={`${styles.aboutUs_title} heading_1`}>
            運営会社のご紹介
          </h1>
          <div className="about-us-sub-title">
            クラフトカレッジ運営の他に、AI・データサイエンスを用いたコンサルティング・受託開発支援や、書籍の執筆を行っております。
          </div>
          <div className="services">
            <div className="service">
              <div className="title">データ活用ご支援</div>
              <figure>
                <img
                  src="/images/10-1_consult-data-utilization.svg"
                  alt="データ活用ご支援"
                />
              </figure>
              <div className="description">
                大手上場企業様へのデータ活用アドバイザリや施策適用支援、データ分析・AIアルゴリズム開発など、企業向け支援を幅広く実施しています。
              </div>
            </div>
            <div className="service">
              <div className="title">書籍・出版物の執筆</div>
              <figure>
                <img
                  src="/images/10-2_writing-books.svg"
                  alt="書籍・出版物の執筆"
                />
              </figure>
              <div className="description">
                弊社代表により、データ分析・AIに関する書籍を出版しています。
                <br />
                <br />
                <a
                  href="https://amzn.to/3I9aisp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  「統計学の基礎から学ぶ　Excelデータ分析の全知識」
                  <img
                    src="/images/10-3_icon-open-the-url.svg"
                    className="icon"
                  />
                </a>
                <br />
                <a
                  href="https://amzn.to/3umVEIk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  「ビジネスの現場で使える　AI&データサイエンスの全知識」
                  <img
                    src="/images/10-3_icon-open-the-url.svg"
                    className="icon"
                  />
                </a>
                <div className="bookicon-wrapper">
                  <a
                    href="https://amzn.to/3I9aisp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/10-4_excel-book-icon.jpg"
                      alt="bookicon1"
                      width="90px"
                    />
                  </a>
                  <a
                    href="https://amzn.to/3umVEIk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/10-5_AIdata-book-icon.jpg"
                      alt="bookicon2"
                      width="90px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry-conversion-area">
          <h1 className={`${styles.inquiryConversionArea_title} heading_1`}>
            無料説明会に
            <br className="sp-br" />
            参加申し込みをする
          </h1>
          <figure>
            <img src="/images/11_book-icon.svg" />
          </figure>
          <div className="message">
            1on1の説明会となります。
            <br className="sp-br" />
            学習や転職に関してなど、不安なことがあれば
            <br />
            何でもお話いただいて大丈夫です。
            <br />
            無理な勧誘は一切ありませんので、
            <br className="sp-br" />
            気軽にお申し込みください。
          </div>
          <button type="button" className="cv-button-to-inquiry">
            <Link href="/inquiry-info-session">
              <a>面談日程を予約する</a>
            </Link>
          </button>
          <div className="comment">
            ※スマホ・PCどちらでも、
            <br className="sp-br" />
            約1分でカンタンに予約できます
          </div>
        </section>
      </main>
    </Layout>
  );
}
