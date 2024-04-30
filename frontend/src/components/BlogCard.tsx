
interface Blogdetails {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}:Blogdetails) => {
  return (
    <div className=" max-w-lg border-b-2">
        <div>
           <Avatar name={authorName}/> {authorName} . {publishedDate}
        </div>
        <div className="font-medium text-2xl mb-2">
            {title}
        </div>
        <div className=" font-serif font-light">
            {content.slice(0,100) + "...."}
        </div>

    </div>
  )
}

export function Avatar({name}:{name :string}){
    return(
       
<div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className=" font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

    )
}

export default BlogCard