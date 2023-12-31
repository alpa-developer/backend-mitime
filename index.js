// LIBRARY
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


// INIT
dotenv.config();
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const UserRoute = require('./routes/UserRoute');
const MessageRoute = require('./routes/MessageRoute');
const TestimoniRoute = require('./routes/TestimoniRoute');
const AdminRoute = require('./routes/AdminRoute');
const ForumRoute = require('./routes/ForumRoute');
const ForumCommentRoute = require('./routes/ForumCommentRoute');
const TotalTestRoute = require('./routes/TotalTestRoute');
const RataTestRoute = require('./routes/RataTestRoute');

// ROUTES
app.use(UserRoute);
app.use(MessageRoute);
app.use(TestimoniRoute);
app.use(AdminRoute);
app.use(ForumRoute);
app.use(ForumCommentRoute);
app.use(TotalTestRoute);
app.use(RataTestRoute);

// ROUTE JIKA URLNYA TIDAK ADA, MAKA AKAN MENAMPILKAN PESAN JSON YAITU NOT FOUND
app.get('*', (req, res) => res.json({message: 'Not Found'}));



// SERVER LISTEN
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));