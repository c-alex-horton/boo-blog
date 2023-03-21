import React from 'react'

export default function BlogImage(props: {
  image: string
  alt: string
  caption?: string
}) {
  return (
    <div>
      <img src={props.image} alt={props.alt} />
      <caption>{props.caption}</caption>
    </div>
  )
}
