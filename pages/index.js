import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
   return (
      <div className={styles.container}>
         <Loader show={false} />
         Home Page
         <button onClick={() => toast.success("hacked the world!")}>click me!</button>
      </div>
   )
}
