import { ReactElement } from "react"
import { Layout } from "@/components/Layout/Layout"
import { TNextPageWithLayout } from "@/types"
import { GetServerSideProps } from "next"
import { redirectIfUnauthenticated } from "@/utils/redirectIfUnauthenticated"

interface ICropProps {
  token: string
}

const Crop: TNextPageWithLayout<ICropProps> = ({ token }) => {
  return <>Crop Page - {token}</>
}

Crop.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return (
    redirectIfUnauthenticated(context) || {
      props: {},
    }
  )
}
export default Crop
