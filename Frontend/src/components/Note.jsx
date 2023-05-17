import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../index.css';

const Note = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  //update

  // const [updateState, setUpdateState] = useState(-1);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get('http://localhost:3000/notes');
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteNote = async (id) => {
    if (window.confirm('Are You Sure That You Want To delete This Note ?'))
      try {
        const response = await axios.delete(`http://localhost:3000/note/${id}`);
        if (response.status === 200) {
          console.log('Data deleted ${item.id}');
          getNotes();
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div className='notes'>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className='note'>
              {/* <span>{index + 1}</span> */}
              <div className='note-head'>
                <h4>
                  {index + 1}. {item.Title}
                </h4>
                <span>{item.description}</span>
              </div>
              <div className='note-date'>
                <small>{item.DateCreated}</small>
                <div className='notes-icons'>
                  <Link to={`/update/${item.id}`}>
                    <span onClick={() => onDeleteNote(item.id)}>
                      <i className='fa-solid fa-trash-can'></i>
                    </span>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <span>
                      <i className='fa-solid fa-marker'></i>
                    </span>
                  </Link>
                  <span></span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Note;
