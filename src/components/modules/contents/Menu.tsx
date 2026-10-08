import styles from './menu.module.scss'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdLiquor, MdOutlineLiquor, MdOutlineRestaurantMenu } from 'react-icons/md'
import { AiOutlinePayCircle } from 'react-icons/ai'
import { drinkSections, MenuSection } from '@/data/menu'
import { SHOP, yen } from '@/lib/site'

const DrinkSection = ({ section }: { section: MenuSection }) => (
  <section className={styles.drink_section}>
    <h3 className={styles.drink_title}>▼{section.name}</h3>
    <p>{section.description}</p>
    {section.items.some((item) => item.price) && (
      <ul className={styles.price_list}>
        {section.items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            {item.price && <span className={styles.price}>{yen(item.price)}</span>}
          </li>
        ))}
      </ul>
    )}
  </section>
)

export const Menu = () => {
  const included = drinkSections.filter((section) => section.included)
  const extra = drinkSections.filter((section) => !section.included)

  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <p className={styles.title}>
          <HiOutlineInformationCircle color={'#e94560'} />
          Menu
        </p>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h1 className={styles.sub_title}>
          東中野にあるカラオケバー・ルード：メニュー・料金システム
        </h1>
      </div>

      <br />

      <div>
        <div className={styles.text}>
          <h2 className={styles.menu_title}><MdOutlineRestaurantMenu />システム</h2>
          <div className={styles.text_detail}>
            ※喫煙可
          </div>
          <div className={styles.text_price}>
            テーブルチャージ：<span className={styles.big_text}>500円</span> <br />
            １時間：<span className={styles.big_text}>1,500円</span>
          </div>

          <p>
            　入店時に発生するテーブルチャージが<b>500円</b>。<br />
            その後1時間ごとに<b>1,500円</b>が追加されます。
          </p>

          <table className={styles.example_table}>
            <caption>お会計の目安</caption>
            <thead>
              <tr><th scope="col">滞在時間</th><th scope="col">お会計</th></tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((hours) => (
                <tr key={hours}>
                  <td>{hours}時間{hours === 1 ? '以内' : ''}</td>
                  <td>{yen(SHOP.price.tableCharge + SHOP.price.perHour * hours)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className={styles.notes}>
            <li>飲み物は飲み放題（テキーラなど一部追い金アリ）</li>
            <li>カラオケは歌い放題</li>
            <li>お通しにスナックなど乾き物がでます（おかわり自由）</li>
            <li>基本的にフードメニューはありません</li>
            <li>食べ物の持ち込み可能です（持ち込み料無料）</li>
          </ul>

          <h2 className={styles.menu_title}><MdLiquor />ドリンクメニュー（飲み放題）</h2>
          <p>※割もの代・ソフトドリンクは飲み放題に入っています。</p>
          {included.map((section) => (
            <DrinkSection key={section.name} section={section} />
          ))}

          <h2 className={styles.menu_title}><MdOutlineLiquor />別料金メニュー</h2>
          {extra.map((section) => (
            <DrinkSection key={section.name} section={section} />
          ))}

          <h2 className={styles.menu_title}><AiOutlinePayCircle />支払い</h2>
          <p>現金払いのほか、カード決済、PayPayでの決済がご利用できます。</p>
        </div>
      </div>
    </div>
  </>)
}
