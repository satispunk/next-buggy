export default function Home({text}) {
    return <span>{text}</span>

}

export const getStaticProps = ({locale, params}) => {
    if (!params?.cms?.length) {
        return {
            revalidate: 600,
            notFound: true,
        }
    }

    return {
        revalidate: 600,
        props: {
            text: `This is text of ${params?.cms} in ${locale} locale`,
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {locale: 'en', params: {cms: ['ru']}},
            {locale: 'en', params: {cms: ['none']}},
            {locale: 'en', params: {cms: ['page1']}},
            {locale: 'en', params: {cms: ['page2']}},
        ],
        fallback: true
    }
}