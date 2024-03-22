// Import You Profile Img
import logo from '../img/profile.jpg'

const Header = () => {
    const name = "Adrito Rafsan";
    return (
        <div className='my-36 ml-10 md:ml-[400px] max-w-screen-2xl'>
            <div>
                <div className='flex gap-5 items-center'><img className='rounded-full w-[60px] h-[60px]' src={logo} alt="" /><h1 className='font-poppins text-base font-bold  text-black/70'>{name}</h1> </div>
                <div>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                   <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header