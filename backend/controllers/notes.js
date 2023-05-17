import { v4 as uuid } from 'uuid';

// storing all the information in array
let notes = [];

// notes haru lai send garxa notes array ma vhako
export const getNotes = (req, resp) => {
  resp.send(notes);
};

export const createNote = (req, resp) => {
  //recieving everything from body
  const note = req.body;

  //pushing everything to the notes array
  notes.push({ ...note, id: uuid() });
  resp.send('New Note Added Sucessfully!!');
};

export const getNote = (req, resp) => {
  const singleNote = notes.filter((note) => note.id === req.params.id);
  resp.send(singleNote);
};

export const deleteNote = (req, resp) => {
  notes = notes.filter((note) => note.id !== req.params.id);
  resp.send('Note deleted sucessfully');
};

export const updateNote = (req, resp) => {
  const note = notes.find((note) => note.id === req.params.id);

  note.Title = req.body.Title;
  note.description = req.body.description;
  note.DateCreated = req.body.DateCreated;

  resp.send('Note Updated Sucessfully');
};
