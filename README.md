Movie Database Application
A React-based movie database application that allows users to browse and search for movies using The Movie Database (TMDB) API. This application provides a clean, responsive interface for discovering movies, viewing ratings, and reading movie descriptions.

![demo page](https://github.com/adityachandra512/movie-app/blob/master/public/Screenshot%202025-01-14%20190544.png)

Features
🎬 Browse popular movies
🔍 Search functionality for finding specific movies
📱 Responsive grid layout
⭐ Movie ratings and overview
🎨 Clean, modern UI with hover effects
⚡ Fast loading with loading states
❌ Error handling
Technologies Used
React
JavaScript
CSS3
TMDB API
Prerequisites
Before you begin, ensure you have:

Node.js (v14 or higher)
npm or yarn package manager
TMDB API key (get it from TMDB website)
Installation
Clone the repository:
git clone https://github.com/yourusername/movie-database.git
cd movie-database
Install dependencies:
npm install
# or
yarn install
Create a .env file in the root directory and add your TMDB API key:
REACT_APP_TMDB_API_KEY=your_api_key_here
Start the development server:
npm start
# or
yarn start
Open http://localhost:3000 to view the application in your browser.
Usage
The homepage displays popular movies by default
Use the search bar at the top to find specific movies
Click on movie cards to view more details
Hover over movie cards to see a subtle animation effect
API Integration
This project uses the TMDB API for fetching movie data. The following endpoints are used:

/movie/popular - Fetches popular movies
/search/movie - Searches for movies based on user input
/image.tmdb.org - Retrieves movie posters and images
Project Structure
movie-database/
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieCard.css
│   │   ├── SearchBar.js
│   │   └── SearchBar.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
└── README.md
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
The Movie Database (TMDB) for providing the API
React community for excellent documentation and resources
