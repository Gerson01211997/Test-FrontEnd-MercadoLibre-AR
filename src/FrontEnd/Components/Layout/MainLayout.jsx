import Head from "next/head";
import { useRouter } from "next/router";

const MainLayout = ({
    children,
    title,
    description,
    keywords
}) =>{
    const router = useRouter();
    const url = router.asPath;
    const canonicalURL = (url) =>
    `https://www.mercadolibre.com.ar${url}`
    return(
        <>
            <Head>
                <title>
                {title ?? 'MercadoLibre | Argentina'}
                </title>
                <meta name="mobileOptimized" content="360" />
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="Keywords" content={`Mercadolibre | Argentina, ${keywords ?? ''}`} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalURL(url)} />
                <link rel="preconnect" href="https://api.mercadolibre.com" />
            </Head>
            {children}
        </>
    )
}

export default MainLayout