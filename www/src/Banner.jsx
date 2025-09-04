import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const Banner = () => {
    iziToast.success({
        title: "Susccess",
        message: "Your choice saved, ty",
        position: "topCenter"
    });

    localStorage.setItem("_", true);
};

export default Banner;
