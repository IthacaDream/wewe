import Head from 'next/head';
import 'bulma';
import './Head.scss';


function MyHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,
        shrink-to-fit=no"
      />
      <meta name="theme-color" content="#fff" />
      <meta name="description" content={description} />
      <link rel="icon" href="https://t9t.io/favicon.ico" />
      <link rel="apple-touch-icon" href="https://t9t.io/favicon.ico" />
      <link rel="bookmark" href="https://t9t.io/favicon.ico" />
      <link rel="shortcut icon" href="https://t9t.io/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />

    </Head>
  );
}

export default MyHead;
