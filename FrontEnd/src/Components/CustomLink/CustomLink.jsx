import { Link, useMatch } from "react-router-dom";

export function CustomLink({children, to, ...props}) {
    const math = useMatch(to);
    console.log(math);

    return(
        <Link to={to} 
        style={{
            color:  math ? "#00c4fff8" : "white"
        }}
        {...props}>
            {children}
        </Link>

    );
}
