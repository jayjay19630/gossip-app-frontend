import './Loading.css'

export const Loading = () => {
    return (
        <div className='loading-screen'>
            <div className='loading-text'>Loading...</div>
            <img className='loading' src='src/assets/images/loading.gif'></img>
        </div>
    );
}