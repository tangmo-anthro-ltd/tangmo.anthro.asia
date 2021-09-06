import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'gatsby-plugin-react-intl'

export function Header({ title, description, extraMeta = [] }: IProps) {
    const { locale, formatMessage } = useIntl()
    const name = formatMessage({ id: 'meta.name' })

    let builtTitle = name
    if (title) {
        builtTitle = title + ' - ' + name
    }

    const meta = [
        {
            name: 'description',
            content: description || formatMessage({ id: 'meta.defaultDesc' }),
        },
        {
            name: 'author',
            content: name,
        },
        ...extraMeta,
    ]

    return (
        <Helmet
            title={builtTitle}
            meta={meta}
            link={[
                {
                    // Bootstrap
                    rel: 'stylesheet',
                    href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
                    integrity: 'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
                    crossOrigin: 'anonymous',
                },
            ]}
        >
            <html lang={locale} />
        </Helmet>
    )
}
// <script src="https://kit.fontawesome.com/d58dae4cfc.js" crossOrigin="anonymous" />

interface IProps {
    title?: string
    description?: string
    extraMeta?: IMeta[]
}
interface IMeta {
    name: string
    content: string
}
