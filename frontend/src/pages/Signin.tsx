
import Auth from '../components/Auth'
import Quote from '../components/Quote'

const Signin = () => {
  return (
    <div className=' grid grid-cols-2'>
        <div>
            <Auth type='signin'/>
        </div>
    <Quote/>
    </div>
  )
}

export default Signin