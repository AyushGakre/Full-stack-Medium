
const Navbar = () => {
  return (
    <nav className=" border-b-2 mb-2 flex justify-between">
        <div className=" ml-4">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" width="50px" height="20px"></img>
        </div>
        <div className="mt-2 mr-4">
            <Avatar name="Ayush"></Avatar>
        </div>
    </nav>
  )
}
export function Avatar({name}:{name :string}){
    return(
       
<div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className=" font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

    )
}

export default Navbar