import Link from "next/link"
import { useState } from "react"
import styles from '@/styles/askpage.module.css'
import Router, { useRouter } from "next/router"





    
const Draft: React.FC = () => {
    const [aws, setAws] = useState('')
    const [qid, setQid] = useState('') 

    const Data = async (e: React.SyntheticEvent) => {
      e.preventDefault()
      try {
      const body = { aws,qid}
      await fetch(`/api/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      Router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

    return(
        <main className={styles.main}>
        <form onSubmit={Data}>
          <h1>Create</h1>
          
          <div>
            <textarea
            cols={71}
            onChange={(e) => setAws(e.target.value)}
            placeholder="ask"
            rows={8}
            value={aws}
          />
          </div>
          <div>
            <input
            disabled={!aws}
            type="submit"
            value="Create"
          />
          <button  onClick={()=>{Router.push('/')}}>Back Home</button>
          </div>
          
        </form>
        
        </main>
    )
}
export default Draft
