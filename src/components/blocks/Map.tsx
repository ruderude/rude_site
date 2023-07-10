import styles from './map.module.scss'

export const Map = () => {
  return (<>
    <div className={styles.map_wrap}>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.800772111579!2d139.68368151204544!3d35.70651997246472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2cbd4428069%3A0xe6dca0e2f611412!2z44CSMTY0LTAwMDMg5p2x5Lqs6YO95Lit6YeO5Yy65p2x5Lit6YeO77yU5LiB55uu77yR4oiS77yRIOiLseODk-ODqw!5e0!3m2!1sja!2sjp!4v1685315178201!5m2!1sja!2sjp" width="600" height="450" style={{border: 0}} loading="lazy"></iframe>
      </div>
      <div className={styles.map_text}>
        〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階 <br />
        JR中央線・総武線「東中野駅」東口北側でて目の前 <br />
      </div>
    </div>
  </>)
}

