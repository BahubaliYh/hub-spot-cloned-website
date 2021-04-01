import React from "react"
import { CRM } from "./crm_data"
const CrmCardSection = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        {CRM.map((data) => (
          <div className="col-12 col-md-6">
            <div className="crm-card">
              <div className="card-header-section text-center">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </div>
              <div className="card-body-section">
                <p className="feature-font">{data.featureTitle}</p>
                <ul>
                  {data.features.map((list) => (
                    <li>{list}</li>
                  ))}
                </ul>
                <div className="mt-5 text-center">{data.Button()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CrmCardSection
