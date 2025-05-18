import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Samuel Adepoju - Senior Data Analyst"
        description="Senior Data Analyst with a passion for machine learning, data science, and building innovative projects."
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Samuel Adepoju Portfolio",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
