import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment/moment';

const AddUpdate = () => {
  const navigate = useNavigate();

  const [noteData, setNoteData] = useState({
    Title: '',
    description: '',
    DateCreated: moment().format('LLLL'),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    if (!noteData.Title || !noteData.description) {
      toast.error('Please Provide the Information');
    } else {
      axios
        .post('http://localhost:3000/note', noteData)
        .then((response) => {
          console.log(response.data);
          navigate('/');
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <div className='note new'>
        <h4>
          <input
            type='text'
            name='Title'
            value={noteData.Title}
            placeholder='Type a note title.....'
            onChange={handleInputChange}
          />
        </h4>

        <textarea
          name='description'
          value={noteData.description}
          id=''
          cols='10'
          rows='6'
          placeholder='Type to add a new note......'
          onChange={handleInputChange}
        ></textarea>
        <div className='note-footer'>
          <small>SAVE YOUR NOTE</small>
          <button onClick={handleButtonClick} className='save'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUpdate;
