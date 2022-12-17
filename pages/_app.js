import "../styles/app.scss";
import { AnimatePresence, transform } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

function MyApp({ Component, pageProps, router }) {
  const { mouseX, mouseY } = useMousePosition();

  const primaryColor = "#000";
  const secondaryColor = "#fff";

  const innerProps = {
    primaryColor,
    secondaryColor,
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className="mouse-follow"
        style={{
          left: mouseX,
          top: mouseY,
        }}
      ></div>
      <Component
        {...pageProps}
        key={router.route}
        {...innerProps}
      />
    </AnimatePresence>
  );
}

export default MyApp;
