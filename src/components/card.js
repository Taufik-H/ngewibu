// card
import Img from './images/1.gif'
 function Card(){
    return(
        <>
        <div className="w-80 border rounded-lg h-80 shadow-md mx-auto p-2 mt-32">
         
            <div className="w-full h-full border-4 border-blue-400 rounded-lg border-dotted">
                <div className="font-semibold text-gray-700 mt-5">Klik button di bawah untuk menjadi wibu 🤌</div>
                <div className="p-2 rounded-lg">
                    <img src={Img} alt="aizen" className='rounded-lg '/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;
