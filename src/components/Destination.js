import "./DestinationStyle.css";
import Java1 from "./assets/java1.jpg";
import Java2 from "./assets/java2.jpg";
import Python1 from "./assets/python1.png";
import Python2 from "./assets/python2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Languages</h1>
      <p>Choose Your Programing Language According to Your Skill</p>

      <DestinationData
        className = "first-des"
        heading="Java Programming"
        text="Java is a programming language and a platform. Java is a high level,
        robust, object-oriented and secure programming language. Java was
        developed by Sun Microsystems (which is now the subsidiary of
        Oracle) in the year 1995. James Gosling is known as the father of
        Java. Before Java, its name was Oak. Since Oak was already a
        registered company, so James Gosling and his team changed the name
        from Oak to Java."
        img1={Java1}
        img2={Java2}
      />

      <DestinationData
        className = "first-des-reverse"
        heading="Python Programming"
        text="Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java."
        img1={Python1}
        img2={Python2}
      />
    </div>
  );
};

export default Destination;
