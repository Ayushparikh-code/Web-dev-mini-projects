import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  <>
        <div className='app'>
            <Loader
            type="Puff"
            color="rgb(255,255,255)"
            height={200}
            width={480}
            timeout={2000}
            />
       </div>
            <footer className='copyapp' >Copyright &copy;Developed by Abhishek Tyagi</footer>
   </>
    );
}
export default LoaderComp