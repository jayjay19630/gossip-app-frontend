import './Loading.css'
import loading from '../../assets/images/loading.gif'

//loading component with loading gif
export const Loading = () => {
    return (
        <div className='loading-screen'>
            <div className='loading-text'>Loading...</div>
            <img className='loading' src={loading}></img>
        </div>
    );
}