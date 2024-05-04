import Layout from "../../components/Layout"
import ProjectItem from "../../components/projects/project-item"

require('dotenv').config()
const { Client } = require('@notionhq/client')
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function Projects() {

    const projects = await getData()

    return(
        <body>
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mb-10 px-6">
                    <h1 className="text-3xl font-bold sm:text-5xl">
                        프로젝트 갯수 : <span className="pl-4 text-blue-500">{projects.length} </span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 m-6 sm:w-full">
                        {projects.map((project) => (
                            <ProjectItem key={project.id} data={project}/>
                        ))}
                    </div>
                </div>
            </Layout>
        </body>
    )
}

// 빌드타임에 호출
async function getData() {

    const databaseID = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({
        database_id: databaseID,
        sorts: [
            {
                "property": "Name",
                "direction": "ascending"
            }
        ]
    })

    const projects = response.results
    return projects
}