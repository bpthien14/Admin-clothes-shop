import { useSession, signIn, signOut} from "next-auth/react"
import Nav from "@/components/Nav"
import LayOut from "@/components/Layout"

export default function Home() {
  return <LayOut>
  <h1>Test</h1>
  </LayOut>
}
