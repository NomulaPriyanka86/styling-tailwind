npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
//======initially the config.js
/\*_ @type {import('tailwindcss').Config} _/
export default {
content: [],
theme: {
extend: {},
},
plugins: [],
}

//===========later
/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

//===added into the index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
