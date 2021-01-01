import * as React from 'react'
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"

export function Header({ title }: IProps) {
  const { locale, formatMessage } = useIntl()
  const name = formatMessage({id: 'meta.name'});
  let builtTitle = name;
  if (title) {
    builtTitle = title + ' - ' + name;
  }

  return (
    <Helmet
      title={builtTitle}
      link={[
        {
          // Bootstrap
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          integrity:
            "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
          crossorigin: "anonymous"
        }
      ]}
    >
      <html lang={locale} />

      <script src="https://kit.fontawesome.com/d58dae4cfc.js" crossOrigin="anonymous" />
    </Helmet>
  )
}

interface IProps {
  title?: string
}
