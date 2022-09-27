const express = require ('express');
const fs = require('fs');
const path = require('path');
const { createContext } = require('vm');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// GET ROUTE
app.get('/' , (req , res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes' , (req , res) =>
    res.sendFile(path.join(__dirname , 'public/notes.html'))
);

app.get('/api/notes' , (req , res) =>
    fs.readFile('./db.json' , 'utf8' , (err,data) => {
        if(err) {
            console.error(error)
    const getNotes = JSON.parse(notes)
    res.json(getNotes)
        }
    })
);

// POST THE NOTES
app.post("/api/notes", async (req, res) => {
        const newNote = req.body;
        createNote(newNote)
        res.json(newNote)
});

const createNote = (body) => {
    const newNote = body;
    fs.readFile("./db/db.json", "utf8", (error, storednotes) => {
        if (error) {
            console.error(error)
        } else {
            const storedNotes = JSON.parse(storednotes);

            getNotes.push(newNote);
            getNotes.forEach(note => {
                note.id = uuidv4();
            });

            fs.writeFile(
                "./db/db.json", 
                JSON.stringify(getNotes), (err) => 
                    err ? console.log(err) : console.log("Note has been added"))
        }
    })

    return newNote
}

// removes the notes from json 
app.delete('/api/notes/:id', (req, res) => {
    deleteid(req.params.id);

    // ? responding with json db
    res.json(db)
})

const deleteid = (id) => { 
    fs.readFile("./db/db.json", "utf8", (error, storednotes) => {
        if (error) {
            console.error(error)
        } else {
            const getNotes = JSON.parse(storednotes);

            for (let i = 0; i < getNotes.length; i++){
                if (getNotes[i].id == id){
                    getNotes.splice(i, 1)
                }
            }

            fs.writeFile(
                "./db/db.json", 
                JSON.stringify(getNotes), (err) => 
                    err ? console.log(err) : console.log("Note has been deleted"))
        }
    })
}

// GET Route for homepage
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} 🚀`);
  });

