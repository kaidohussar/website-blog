import styles from '@styles/modules/servicesList.module.scss'
import React from 'react'
import { ReactIcon } from '@src/assets/react'
import { NodejsIcon } from '@src/assets/nodejs'
import { PostgreSQLIcon } from '@src/assets/psql'
import { SassIcon } from '@src/assets/sass'

type ServicesListProps = {
  className?: string
}

type ServiceListItemProps = {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}

const techConsultancyIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_405_34)">
      <path
        d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.83999 2.4 9.64999 2.57 9.60999 2.81L9.24999 5.35C8.65999 5.59 8.11999 5.92 7.62999 6.29L5.23999 5.33C5.01999 5.25 4.76999 5.33 4.64999 5.55L2.73999 8.87C2.61999 9.08 2.65999 9.34 2.85999 9.48L4.88999 11.06C4.83999 11.36 4.79999 11.69 4.79999 12C4.79999 12.31 4.81999 12.64 4.86999 12.94L2.83999 14.52C2.65999 14.66 2.60999 14.93 2.71999 15.13L4.63999 18.45C4.75999 18.67 5.00999 18.74 5.22999 18.67L7.61999 17.71C8.11999 18.09 8.64999 18.41 9.23999 18.65L9.59999 21.19C9.64999 21.43 9.83999 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.39999 13.98 8.39999 12C8.39999 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z"
        fill="#1A1A1A"
      />
    </g>
    <defs>
      <clipPath id="clip0_405_34">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const uxIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_405_49)">
      <path
        d="M16.24 11.51L17.81 9.94L14.06 6.19L12.49 7.76L8.35 3.63C7.57 2.85 6.3 2.85 5.52 3.63L3.62 5.53C2.84 6.31 2.84 7.58 3.62 8.36L7.75 12.49L3 17.25V21H6.75L11.51 16.24L15.64 20.37C16.59 21.32 17.87 20.97 18.47 20.37L20.37 18.47C21.15 17.69 21.15 16.42 20.37 15.64L16.24 11.51ZM9.18 11.07L5.04 6.94L6.93 5.04L8.2 6.31L7.02 7.5L8.43 8.91L9.62 7.72L11.07 9.17L9.18 11.07ZM17.06 18.96L12.93 14.83L14.83 12.93L16.28 14.38L15.09 15.57L16.5 16.98L17.69 15.79L18.96 17.06L17.06 18.96Z"
        fill="#1A1A1A"
      />
      <path
        d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.9 2.82 17.25 3 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
        fill="#1A1A1A"
      />
    </g>
    <defs>
      <clipPath id="clip0_405_49">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const mvpIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_405_80)">
      <path
        d="M21.67 18.17L16.37 12.87H15.38L12.84 15.41V16.4L18.14 21.7C18.53 22.09 19.16 22.09 19.55 21.7L21.67 19.58C22.06 19.2 22.06 18.56 21.67 18.17Z"
        fill="#1A1A1A"
      />
      <path
        d="M17.34 10.19L18.75 8.78L20.87 10.9C22.04 9.73 22.04 7.83 20.87 6.66L17.33 3.12L15.92 4.53V1.71L15.22 1L11.68 4.54L12.39 5.25H15.22L13.81 6.66L14.87 7.72L11.98 10.61L7.85 6.48V5.06L4.83 2.04L2 4.87L5.03 7.9H6.44L10.57 12.03L9.72 12.88H7.6L2.3 18.18C1.91 18.57 1.91 19.2 2.3 19.59L4.42 21.71C4.81 22.1 5.44 22.1 5.83 21.71L11.13 16.41V14.29L16.28 9.14L17.34 10.19Z"
        fill="#1A1A1A"
      />
    </g>
    <defs>
      <clipPath id="clip0_405_80">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const ServiceListItem = ({ icon, title, content }: ServiceListItemProps) => (
  <div className={styles.listItem}>
    <div>{icon}</div>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>{content}</div>
  </div>
)

export default function ServicesList({ className }: ServicesListProps) {
  return (
    <section className={className} aria-label="Services list">
      <div className={styles.row}>
        <ServiceListItem
          icon={techConsultancyIcon}
          title="Technical consultancy"
          content="Giving my expertise to the design or operations of technical solutions needed to build your startup."
        />
        <ServiceListItem
          icon={uxIcon}
          title="UX design"
          content="Helping you transform complex concepts into simplified user experiences."
        />
      </div>
      <div className={styles.row}>
        <ServiceListItem
          icon={mvpIcon}
          title="MVP building"
          content={
            <>
              <p>
                Building you the minimum viable product using popular tech stack
              </p>
              <div className={styles.toolsList}>
                <ReactIcon />
                <NodejsIcon />
                <PostgreSQLIcon />
                <SassIcon />
              </div>
            </>
          }
        />
      </div>
    </section>
  )
}
