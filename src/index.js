import './styles/main.scss';
import './index.html';


newFunction();

function newFunction() {
    function openModal() {
        document.getElementById("modal").style.top = "0px";
    }
    function closeModal() {
        document.getElementById("modal").style.top = "-700px";
    }
}
