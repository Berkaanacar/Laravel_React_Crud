import axios from 'axios';
import * as api from '../services';


function Delete(props) {
    const {row, list} = props;

    const onClickDelete = async (e)=> {
        e.preventDefault();
        props.stateDelete(props.id)
        console.log(props.row)
        await axios.delete('http://127.0.0.1:8000/api'+`/kontrol/delete/${props.row}`)
       
        
    };
    
  return (
        <button  onClick={onClickDelete} type="button" class="btn btn-danger">Temizle</button>
        // <button onClick={onClickDelete}>Sil</button>
        
  )
  
}

export default Delete;