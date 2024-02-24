import { Spinner } from "react-bootstrap"
import './loader.css';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center custom-loader">
            <Spinner animation="border" />
        </div>
    )
}

export default Loader;