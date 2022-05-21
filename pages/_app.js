import "../styles/app.scss";
import { AnimatePresence } from "framer-motion";
import useNav from "../utils/useNav";

function MyApp({ Component, pageProps, router }) {
  const primaryColor = "#000";
  const secondaryColor = "#fff";
  const [
    showHiddenNav,
    setShowHiddenNav,
    openHandler,
    closeHandler,
  ] = useNav();

  const innerProps = {
    primaryColor,
    secondaryColor,
    showHiddenNav,
    setShowHiddenNav,
    openHandler,
    closeHandler,
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <Component
        {...pageProps}
        key={router.route}
        {...innerProps}
      />
    </AnimatePresence>
  );
}

export default MyApp;
