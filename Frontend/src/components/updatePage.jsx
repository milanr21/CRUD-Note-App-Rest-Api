import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [notes, setNotes] = useState([]);

  const singleNote = notes?.find((item) => item?.id === id);
  console.log(singleNote);

  useEffect(() => {
    axios
      .get('http://localhost:3000/note/' + id)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(res));
  }, []);

  return (
    <div>
      <div>
        <form
          className='note new'
          onSubmit={async (values) => {
            event.preventDefault();

            const form = new FormData(values.target);
            const data = Object.fromEntries(form);
            try {
              const res = await axios.put(
                `http://localhost:3000/note/${id}`,
                data
              );
              toast.success(res?.data);
              navigate('/');
              console.log(res);
            } catch (error) {
              alert(error);
            }
          }}
        >
          <h4>
            <input
              type='text'
              name='Title'
              placeholder='Type a note title.....'
              values={singleNote?.Title}
              defaultValue={singleNote?.Title}
            />
          </h4>

          <textarea
            name='description'
            id=''
            cols='10'
            rows='6'
            placeholder='Type to add a new note......'
            values={singleNote?.description || ''}
            defaultValue={singleNote?.description || ''}
          ></textarea>
          <div className='note-footer'>
            <small>
              <input type='text' values={moment().format('LLLL')} />
            </small>
            <small>EDIT YOUR NOTE</small>

            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
