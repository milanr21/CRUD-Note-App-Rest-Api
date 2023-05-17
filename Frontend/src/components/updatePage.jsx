import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [values, setValues] = useState({
    id: id,
    Title: '',
    description: '',
    DateCreated: moment().format('LLLL'),
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/notes/' + id)
      .then((res) => {
        setValues({
          ...values,
          Title: res.data.Title,
          description: res.data.description,
        });
      })
      .catch((err) => console.log(err));
  }, [id, values]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/notes/${id}`, values)
      .then((res) => {
        console.log('Data updated');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className='note new'>
          <h4>
            <input
              type='text'
              name='Title'
              placeholder='Type a note title.....'
              values={values.Title}
              onChange={handleInputChange}
            />
          </h4>

          <textarea
            name='description'
            id=''
            cols='10'
            rows='6'
            placeholder='Type to add a new note......'
            values={values.email}
            onChange={handleInputChange}
          ></textarea>
          <div className='note-footer'>
            <small>{id.DateCreated}</small>
            <small>EDIT YOUR NOTE</small>
            <button onClick={handleUpdate} className='save'>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
