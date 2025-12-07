import { createPortal } from "react-dom"

const Forms = () => {
  return createPortal(
     <form>
        <fieldset>
            <legend>Log-In Form</legend>
            <input type="email" placeholder="Enter Your Email"/><br /><br />
            <input type="password" placeholder="Entyer Your Password" /> <br /><br />
            <input type="submit" value="Log-In" />
        </fieldset>
    </form>,
    document.getElementById("portal")
    )
}

export default Forms