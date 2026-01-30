# 📸 React Gallery Application

A modern, responsive **React Gallery Application** that fetches and displays images from a public API with pagination support. This project showcases practical, real-world usage of core React concepts such as **useState** and **useEffect**, API integration using the **Fetch API**, and dynamic UI rendering.

## ✨ Key Features

* Fetches images from an external API using a secure API key
* Displays images in a clean, responsive grid layout
* Pagination support with **Next** and **Previous** controls
* Loading and basic error handling for better user experience
* Reusable, well-structured React components
* 
## 🛠️ Technologies Used

* **React.js** – Frontend library for building reusable UI components
* **JavaScript (ES6+)** – Application logic and state handling
* **Fetch API** – For making HTTP requests to the image API
* **React Hooks**

  * `useState` – For managing component state
  * `useEffect` – For handling side effects such as API calls
* **CSS3** – Styling, layout, and responsive design
* **Vite** – Fast and efficient development build tool

## ⚙️ How the Application Works

### 1. API Integration

The application retrieves image data from a third-party image API using an API key. API requests are triggered whenever the page number changes, ensuring fresh data is loaded dynamically.

```js
fetch(`https://api.example.com/images?page=${page}&limit=${limit}`);
```

### 2. useEffect – Managing Side Effects

The `useEffect` hook is used to trigger API calls when the component mounts and whenever the page state updates.

* Ensures data is fetched at the correct lifecycle stage
* Prevents unnecessary re-renders and redundant API calls

```js
useEffect(() => {
  fetchImages();
}, [page]);
```

### 3. useState – State Management

The `useState` hook is used to manage key pieces of application state:

* Image data
* Loading status
* Current page number

```js
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
```

### 4. Rendering Data with map()

Fetched image data is rendered dynamically using the `map()` method, enabling scalable and reusable UI rendering.

```js
images.map((img) => (
  <ImageCard key={img.id} image={img} />
));
```

### 5. Pagination Logic

Pagination allows users to navigate through multiple pages of images seamlessly.

* **Next** button increments the page number
* **Previous** button decrements the page number
* Page state updates automatically trigger new API requests

```js
setPage((prev) => prev + 1);
```

---

## 📁 Project Structure

```
src/
│── components/
│   └── ImageCard.jsx
│── App.jsx
│── main.jsx
│── styles.css
```

---

## ▶️ How to Run the Project

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/react-gallery-app.git
   ```

2. Navigate to the project directory

   ```bash
   cd react-gallery-app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

🎯 Learning Outcomes

* Strong understanding of React Hooks and component lifecycle
* Hands-on experience with API integration using Fetch
* Practical implementation of pagination and state management
* Improved skills in responsive UI design and component-based architecture


## 📸 Screenshots

![Gallery Home Page](assets/gallery-img1.png)
![Gallery Home Page](assets/gallery-img2.png)







