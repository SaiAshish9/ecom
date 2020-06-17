import React,{Fragment,lazy, Suspense} from 'react'
import Loader from "../../components/general/loader"
import useMediaQuery from "@material-ui/core/useMediaQuery"
const LDashboard =lazy(()=>import("./dashboard"))
const MDashboard = lazy(() => import("./mdashboard"));


const Dashboard = () => {

    const mobileSize = useMediaQuery("( max-width:650px )");

    return (
      <Fragment>
        <Suspense fallback={<Loader />}>
          {mobileSize ? <MDashboard /> : <LDashboard />}
        </Suspense>
      </Fragment>
    );
}

export default Dashboard
