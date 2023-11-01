export const Statistics = ({title, stats}) => {
  return (
    <section>
      {title && title.length > 0 ? (
  <h2>{title}</h2>) : null}     
      <ul>
        {stats.map(item => {
          return <li key={item.id}>
          <span>{item.label}</span> 
          <span>{item.percentage}</span>
                </li>
        })}
  </ul>
</section>
  )
}