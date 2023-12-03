import { boxContainer } from "../BoxContainer/BoxContainer";

const Footer = () => {
  return (
    <div class={boxContainer}>
      <div>
        <span>&#169;CopyRight 2023</span>
        <span class="ml-2">Term & Condition</span>
        <span class="ml-2">Privacy Policy</span>
        <span class="ml-2">Help</span>
      </div>
      <div>
        <button>Carousel </button>
      </div>
    </div>
  );
};

export default Footer;
