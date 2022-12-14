Global State Management with Redux Toolkit using client-side rendering (CSR)
First understand the Redux overview and concepts

The Redux team recommends that everyone should use Redux Toolkit, therefore we are not following the plain Redux example of our textbook, but only covering Redux Toolkit from seprate sources.

You can also watch the introductory Redux Video Tutorial by Zeeshan Hanif

We will follow this tutorial

Also review the official example

yarn add @reduxjs/toolkit react-redux

yarn add axios

This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev

# or

yarn dev
Step 1 (Add dependencies)
npm install @reduxjs/toolkit react-redux
Step 2 (Create the store/store.ts file)
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
Step 3 (Wrap the project root with redux Provider)
Once the store is created, we can make it available to our React components by putting a React-Redux around our application in pages/\_app.tsx. Import the Redux store we just created, put a around your , and pass the store as a prop:

import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
return (
<Provider store={store}>
<Component {...pageProps} />
</Provider>
)
}

export default MyApp
Step 4 (Create the store/counterSlice.ts file)
Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
increment: (state) => {
state.value += 1
},
decrement: (state) => {
state.value -= 1
},
incrementByAmount: (state, action: PayloadAction<number>) => {
state.value += action.payload
},
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
Step 5 (Update the store/store.ts file)
Update the store.ts file which we made in step 1 and pass the rudcer which is exported from counterSlice.ts file.

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
reducer: {
counter: counterReducer,
},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
