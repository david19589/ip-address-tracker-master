/* eslint-disable react/prop-types */
import Styles from "./Header.module.css";
import  Arrow  from "/src/assets/icon-arrow.svg";
const Header = (props) => {
  const {
    IpAddress,
    Location,
    Timezone,
    ISP,
    ipInput,
    handleInputChange,
    locateIP,
    isValidIP,
  } = props;

  return (
    <div className={Styles.headerDiv}>
      <h1 className={Styles.IpAddress}>IP Address Tracker</h1>
      <div className={Styles.InputArrow}>
        <input
          className={Styles.Input}
          placeholder="Enter IP Address"
          type="text"
          value={ipInput}
          onChange={handleInputChange}
          
        />
        <img src={Arrow} onClick={locateIP} disabled={!isValidIP} className={`${!isValidIP ? Styles.DisabledArrow : Styles.Arrow}`}></img>
      </div>
      <div className={Styles.InfoDiv}>
        <div className={Styles.DivOne}>
          <h1 className={Styles.InfoAddress}>IP Address</h1>
          <h1 className={Styles.InfoIp}>{IpAddress}</h1>
        </div>
        <u className={Styles.Line}></u>
        <div className={Styles.DivTwo}>
          <h1 className={Styles.InfoLocation}>Location</h1>
          <h1 className={Styles.InfoLocationLocal}>{Location}</h1>
        </div>
        <u className={Styles.Line}></u>
        <div className={Styles.DivThree}>
          <h1 className={Styles.InfoTimeZone}>Timezone</h1>
          <h1 className={Styles.InfoTimeZoneLocal}>{Timezone}</h1>
        </div>
        <u className={Styles.Line}></u>
        <div className={Styles.DivFour}>
          <h1 className={Styles.InfoIsp}>ISP</h1>
          <h1 className={Styles.InfoIspLocal}>{ISP}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
