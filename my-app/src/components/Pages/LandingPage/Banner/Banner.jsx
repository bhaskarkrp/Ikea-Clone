import styles from "./Banner.module.css";
import BannerSearch from "./BannerSearch";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { SvgIconBanner } from "./SvgIconBanner";
import { NavLink } from "react-router-dom";

export const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerLeftPart}>
        <div className={styles.BannerTitle}>
          <SvgIconBanner />
        </div>
      </div>
      <div className={styles.BannerRightPart}>
        <NavLink className={styles.GoshoppingContainer} to='./home' >
            <div>Go Shopping</div>
            <div className={styles.TransitionArrow}>
              <ArrowForwardIcon style={{ fontSize: "35" }} />
            </div>
          
        </NavLink>

        <BannerSearch />
      </div>
    </div>
  );
};
