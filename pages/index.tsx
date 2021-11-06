import type { NextPage } from 'next'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <Link href="/tasks/tasks">
                    <button className="btn btn-green hover:bg-yellow-200">Tasks</button>
                </Link>
                <Link href="/github/repos">
                    <button className="btn btn-green hover:bg-yellow-200">Repos</button>
                </Link>
            </section>
        </Layout>
    )
}


export default Home
