import { useQuery } from "@apollo/client"
import React from "react"
import { GET_SAY } from "../../graphql/queries"

type AboutProps = {}

const About: React.FC<AboutProps> = () => {
  const { loading, error, data } = useQuery(GET_SAY, {
    variables: { name: "Abeer" },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something Went Wrong...</p>

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.say}</p>
    </div>
  )
}
export default About
