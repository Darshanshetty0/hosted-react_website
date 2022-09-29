import { card } from "../assets";
import styles, {layout} from "../style";
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Find a better card deal <br className="sm:block"/> in a few easy steps.
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Find deals for every card that you own and get exclusive offers from multiple brands across the internet. Use these deals to cashback rewards and much more.
    </p>

    <Button styles="mt-10 rounded-full"/>
  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%]"/>
  </div>
</section>
)

export default CardDeal