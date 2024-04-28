import BlogCard from "../components/BlogCard"


const Blogs = () => {
  return (
    <div className="flex flex-col space-y-3">
        <BlogCard
        authorName="Ayush gakre"
        title="Cloud computing"
        content="By default, Tailwind provides five border-width utilities, and the same number of utilities per side (horizontal, vertical, top, right, bottom, and left). You change, add, or remove these by editing the theme.borderWidth section of your Tailwind config."
        publishedDate="28-April"
        />
        <BlogCard
        authorName="Tanmay gupta"
        title="Cloud computing"
        content="By default, Tailwind provides five border-width utilities, and the same number of utilities per side (horizontal, vertical, top, right, bottom, and left). You change, add, or remove these by editing the theme.borderWidth section of your Tailwind config."
        publishedDate="28-April"
        />
        <BlogCard
        authorName="Zaiyaan Najam"
        title="Cloud computing"
        content="By default, Tailwind provides five border-width utilities, and the same number of utilities per side (horizontal, vertical, top, right, bottom, and left). You change, add, or remove these by editing the theme.borderWidth section of your Tailwind config."
        publishedDate="28-April"
        />
    </div>
  )
}

export default Blogs
