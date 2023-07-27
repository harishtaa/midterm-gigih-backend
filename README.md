
## API Structure

### Videos

- `POST /videos`: Create a new video.
- `GET /videos`: Get a list of all videos.
- `GET /videos/:id`: Get a specific video by its ID.

### Products

- `POST /products`: Create a new product.
- `GET /products/:id`: Get a specific product by its ID.

### Comments

- `POST /comments`: Create a new comment on a video.
- `GET /comments/:videoId`: Get all comments associated with a specific video by its ID.


## How to Run
### Prerequisites

Before you proceed, ensure you have the following installed on your machine:

1.  **Node.js and npm**
    If you don't have Node.js and npm (Node Package Manager) installed, you can download and install them from the official website: [Node.js](https://nodejs.org/)
    
2.  **MongoDB**
    Make sure you have MongoDB installed and running. You can download MongoDB from the official website: [MongoDB](https://www.mongodb.com/)
    
### Getting Started

1. **Clone this repository** into your local machine `https://github.com/harishtaa/midterm-gigih-backend.git`
2. **Navigate to the Project Directory**`midterm-gigih-backend` 
3. **Install dependencies** `npm install`
4. **Configure MongoDB Connection** 
Open the project in your text editor and open the `.env`and `index.js`, ensure that the MongoDB connection string is correctly set according to your MongoDB setup. For example:
```.env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/<your-db-name>
``` 
```javascript I'm A tab 
mongoose.connect(process.env.DATABASE_URL)
const  db  =  mongoose.connection;
 ```

## Running the Server
6. Start the server: `node index.js`
7. Open your web browser and go to the following address: `http://localhost:3000`.


