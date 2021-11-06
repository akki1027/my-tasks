import type { NextPage } from 'next'
import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'

type TaskList = {
    name: String,
    content: {
        todo: String[],
        done: String[]
    }
}[]

const tasks: TaskList = [
    {
        name: 'タスク管理アプリ',
        content: {
            todo: [
                'UIデザイン',
                'コーディング',
                'デプロイ',
            ],
            done: [
                '環境設定'
            ]
        }
    },
    {
        name: '今日',
        content: {
            todo: [
                '食材の調達',
                '部屋掃除'
            ],
            done: [
                '食材の調達'
            ]
        }
    },
    {
        name: '今週末',
        content: {
            todo: [
                'ゴルフの練習',
                'プログラミングの勉強'
            ],
            done: []
        }
    }
]

const Tasks: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                {tasks.map((task, index) => {
                    return (
                        <div key={index} className="py-5 px-10 mb-5 rounded-lg shadow-md bg-white">
                            <h1 className="mb-2 font-semibold">{task.name}</h1>
                            <div className="mt-2">
                                <p>未完了のタスク</p>
                                {task.content.todo.map((todo, index) => <p key={index} className="ml-5 mt-2">{todo}</p>)}
                            </div>
                            <div className="mt-2">
                                <p>完了したタスク</p>
                                {task.content.done.map((done, index) => <p key={index} className="ml-5 mt-2">{done}</p>)}
                            </div>
                        </div>
                    )
                })}
                <Link href="/">
                    <a className="btn btn-green">ホームに戻る</a>
                </Link>
            </section>
        </Layout>
    )
}


export default Tasks
