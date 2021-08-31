import PropTipes from "prop-types";
import s from "./statistics.module.css"
export default function Statistics ({title, items}) {
    return (
    <section className={s.statistics}>
  {title && <h2 className="title">{title}</h2>}
  <ul className= {s.statlist}>
  {items.map((item) => (
          <li style = {{backgroundColor: item.color}} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}



Statistics.propTipes = {
    items: PropTipes.arrayOf(
        PropTipes.shape(
            {id: PropTipes.string.isRequired,
             label: PropTipes.string.isRequired,
             percentage: PropTipes.string.isRequired,   
            }
        )
    )
}