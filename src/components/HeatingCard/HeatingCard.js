import ButtonInc from "../Button/ButtonInc";
import ButtonDec from "../Button/ButtonDec";
import fire from "../../fire.svg";
import Display from "../Display";
import "../../heating.css";

const HeatingCard = ({ heatingOn }) => (
    <div className="container border border-primary rounded">
        <div className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="134pt" version="1.1" viewBox="-22 0 134 134.06032" width="134pt">
            <path 
            className={ heatingOn ? "icon_on" : "icon_off" } 
            d="M 23.347656 134.058594 C 8.445312 84.953125 39.933594 67.023438 39.933594 67.023438 C 37.730469 93.226562 52.621094 113.640625 52.621094 113.640625 C 58.097656 111.988281 68.550781 104.265625 68.550781 104.265625 C 68.550781 113.640625 63.035156 134.046875 63.035156 134.046875 C 63.035156 134.046875 82.34375 119.117188 88.421875 94.320312 C 94.492188 69.523438 76.859375 44.628906 76.859375 44.628906 C 77.921875 62.179688 71.984375 79.441406 60.351562 92.628906 C 60.933594 91.957031 61.421875 91.210938 61.796875 90.402344 C 63.886719 86.222656 67.242188 75.359375 65.277344 50.203125 C 62.511719 14.890625 30.515625 0 30.515625 0 C 33.273438 21.515625 25.003906 26.472656 5.632812 67.3125 C -13.738281 108.144531 23.347656 134.058594 23.347656 134.058594 Z M 23.347656 134.058594 " />
            </svg>
            <Display />
        </div>
        <div className="container d-flex justify-content-around mb-3 mt-5">
            <ButtonInc text={ "+" }/>
            <ButtonDec text={ "-" }/>
        </div>
    </div>
);

export default HeatingCard;