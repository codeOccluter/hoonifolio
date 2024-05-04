"use client"
import Image from "next/image"

export default function ProjectItem(data) {
    // console.log(data.data)

    const title = data.data.properties.Name.title[0].plain_text
    const github = data.data.properties.Github.url
    const blog = data.data.properties.Blog.url
    const description = data.data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.data.cover.file?.url || data.data.cover.external.url
    const tags = data.data.properties.Tags.multi_select
    const startDate = data.data.properties.Period.date.start
    const endDate = data.data.properties.Period.date.end

    const calculatedPeriod = (start, end) => {

        const startDateArray = start.split('-')
        const endDateArray = end.split('-')

        let sDate = new Date(startDateArray[0], startDateArray[1], startDateArray[2])
        let eDate = new Date(endDateArray[0], endDateArray[1], endDateArray[2])

        console.log(`sDate: ${sDate}`)
        console.log(`eDate: ${eDate}`)

        const diffInMs = Math.abs(eDate - sDate)
        const result = diffInMs / (1000 * 60 * 60 * 24)
        console.log(result)
        return result
    }

    return (
        <div className="project-card">

            <Image 
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                // layout="fill"
                maxWidth="50"
                // objectFit="contain"
                // objectPosition="center"
                width="50"
                height="40"
                layout="responsive"
                objectFit="none"
                quality={100}
            />
            <div className="p-5 flex flex-col ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                <a href={blog}>블로그 바로가기</a>

                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
                <h3 className="mt-4">
                <p>작업기간 : {startDate} ~ {endDate} ({calculatedPeriod(startDate, endDate)}일)</p>
                </h3>

            </div>

        </div>
    )
}