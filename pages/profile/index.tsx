import type { ReactElement } from "react"

import { Layout } from "@/components/Layout/Layout"
import { TNextPageWithLayout } from "@/types"

const Profile: TNextPageWithLayout = () => {
  return <p>Profile page</p>
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
