import styles from "./Banner.module.css";
import BannerSearch from "./BannerSearch";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { SvgIconBanner } from "./SvgIconBanner";

export const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerLeftPart}>
        <div className={styles.BannerTitle}>
          <SvgIconBanner />
        </div>
      </div>
      <div className={styles.BannerRightPart}>
        <div className={styles.GoshoppingContainer}>
          Go Shopping{" "}
          <ArrowForwardIcon
            style={{ fontSize: "35", position: "relative", top: "5px" }}
          />{" "}
        </div>
        <BannerSearch />
      </div>
    </div>
  );
};
