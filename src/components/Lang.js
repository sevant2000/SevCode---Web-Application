import "./LangStyle.css";
import Cprog from "./assets/cprog.png";
import JScript from "./assets/javascript.png";
import Php from "./assets/php.jpg";
import LangData from "./LangData";

function Lang() {
  return (
    <div className="lang">
      <h1>Most Popular Programming Languages</h1>
      <p>You Can Choose Specific Language</p>
      <div className="lcard">
        <LangData
          image={Cprog}
          heading="C Programming"
          text="C language is considered as the mother language of all the modern programming languages because most of the compilers, JVMs, Kernels, etc. are written in C language, and most of the programming languages follow C syntax, for example, C++, Java, C#, etc."
        />
        <LangData
          image={JScript}
          heading="JavaScript Programming"
          text="JavaScript is a powerful and flexible programming language. It can execute on a web browser that allows us to make interactive webpages such as popup menus, animations, form validation, etc.JavaScript has evolved a lot in the past decade. Our JavaScript tutorials will help you understand the core concepts of modern JavaScript, one step at a time."
        />
        <LangData
          image={Php}
          heading="PHP Programming"
          text="PHP is an open-source, interpreted, and object-oriented scripting language that can be executed at the server-side. PHP is well suited for web development. Therefore, it is used to develop web applications (an application that executes on the server and generates the dynamic page.)."
        />
      </div>
    </div>
  );
}

export default Lang;
