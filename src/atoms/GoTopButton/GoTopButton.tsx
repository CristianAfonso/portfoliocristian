import { TiArrowUp } from "react-icons/ti";
import styles from './GoTopButton.module.css'
function GoTopButton() {
    function handleGoTopClick(){
        window.scrollTo(0, 0);
    }
    return (
        <button id={styles.go_top_button} onClick={handleGoTopClick}><TiArrowUp /></button>
    )
}

export default GoTopButton;