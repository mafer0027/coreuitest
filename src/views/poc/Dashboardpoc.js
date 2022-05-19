import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
//import DataTable from './DataTable'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CIcon,
  CCardTitle,
  CCardText,
  CContainer,
  CNavLink,
  CWidgetStatsF,
  CButton,
} from '@coreui/react'
import { CChartPie } from '@coreui/react-chartjs'
import DataTable from 'react-data-table-component'
import { AiOutlineEdit } from 'react-icons/ai'
import './dashboard.css'
import contactform from './assets/img/contact-form.png'
import idea from './assets/img/idea.png'
import laptop from './assets/img/laptop.png'
import speech from './assets/img/speech-bubble.png'
import submit from './assets/img/submit.png'
import process from './assets/img/process.png'
import feature from './assets/img/feature.png'
const Dashboardpoc = () => {
  //table style
  const customStyles = {
    rows: {
      style: {
        color: '#290661',
      },
    },
    header: {
      style: {
        color: 'white',
        fontWeight: '800',
        backgroundColor: '#8076AB',
      },
    },
    head: {
      style: {
        color: '#636F83',
        fontWeight: '800',
        fontSize: '14px',
      },
    },
  }
  const columns = [
    {
      name: 'Product',
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Loan ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Borrower',
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: 'Credit Score',
      selector: (row) => row.credit_score,
      sortable: true,
    },
    {
      name: 'Title Run',
      selector: (row) => row.title_run,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.title_run === 'Done',
          style: {
            fontWeight: 'bold',
            color: 'green',
          },
        },
        {
          when: (row) => row.title_run === 'In process',
          style: {
            fontWeight: 'bold',
            color: 'red',
          },
        },
      ],
    },

    {
      name: 'Appraisal',
      selector: (row) => row.appraisal,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.appraisal === 'Done',
          style: {
            fontWeight: 'bold',
            color: 'green',
          },
        },
        {
          when: (row) => row.appraisal === 'In process',
          style: {
            fontWeight: 'bold',
            color: 'red',
          },
        },
      ],
    },
    {
      name: 'Employment Status',
      selector: (row) => row.employment_status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.employment_status === 'Done',
          style: {
            fontWeight: 'bold',
            color: 'green',
          },
        },
        {
          when: (row) => row.employment_status === 'In process',
          style: {
            fontWeight: 'bold',
            color: 'red',
          },
        },
      ],
    },
    {
      name: 'Final Decision',
      selector: (row) => row.final_desicion,
      sortable: true,
    },
  ]

  const data = [
    {
      product: 'Home Equity',
      date: '4/01/2022',
      id: '944ce9de-c296-4937-9e85-f3574d782c43',
      client: 'John Doe',
      credit_score: '800',
      title_run: 'Done',
      appraisal: 'In process',
      employment_status: 'In process',
      final_desicion: 'Make',
    },
    {
      product: 'Home Equity',
      date: '3/22/2022',
      id: '944ce9de-c296-4937-9e85-f3574d7825855',
      client: 'Alice Smith',
      credit_score: '700',
      title_run: 'Done',
      appraisal: 'Done',
      employment_status: 'Done',
      final_desicion: 'No',
    },
  ]

  return (
    <>
      <CContainer>
        <h2>Welcome User</h2>
        <CRow>
          <CCol xs={12} className="mb-3">
            <CCard>
              <CCardBody>
                <div className="shortcut-buttons">
                  <CNavLink to="/homeequity" component={NavLink}>
                    <CButton shape="rounded-pill" variant="ghost">
                      <div className="button-content">
                        <div className="button-icon">
                          <img src={contactform} />
                        </div>
                        <div className="button-text">Application Form</div>
                      </div>
                    </CButton>
                  </CNavLink>

                  <CNavLink to="/decisionanalysis" component={NavLink}>
                    <CButton shape="rounded-pill" variant="ghost">
                      <div className="button-content">
                        <div className="button-icon">
                          <img src={idea} />
                        </div>
                        <div className="button-text">Underwriting Analysis</div>
                      </div>
                    </CButton>
                  </CNavLink>

                  <CNavLink to="/reporting" component={NavLink}>
                    <CButton shape="rounded-pill" variant="ghost">
                      <div className="button-content">
                        <div className="button-icon">
                          <img src={laptop} />
                        </div>
                        <div className="button-text">Reporting</div>
                      </div>
                    </CButton>
                  </CNavLink>

                  <CNavLink to="/messages" component={NavLink}>
                    <CButton shape="rounded-pill" variant="ghost">
                      <div className="button-content">
                        <div className="button-icon">
                          <img src={speech} />
                        </div>
                        <div className="button-text">Messages</div>
                      </div>
                    </CButton>
                  </CNavLink>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol className="mb-3" xs={4}>
            <CCard className="text-center mb-3 border-top-2">
              {/*Pie Chart*/}
              <CRow>
                <CCardBody>
                  <CCol>
                    <CCardTitle>Pipeline Summary</CCardTitle>
                    <CChartPie
                      data={{
                        labels: ['Point of Sale', 'In process', 'Underwrited'],
                        datasets: [
                          {
                            data: [300, 50, 100],
                            backgroundColor: [
                              'rgba(194, 159, 250,1)',
                              'rgba(163, 112, 247,1)',
                              'rgb(133, 64, 245, 1)',
                            ],
                            hoverBackgroundColor: [
                              'rgba(194, 159, 250,0.9)',
                              'rgba(163, 112, 247,0.9)',
                              'rgb(133, 64, 245,0.9)',
                            ],
                          },
                        ],
                        options: {
                          tooltips: {
                            callbacks: {
                              label: function (tooltipItem, data) {
                                return (
                                  data['labels'][tooltipItem['index']] +
                                  ': ' +
                                  data['datasets'][0]['data'][tooltipItem['index']] +
                                  '%'
                                )
                              },
                            },
                          },
                        },
                      }}
                    />
                  </CCol>
                </CCardBody>
              </CRow>
            </CCard>
          </CCol>
          <CCol xs={8} className="mb-3">
            <CCard>
              <CCardBody>
                <CCardText> Loan Application Pipeline Percentages</CCardText>
                <CWidgetStatsF
                  className="mb-3"
                  padding={false}
                  icon={<img src={submit}></img>}
                  title="Point of sale Loan Applications"
                  value="89.9%"
                />
                <CWidgetStatsF
                  className="mb-3"
                  padding={false}
                  icon={<img src={process} color="red"></img>}
                  title="In Process Loan Applications"
                  value="89.9%"
                />
                <CWidgetStatsF
                  className="mb-3"
                  padding={false}
                  icon={<img src={feature}></img>}
                  title="Underwriting Results"
                  value="89.9%"
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol sm={12}>
            <CCard className="mb-3 border-top-2">
              <CCardBody>
                <DataTable
                  columns={columns}
                  data={data}
                  title="Loan Details"
                  highlightOnHover
                  responsive
                  pagination
                  customStyles={customStyles}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        {/*<DataTable />*/}
      </CContainer>
    </>
  )
}

export default Dashboardpoc
