export interface projectCard {
  projectTitle: string
  projectDescription: string
  projectImage: string
  link?: string
}

export interface projectData {
  title: string
  description: string
  coverImage: string
  link?: string
}

export interface reviewCard {
  reviewComments: string
  reviewBy: string
  reviewTextColor: string
  reviewerTextColor: string
  cardBgColor: string
}
