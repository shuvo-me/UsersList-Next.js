import Link from "next/link"
import { useEffect } from "react";
import {useRouter} from 'next/router';


// 
const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
      console.log('use effect run');
      setTimeout(()=>{
         router.push('/');
      },3000)
    },[])

    // 
    return (  
        <div className="not-found">
            <h1>Ooops..</h1>
            <h2>That page can't be found</h2>
            <p>Go back to <Link href="/"><a >Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;