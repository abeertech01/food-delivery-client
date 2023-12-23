import { useQuery } from "@apollo/client"
import React from "react"
import { GET_HELLO } from "../../graphql/queries"

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const { loading, error, data } = useQuery(GET_HELLO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something Went Wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div>
          <h1>Home page</h1>
          <h2>Hello Message</h2>
          <p>{data.hello}</p>
        </div>
      )}
    </>
  )
}
export default Home
