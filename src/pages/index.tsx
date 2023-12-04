import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/header";
import Footer from "@/components/Footer/footer";

import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";


type Data = {
  nome: string
  idade: number
}

export const getStaticProps: GetStaticProps<{data:Data}> = () => {
 
  const data = { nome: 'vinicius',
                 idade: 25 
}

  return {
    props: {
      data,
    },
  }
}


export default function Home({data} : InferGetStaticPropsType<typeof getStaticProps>)  {
  return (
    <>
      <Link href="http://localhost:3000/#first-section">My first section</Link>

      <Header />


      <div>
        
      {data.nome}
    </div>
      <div
        style={{
          marginTop: "300px",
        }}
      >
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
        loram ipsum loram ipsum loram ipsum loram ipsum loram ipsum loram Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Sit iste deleniti ab
        rem, recusandae eveniet incidunt dolorum cum, illo esse qui quis
        consequuntur eius necessitatibus nemo. Officiis totam ipsa suscipit.
      </div>

      <div id="footer">
        <Footer></Footer>
        <div id="first-section">SECTION 1</div>
      </div>
    </>
  );
}
