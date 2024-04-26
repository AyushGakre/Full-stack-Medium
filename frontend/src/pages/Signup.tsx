
import Auth from '../components/Auth'
import Quote from '../components/Quote'

const Signup = () => {
  return (
    <>
    <div className=' grid grid-cols-2'>
        <div>
            <Auth type='signup'/>
        </div>
    <Quote/>
    </div>
    </>
  )
}

export default Signup