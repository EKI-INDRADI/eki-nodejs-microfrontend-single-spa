import './styles.css'

export default function Root(props) {

  // ------------default
  // return <section>{props.name} is mounted!</section>;
  // ------------default

    // return <section>
    //   <h1>{props.name} is mounted!</h1>
    //   <h2>this is a sample text!</h2>
    // </section>;
  
    return <nav>
    <a href="a">Link to Angular</a>
    <a href="a">Link to Vue</a>
    </nav>;
    
}
