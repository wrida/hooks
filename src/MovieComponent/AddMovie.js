import {Modal,Button} from 'react-bootstrap'
import React,{useState} from 'react'
const AddMovie = ({getData}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({})
    const handleInput = (e) =>{
      setNewMovie({...newMovie,[e.target.value]:e.target.value});
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      getData(newMovie)
      handleClose()
    }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <form>
            < input type="text" placeholder ='movie title' name="movie title"onChange={handleInput}/>
            < input type="text" placeholder ='movie image'name="movie image"onChange={handleInput}/>
            <input type="text" placeholder ='movie rating'name="movie rating"onChange={handleInput}/>
            < button onClick={(handleSubmit)=>getData(newMovie)}>add movie</button>
          </form>
        </Modal>
      </>
    );
  }

export default AddMovie