/** @type {import('tailwindcss').Config} */
export default{
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extent: {
            colors: {
                blue: {
                    200: '#8094ad',
                    500: '#19406a',
                    700: '#002b5b',
                },
                green: {
                    400: '#36c6c0'
                },

            }
        },
    },
    plugins: [],
}