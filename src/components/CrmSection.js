import React from "react"
import CrmBanner from "./CrmBanner"
import CrmCardSection from "./CrmCardSection"
const CrmSection = () => {
  return (
    <div className="container-fluid banner-bg pt-5">
      <CrmBanner />
      <CrmCardSection />
    </div>
  )
}

export default CrmSection
