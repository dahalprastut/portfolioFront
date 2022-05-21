import "../styles/app.scss";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const primaryColor = "#000";
  const secondaryColor = "#fff";

  const innerProps = {
    primaryColor,
    secondaryColor,
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
