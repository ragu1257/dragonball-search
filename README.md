# DragonBall Search App 🚀🐉
 Live Demo: [View on Vercel](https://dragonball-search.vercel.app/)
 
A React application that fetches and displays Dragon Ball character listings, providing a user-friendly interface to browse and filter by name and base ki.

## 📌 Requirements

### Core Task
 **Character Listing Page**
   - Display a list of characters from the Dragon Ball API.
   - Allow users to **search** characters by partial or full name.
   - Allow users to **filter** characters by a base ki range (min–max).

---

### Core Features
1. **Fetching Character Data (Essential)**
   - Retrieve character data from the public Dragon Ball API.
   - Handle cases where the API returns data in different formats (`[]` or `{ items: [] }`).
   - Manage **loading** and **error** states gracefully.

2. **Frontend Interface (Essential)**
   - Built with **React** and styled using **Tailwind CSS**.
   - Controlled inputs for name and ki filters with **debounce** to limit API calls.
   - Display character cards in a responsive **grid** layout.
   - Optimized image loading to improve performance and prevent layout shifts.

---

## Proposed Solution

- **API Service** (`src/services/api.js`)
  - Single `fetchByName(name)` function using `fetch` and template strings.
  - `filterByKi(characters, min, max)` handles the API’s `"60.000.000"` format by stripping thousands separators.

- **Custom Hook** (`src/hooks/useCharacters.js`)
  - Encapsulates data fetching, filtering, and state management.
  - Uses a 500 ms **debounce** on name input to reduce redundant network calls.
  - Cleans up pending requests on component unmount.

- **UI Components**
  - `SearchBar`: controlled inputs for search and ki range.
  - `CharacterList`: renders a dynamic list of character cards or a friendly “no results” message.
  - `CharacterCard`: displays name, image placeholder, description, and base ki.

---


## Screenshot

![image](https://github.com/user-attachments/assets/ba5bc215-5a1b-45ca-b33a-eb64b3c2a03c)
![image](https://github.com/user-attachments/assets/543fc7a7-fc97-4119-b59b-8613022ef452)
![image](https://github.com/user-attachments/assets/75ceccfb-ec0b-47d3-a7a9-fb33af549690)




---

## Error Handling

- **Network failures**: Displays an error message if the fetch request fails.
- **Empty responses**: Shows “No characters found.” when the result set is empty.
- **Invalid filters**: Defaults to `0` and `Infinity` for missing `min`/`max` values.

---

## Libraries / Tools Used

- **React** for the UI.
- **Tailwind CSS** for utility-first styling.
- **Fetch API** for HTTP requests.
- [Dragon Ball API](https://web.dragonball-api.com/documentation)

---

## Setup Instructions

1. Clone the repository and navigate to the project folder:
   ```sh
   git clone https://github.com/ragu1257/dragonball-search.git
   cd dragonball-search
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The frontend will be running at `http://localhost:3000`.

---

## Future Enhancements
- Memoize expensive operations (e.g., parsing and filtering) with useMemo.
- Improve keyboard accessibility (e.g., Enter to trigger search, arrow navigation).
- Add pagination or a “Load More” button for large datasets.
- Implement caching (e.g., SWR or React Query) to reduce network traffic.

## Notes
- Ensure Node.js (v14+) is installed to run the project locally.
- This project is intended for local development and demonstration of core requirements.

