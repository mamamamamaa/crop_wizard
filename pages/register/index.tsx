import { TNextPageWithLayout } from "@/types"
import { ReactElement } from "react"
import { AuthLayout } from "@/components/AuthLayout/AuthLayout"

const Register: TNextPageWithLayout = () => {
  return <>Register Page</>
}

Register.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}

export default Register
